import csv 
import os

# open the csv file 
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

def get_cleaned_title(episode):
    return episode["title"].replace(" ", "-").replace(".", "").replace(",", "").replace(":", "-").lower()


# open the template file and create a new file with the relevant info plugged in 
def paginate():
    with open("../episodes/episode-template/index.html", "r") as f:
        episode = episodes[number]
        lines = f.readlines()
        new_file_list = [None] * len(lines)
        for i,line in enumerate(lines):
            line = line.replace("[[EPISODE_TITLE]]", episode["title"])
            line = line.replace("[[EPISODE_DESCRIPTION]]", episode["summary"])
            line = line.replace("[[EPISODE_METAPHOR]]", episode["metaphor"])
            new_file_list[i] = line

    cleaned_title = get_cleaned_title(episode)
    target_dir = f"{os.getcwd().split('scripts')[0]}episodes/{cleaned_title}"

    if not os.path.exists(target_dir):
        os.mkdir(target_dir)

    with open(f"{target_dir}/index.html", "w") as f:
        f.writelines(new_file_list)

# for i in range(1, len(episodes)+1):
#     number = i 
#     paginate()
    

def dropdown():
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

dropdown()

    


