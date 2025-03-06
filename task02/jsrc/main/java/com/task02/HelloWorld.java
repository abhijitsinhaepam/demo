import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.Context;
import software.amazon.awssdk.services.lambda.model.AuthType;
import software.amazon.awssdk.services.lambda.model.InvokeMode;
import software.amazon.awssdk.services.lambda.model.LambdaUrlConfig;

import java.util.HashMap;
import java.util.Map;

@LambdaUrlConfig(authType = AuthType.NONE, invokeMode = InvokeMode.BUFFERED)
public class HelloWorld implements RequestHandler<Object, Map<String, Object>> {
    public Map<String, Object> handleRequest(Object request, Context context) {
        System.out.println("Hello from Lambda");

        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("statusCode", 200);
        resultMap.put("message", "Hello from Lambda");

        return resultMap;
    }
}
