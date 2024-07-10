package com.rmldemo.guardsquare

import android.util.Log
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class DetectionModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "DetectionModule"
    }

    @ReactMethod
    fun getDetectionReport(promise: Promise) {
        promise.resolve(MainApplication.detectionReport)
        Log.d("TAG", "getDetectionReport: ${MainApplication.detectionReport}")
    }

    @ReactMethod
    fun getPesan(promise: Promise) {
        promise.resolve(MainApplication.pesan)
        Log.d("TAG", "getPesan: ${MainApplication.pesan}")
    }
}
