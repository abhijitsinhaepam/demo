exports.handler = async (event) => {
    let response;
    if (event.rawPath === "/cmtr-41cac6d3" && event.httpMethod === "GET") {
        response = {
            statusCode: 400,
            body: JSON.stringify({
                statusCode: 400,
                message: "Bad request syntax or unsupported method. Request path: /cmtr-41cac6d3. HTTP method: GET"
            }),
        };
    } else {
        response = {
            statusCode: 200,
            body: JSON.stringify({ statusCode: 200,message: "Hello from Lambda" }),
        };
    }
    return response;
};

