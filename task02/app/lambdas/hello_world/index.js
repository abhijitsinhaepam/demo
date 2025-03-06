exports.handler = async (event) => {
    const path = event.rawPath || "/";
    const method = event.requestContext.http.method || "GET";

    if (method === "GET" && path === "/hello") {
        return {
            statusCode: 200,
            message: "Hello from Lambda"
        };
    } else {
        return {
            statusCode: 400,
            message: `Bad request syntax or unsupported method. Request path: ${path}. HTTP method: ${method}`
        };
    }
};
