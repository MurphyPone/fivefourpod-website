/**
 * Search index is loaded from js/searchIndex.json (built by scripts/paginate.py when you run
 * paginate_single(n) or build_search_index()). The CSV is not deployed.
 */
(async function () {
    const jsonUrl = document.currentScript?.src
        ? new URL('searchIndex.json', document.currentScript.src).href
        : 'js/searchIndex.json';
    let searchIndex;
    try {
        const res = await fetch(jsonUrl);
        if (!res.ok) throw new Error(res.statusText);
        searchIndex = await res.json();
    } catch (e) {
        console.error('Failed to load episode index from', jsonUrl, e);
        return;
    }

    (function () {
        // Get the DOM elements
        let input = document.querySelector('#episode-search');
        let episodeList = document.querySelector('#episode-container');
        let searchStatus = document.querySelector('#search-status')
        let webSearchButton = document.querySelector('#web-search')

        let reversedEpisodeList = [...searchIndex].reverse()
        let filteredEpisodeList = [...reversedEpisodeList]


        if (!input) {
            console.log("failed to find input")
            return;
        }

        if (!episodeList) {
            console.log("failed to find episodeList")
            return;
        }

        if (!searchStatus) {
            console.log("failed to find searchStatus")
            return;
        }

        if (!webSearchButton) {
            console.log("failed to find webSearchButton")
            return;
        }

        webSearchButton.style.display = 'none'
        searchStatus.style.display = 'none'

        webSearchButton.addEventListener('click', () => {
            const query = input.value.toLowerCase()
            window.open(`https://duckduckgo.com/?q=${query}&sites=fivefourpod.com`, "_blank")
        })

        input.addEventListener('input', (event) => {
            const query = event.target.value.toLowerCase()
            console.log(query)

            filteredEpisodeList = [...reversedEpisodeList].filter((episode) => {
                return episode.title.toLowerCase().includes(query) ||
                    episode.date.toLowerCase().includes(query) ||
                    episode.slug.toLowerCase().includes(query) ||
                    episode.content.toLowerCase().includes(query) ||
                    episode.description.toLowerCase().includes(query) ||
                    episode.blurb.toLowerCase().includes(query)

            })

            if (filteredEpisodeList.length === 0){
                webSearchButton.style.display = 'block'
                showResults(filteredEpisodeList)
            } else if (filteredEpisodeList.length === searchIndex.length)  {
                showResults(filteredEpisodeList)
                webSearchButton.style.display = 'none'
                searchStatus.style.display = 'none'
            } else {
                showResults(filteredEpisodeList)
                webSearchButton.style.display = 'none'
                searchStatus.style.display = 'block'
            }

        })

        showResults(filteredEpisodeList)



        /**
         * Show the search results in the UI
         * @param  {Array}  results The results to display
         */
        function showResults (results) {
            if (results.length) {
                searchStatus.innerHTML = `<p>Found ${results.length} matching episodes</p>`;
                episodeList.innerHTML = myTemplate(results);
                var coll = document.getElementsByClassName("collapsible");

                for (var i = 0; i < coll.length; i++) {
                    coll[i].addEventListener("click", function() {
                        this.classList.toggle("active");
                        var content = this.nextElementSibling;
                        if (content.style.maxHeight) content.style.maxHeight = null;
                        else content.style.maxHeight = content.scrollHeight + "px";
                    });
                }
            } else {
                searchStatus.innerHTML = '<p>Sorry, no matches were found.</p>';
                episodeList.innerHTML = '';
            }
        }

        /**
         * Show the search results in the UI
         * @param  {Array}  results The results to display
         */
        function myTemplate (results) {
            const r = results.flatMap((res) => {
                return `
            <div class="collapsible">${res.title}<a style=float:right;>${res.index}</a></div>
                <div class="content">
                    <div>
                        <p>${res.description}</p>
                        <div class="transcript-wrapper">
                            <a href="/episodes/${res.slug}/" class="transcript-btn">TRANSCRIPT</a>
                        </div>
                    </div>
                </div>
            `
            }).join('')
            return r
        }
    })();
})();
