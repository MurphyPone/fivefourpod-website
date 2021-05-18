
import sys 
import os

DEST_PATH = "processed_transcripts"

def clean_file(folder, entry, number):
    cleaned_lines = []
    with open(f"{folder}/{entry}", "r") as f:
        for line in f:
            if not line == "\n":
                cleaned_lines.append(f"<p>{line.strip()}</p>")
    with open(f"{DEST_PATH}/{number}_CLEANED.txt", "w") as f:
        for line in cleaned_lines:
            f.write(f"{line}\n")


# TODO late this should accept a single file
folder = sys.argv[1] 

if folder == "../FIVEFOUR_TRANSCRIPTS/":
    # do all 
    print("processing all transcript files")
    for sub_folder in os.listdir(folder):
        for entry in os.listdir(f"{folder}{sub_folder}"):
            if os.path.isfile(os.path.join(f"{folder}{sub_folder}", entry)):
                if entry.endswith(".txt"):
                    number = sub_folder.split(".")[0]
                    print(f"\tprocessing single file {number}: {folder}{sub_folder}/{entry}")
                    
                    # clean the given transcript
                    clean_file(f"{folder}{sub_folder}", entry, number)

else: 
    # find the .txt 
    for entry in os.listdir(folder):
        if os.path.isfile(os.path.join(folder, entry)):
            if entry.endswith(".txt"):
                number = folder.split(".")[0]
                print(f"\tprocessing single file {number}: {folder}/{entry}")
                
                # clean the given transcript
                clean_file(folder, entry, number)


# given a dir, open each sub dir, find the file that ends in .txt, 