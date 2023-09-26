const handler = require('./index')

test('Searching for a string will return results', async () => {
    const res = await handler("star wars")
    expect(res).toBeInstanceOf(Array)
})

test('Searching for an empty string will return an error message', async () => {
    const res = await handler("")
    expect(res).toBe("Please provide a search query")
})
