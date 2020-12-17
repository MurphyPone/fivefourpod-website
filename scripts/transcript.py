
import sys 
import os

DEST_PATH = "processed_transcripts"

def clean_file(folder, entry):
    cleaned_lines = []
    with open(f"{folder}/{entry}", "r") as f:
        for line in f:
            if not line == "\n":
                cleaned_lines.append(f"<p>{line.strip()}</p>")
                
    with open(f"{DEST_PATH}/{entry}_CLEANED.txt", "w") as f:
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
                    print(f"\tprocessing single file: {folder}{sub_folder}/{entry}")
                    
                    # clean the given transcript
                    clean_file(f"{folder}{sub_folder}", entry)

else: 
    
    # find the .txt 
    for entry in os.listdir(folder):
        if os.path.isfile(os.path.join(folder, entry)):
            if entry.endswith(".txt"):
                print(f"processing single file: {folder}/{entry}")
                
                # clean the given transcript
                clean_file(folder, entry)


# given a dir, open each sub dir, find the file that ends in .txt, 