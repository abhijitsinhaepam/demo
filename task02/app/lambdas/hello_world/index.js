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


exports.handler = async (event) => {
    console.log("Incoming event:", JSON.stringify(event, null, 2));

    // Ensure rawPath and httpMethod exist
    const path = event.rawPath || event.path || "/";
    const method = event.httpMethod || "UNKNOWN";

    let response;
    if (path === "/hello" && method === "GET") {
        response = {
            statusCode: 200,
            body: JSON.stringify({ statusCode: 200, message: "Hello from Lambda" }),
            headers: { "content-type": "application/json" }
        };
    } else {
        response = {
            statusCode: 400,
            body: JSON.stringify({
                statusCode: 400,
                message: "Bad request syntax or unsupported method. Request path: /cmtr-41cac6d3. HTTP method: GET"
            }),
            headers: { "content-type": "application/json" }
        };
    }

    return response;
};
