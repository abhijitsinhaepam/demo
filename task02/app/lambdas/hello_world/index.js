// exports.handler = async (event) => {
//     let response;
//     if (event.rawPath === "/cmtr-41cac6d3" && event.httpMethod === "GET") {
//         response = {
//             statusCode: 400,
//             body: JSON.stringify({
//                 statusCode: 400,
//                 message: "Bad request syntax or unsupported method. Request path: /cmtr-41cac6d3. HTTP method: GET"
//             }),
//         };
//     } else {
//         response = {
//             statusCode: 200,
//             body: JSON.stringify({ statusCode: 200,message: "Hello from Lambda" }),
//         };
//     }
//     return response;
// };

// exports.handler = async (event) => {
//     let response;
//     if (event.rawPath === "/hello" && event.httpMethod === "GET") {
//         response = {
//             statusCode: 200,
//             body: JSON.stringify({ statusCode: 200,message: "Hello from Lambda" }),
//         };
       
//     } else {

//         response = {
//             statusCode: 400,
//             body: JSON.stringify({
//                 statusCode: 400,
//                 message: "Bad request syntax or unsupported method. Request path: /cmtr-41cac6d3. HTTP method: GET"
//             }),
//         };
       
//     }
//     return response;
// };



// exports.handler = async (event) => {

//     let response;
//     if (event.rawPath && event.rawPath.endsWith("/hello") && event.httpMethod === "GET") {
//         response = {
//             statusCode: 200,
//             body: JSON.stringify({ statusCode: 200, message: "Hello from Lambda" }),
//             headers: { "content-type": "application/json" }
//         };
//     } else {
//         response = {
//             statusCode: 400,
//             body: JSON.stringify({
//                 statusCode: 400,
//                 message: `Bad request syntax or unsupported method. Request path: ${event.rawPath}. HTTP method: ${event.httpMethod}`
//             }),
//             headers: { "content-type": "application/json" }
//         };
//     }
//     return response;
// };


// 


exports.handler = async (event) => {
    const path = event.rawPath || event.path || "/";
    const method = event.httpMethod || "UNKNOWN";
    console.log(path);
    console.log(method);

    if (path === "/hello" && method === "GET") {
        return {
            statusCode: 200,
            body: JSON.stringify({ statusCode: 200, message: "Hello from Lambda" }),
            headers: { "content-type": "application/json" }
        };
    } 

    return {
        statusCode: 400,
        body: JSON.stringify({
            statusCode: 400,
            message: `Bad request syntax or unsupported method. Request path: ${path}. HTTP method: ${method}`
        }),
        headers: { "content-type": "application/json" }
    };
};
