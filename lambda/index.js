const axios = require('axios')

exports.handler = async (event) => {
    try{
        const axios = require('axios')
        const {query} = event
        if (query === "") {
            return "Please provide a search query"
        }
        const url = `https://api.tvmaze.com/search/shows?q=${query}`
        const res = await axios.get(url)
        const shows = res.data.map((item) => {
            return {
                name: item.show.name,
                summary: item.show.summary,
                image: item.show.image.medium
            }
        })
        return shows
    } catch (err) {
        return ("An error occurred")
    }
}