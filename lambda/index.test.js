const {handler} = require('./index')

describe('Testing the lambda function', () => {
    it('Searching for a string will return results', async () => {
        const res = await handler(
            {
                queryStringParameters: {
                    query: "star wars"
                }
            }
        )
        expect(res.body).toBeInstanceOf(Array)
        expect(res.statusCode).toBe(200)
    })

    it('Searching for an empty string will return an error message', async () => {
        const res = await handler({
            queryStringParameters: {
                query: ""
            }
        })
        expect(res.body).toBe("Please provide a search query")
        expect(res.statusCode).toBe(400)
    })
})
