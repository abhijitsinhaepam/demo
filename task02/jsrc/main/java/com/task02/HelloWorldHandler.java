package com.example;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import java.util.Map;
import java.util.HashMap;

public class HelloWorldHandler implements RequestHandler<Map<String, Object>, Map<String, Object>> {
    
    @Override
    public Map<String, Object> handleRequest(Map<String, Object> input, Context context) {
        String path = (String) input.get("path");
        String method = (String) input.get("httpMethod");

        Map<String, Object> response = new HashMap<>();
        response.put("statusCode", 200);

        if ("/hello".equals(path) && "GET".equalsIgnoreCase(method)) {
            response.put("message", "Hello from Lambda");
        } else {
            response.put("statusCode", 400);
            response.put("message", "Bad request syntax or unsupported method. Request path: " + path + ". HTTP method: " + method);
        }

        return response;
    }
}
