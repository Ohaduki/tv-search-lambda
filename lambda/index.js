const axios = require('axios')

exports.handler = async (event) => {
    try{
        const axios = require('axios')
        const {queryStringParameters} = event
        if (!queryStringParameters){
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json'},
                'body': "Please input a search query"
            }
        }
        const {query} = queryStringParameters
        if (query === "") {
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json'},
                'body': "Please input a search query"
            }
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
        return{
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json'},
            'body': JSON.stringify(shows)
        }
    } catch (err) {
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps(message)
        }
    }

    console.log(event)
}