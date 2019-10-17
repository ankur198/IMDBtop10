async function getResult(category) {
    let query = function QueryMaker() {
        let req = "";
        if (category) {
            if (category === 'top') {
                req = "https://api.themoviedb.org/3/movie/top_rated"
            }
            else if (category === 'popular') {
                req = "https://api.themoviedb.org/3/movie/popular"
            }
            else if (category === 'latest') {
                req = "https://api.themoviedb.org/3/movie/now_playing"
            }

            ///-------------------------------API Key---------------------------------
            req += "?api_key=e8f3c8d62ad7a8e053b1d91363fbf201"
            ///-----------------------------------------------------------------------

            return req;
        }
    }();

    async function getData(query) {
        return new Promise((res) => {
            const req = new XMLHttpRequest();
            req.onreadystatechange = function () {
                if (this.status === 200 && this.readyState === 4) {
                    res(JSON.parse(this.response).results.slice(0, 10))
                }
            }
            req.open('GET', query)
            req.send()
        })

    }

    return await getData(query)
}