exports.handler = async (event) => {
    console.log("SNS Message:", JSON.stringify(event, null, 2));
};
