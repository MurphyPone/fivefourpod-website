# How to Use
1. install Python 3.6+
2. install python packages `pip install -r requirements.txt`
3. fetch the latest project descriptions with `python fetch.py`
4. build the website locally to verify everything worked
5. deploy by pushing to master

# TODOs

- [x] Create skeleton of website
- [x] Add links to social media
- [x] Add episode cards
- [x] Enable Google analytics
    - [x] Add podcasting email so they can gain insights
- [x] Automate fetching the latest descriptions from apple music
    - [x] titles, summaries (cleaned), dates
    - [ ] truncate descriptions on hover 
- [x] Add webstore somehow...
    - link to TeeSpring
- [x] Add transcripts section
    - [x] double check that the metaphors aren't broken
- [ ] Sponsors?
- [ ] Figure out if all rights _are_ in fact reserved
- [ ] Containerize it rather than hosting on GHP, may not be necessary depending on how much traffic it gets
- [ ] Embed Tweets?
- [ ] Improve build pipeline by adding a developmennt environment rather than solo-doloing inside master
- [x] SEO 
    - [x] meta tags
    - [x] og tags
    - [x] social media specific
        - [x] canonical links
    - [x] google search console, verify the site
    - [x] add a 404.html page
    - [ ] wait for 7-15 days for meta days
- [x] fix the 404 page
    - [x] make the header fill-vertical
    - [x] fix the button styling

### v2 Design 
- show fewer recent episodes
- each transcript should be its own page
- remove hover effect on modals or make them larger to house entire episode descriptions


