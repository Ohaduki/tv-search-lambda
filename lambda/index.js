const axios = require('axios')

exports.handler = async (event) => {
    try{
        const {queryStringParameters} = event
        const query = queryStringParameters?.query
        if (!query) {
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json'},
                'body': "Please input a search query"
            }
        }
        const url = `https://api.tvmaze.com/search/shows?q=${query}`
        const res = await axios.get(url)
        const shows = res.data.map((item) => {
            const show = {}
            show.name = item.show.name
            show.summary = item.show.summary
            if (item.show.image){
                show.image = item.show.image.medium
            }
            return show
        })
        return{
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json'},
            'body': JSON.stringify(shows)
        }
    } catch (err) {
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json'},
            'body': 'An Internal Error Occurred'
        }
    }
}