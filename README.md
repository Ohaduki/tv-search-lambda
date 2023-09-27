# TV show search with Lambda function.

## Function
- The function makes a request to the tvmaze api with the contents of the query recieved from the API gateway event.
- The API endpoint is: https://5c4kzcz673.execute-api.eu-north-1.amazonaws.com/default/
- The function validates that a query is indeed provided and returns a json with the response or relevant errors (400 or 500).

## Testing
- I wrote some simple tests to make sure that the function returns results when a query is provided and returns an error when no query is provided.
- I also wrote an AWS SAM config file and used it to run and test the function locally.


## Deployment
- I used the AWS console to deploy.

## Frontend
- The frontend is a simple design, that displays the search results or an error message if needed.
