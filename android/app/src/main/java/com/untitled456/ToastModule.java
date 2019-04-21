package com.untitled456;

import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nonnull;
import javax.annotation.Nullable;

public class ToastModule extends ReactContextBaseJavaModule {

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    public ToastModule(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
    }
    /**
     *
     * @return js调用的模块名
     */
    @Override
    public String getName() {
        return "ToastModule";
    }

    /**
     * 给rn定义模块的一些常量
     * @return 常量的一些键值
     */
    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }

    /**
     * 使用ReactMethod注解，使这个方法被js调用
     * @param message 文本
     * @param duration 时长
     */
    @ReactMethod
    public void show(String message, int duration, Callback success, Callback error) {
        try {

            Toast.makeText(getReactApplicationContext(), message, duration).show();
            success.invoke("success");
        }
        catch (Exception e){
            error.invoke("error");
        }
    }

}
