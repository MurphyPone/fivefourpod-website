# The Official Website for 5-4

## Scripts

### `scripts/fetch` 
- Broken from Apple rearranging their layout. 

### `scripts/transcript` 
- invoke from the `scripts/` directory with the argument pointing to either a single file, or the directory storing raw `.txt` transcripts e.g.

```
scripts/ $ python transcript.py ../FIVEFOUR_TRANSCRIPTS
scripts$ python transcript.py ../FIVEFOUR_TRANSCRIPTS/
processing all transcript files
        processing single file 40: ../FIVEFOUR_TRANSCRIPTS/40. Ashcroft v. Iqbal (How do you Plead)/FIVEFOUR_Iqbal_master.txt
        processing single file 8: ../FIVEFOUR_TRANSCRIPTS/8. RNC v. DNC/FIVEFOUR_Emergency_Pod_040820_Final.txt
        processing single file 38: ../FIVEFOUR_TRANSCRIPTS/38. Election Ep (Courts Can't Save)/FIVEFOUR_Election Episode_master.txt
...
```

- outputs HTML formatted transcripts to a specified destination folder, numbered by episode

### `scripts/paginate` 
- reads the `episode_info.csv` file into a dictionary 
- the `paginate()` function can be used to generate a `/episodes/<episode>.html` file from the `episode-template.html` file
- the `dropdown()` function can be used to generate a dropdown description HTML snippet for the home page, linking to the generated episode page


## Episodes I still need .txt transcripts for 

- Giving 2023: https://www.dropbox.com/scl/fo/ig55jhyz6hg9kynx5zbrf/AKdTt0c3tUoqgFtC_PTzxu4?rlkey=g8j94thoiwje9p9oj8wdk29i0&dl=0
- If books could kill: Outliers
- 5-4 x bloc part
- Brett Kavanaugh unlocked
- Dobbs v Jackson
- Illinois v Cabellas
- Maryland v. Shatzer
- Giving Guide 2023
- Trump v. Anderson
- Welcome to Law School Again