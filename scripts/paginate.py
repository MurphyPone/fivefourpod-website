import csv 
import os

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
    dropdown(number)

paginate_single(190)