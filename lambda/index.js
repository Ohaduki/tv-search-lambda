const axios = require('axios')
const { it } = require('node:test')

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
        console.log(err)
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json'},
            'body': 'An Internal Error Occurred'
        }
    }

    console.log(event)
}