import csv
import json
import os
import sys

# open the csv file and read contents to `episodes` dictionary
episodes = {}
with open("episode_info.csv", "r") as f:
    csv_reader = csv.DictReader(f)
    for row in csv_reader:
        episodes[int(row["number"])] = {
            "date": row["date"],
            "title": row["title"],
            "summary": row["summary"],
            "metaphor": row["metaphor"],
        }

# strips invalid url characters from a title for URL
def get_cleaned_title(episode):
    return episode["title"].replace(" - ", "-").replace(" ", "-").replace(".", "").replace(",", "").replace(":", "-").replace("\"", "").replace("\'", "").replace("?", "").replace("(", "").replace(")", "").lower()


def _search_index_path():
    """Path to js/searchIndex.json from project root (same structure as searchBar.js expects)."""
    return f"{os.getcwd().split('scripts')[0]}js/searchIndex.json"


def _episode_to_search_entry(number, episode):
    """Build one search index entry; structure matches searchBar.js."""
    return {
        "title": episode["title"],
        "date": episode["date"],
        "slug": get_cleaned_title(episode),
        "content": "",
        "description": episode["summary"],
        "blurb": episode["metaphor"],
        "index": number,
    }


def update_search_index(number):
    """Add or update this episode in js/searchIndex.json. Call after paginate(number)."""
    path = _search_index_path()
    index_list = []
    if os.path.exists(path):
        with open(path, "r", encoding="utf-8") as f:
            index_list = json.load(f)
    # Replace existing entry for this number or append
    existing = next((i for i, e in enumerate(index_list) if e.get("index") == number), None)
    entry = _episode_to_search_entry(number, episodes[number])
    if existing is not None:
        index_list[existing] = entry
    else:
        index_list.append(entry)
    index_list.sort(key=lambda e: e["index"])
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(index_list, f, indent=2, ensure_ascii=False)


def build_search_index():
    """Rebuild full js/searchIndex.json from current episodes (e.g. after adding many to CSV)."""
    index_list = [_episode_to_search_entry(n, episodes[n]) for n in sorted(episodes.keys())]
    path = _search_index_path()
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(index_list, f, indent=2, ensure_ascii=False)


# open the template file and create a new file with the relevant info plugged in 
def paginate(number):
    with open("../episodes/episode-template/index.html", "r") as f:
        episode = episodes[number]
        lines = f.readlines()
        new_file_list = [None] * len(lines)
        with open(f"processed_transcripts/{number}_CLEANED.txt", "r") as f2:
            transcript = f2.read()


        for i,line in enumerate(lines):
            line = line.replace("[[EPISODE_TITLE]]", episode["title"])
            line = line.replace("[[EPISODE_DESCRIPTION]]", episode["summary"])
            line = line.replace("[[EPISODE_METAPHOR]]", episode["metaphor"])
            line = line.replace("[[TRANSCRIPT]]", transcript)
            new_file_list[i] = line

    cleaned_title = get_cleaned_title(episode)
    target_dir = f"{os.getcwd().split('scripts')[0]}episodes/{cleaned_title}"

    if not os.path.exists(target_dir):
        os.mkdir(target_dir)

    with open(f"{target_dir}/index.html", "w") as f:
        f.writelines(new_file_list)

# uncomment this to generate all pages
# for i in range(1, len(episodes)+1):
#     paginate(i)
    
# generates the dropdown html for an episode (or all episodes)
def dropdown(number=None):
    if number:
        episode = episodes[number]
        out = f"""              <div class="collapsible">{episode["title"]}<a style=float:right;>{number}</a></div>
                <div class="content">
                    <div>
                        <p>{episode["summary"]}</p>
                        <div class="transcript-wrapper">
                            <a href="episodes/{get_cleaned_title(episode)}/" class="transcript-btn">TRANSCRIPT</a>
                        </div>
                    </div>
                </div>
            """
        print(out)
    else:
        for i in range(len(episodes), 0,-1):
            episode = episodes[i]
            out = f"""              <div class="collapsible">{episode["title"]}<a style=float:right;>{i}</a></div>
                    <div class="content">
                        <div>
                            <p>{episode["summary"]}</p>
                            <div class="transcript-wrapper">
                                <a href="episodes/{get_cleaned_title(episode)}/" class="transcript-btn">TRANSCRIPT</a>
                            </div>
                        </div>
                    </div>
                """
            print(out)

# legacy transcripts prior to ep 181 don't have markup, so don't run the whole batch anymore
def paginate_single(number):
    paginate(number)
    update_search_index(number)
    dropdown(number)

# Rebuild full search index from CSV: python paginate.py --build-index
if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "--build-index":
        build_search_index()
        print("Wrote js/searchIndex.json")
    else:
        n = 216
        # paginate_single(n)
        for i in range(182, n + 1):
            paginate_single(i)