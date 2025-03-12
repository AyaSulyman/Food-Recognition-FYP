"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TensorflowModule = void 0;
var _reactNative = require("react-native");
const LINKING_ERROR = "The package 'react-native-fast-tflite' doesn't seem to be linked. Make sure: \n\n" + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const Tflite = _reactNative.NativeModules.Tflite != null ? _reactNative.NativeModules.Tflite : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const TensorflowModule = Tflite;
exports.TensorflowModule = TensorflowModule;
//# sourceMappingURL=TensorflowModule.js.map