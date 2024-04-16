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
for i in range(1, len(episodes)+1):
    paginate(i)
    
# generates the dropdown html for an episode (or all episodes)
def getResult(number=None):
    if number:
        episode = episodes[number]
        title = episode['title'].replace('"', '\"')
        date = episode['date']
        cleaned_title = get_cleaned_title(episode)
        description = episode["summary"].replace('"', '\"')
        blurb = episode["metaphor"].replace('"', '\"')

        out = "{" + f"""
    title: `{title}`,
    date: `{date}`,
    slug: `{cleaned_title}`,
    content: ``,
    description: `{description}`,
    blurb: `{blurb}`,
    index: {number}
""" + "},"
        print(out)
    else:
        print(len(episodes))
        for i in range(1, len(episodes)+1):
            episode = episodes[i]
            title = episode['title'].replace('"', '\"')
            date = episode['date']
            cleaned_title = get_cleaned_title(episode)
            description = episode["summary"].replace('"', '\"')
            blurb = episode["metaphor"].replace('"', '\"')

            out = "{" + f"""
    title: `{title}`,
    date: `{date}`,
    slug: `{cleaned_title}`,
    content: ``,
    description: `{description}`,
    blurb: `{blurb}`,
    index: {i}
""" + "},"
            print(out)

getResult()
