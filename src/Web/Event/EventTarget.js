/* global EventTarget */
"use strict";

exports._read = function (left) {
  return function (right) {
    return function (foreign) {
      return foreign instanceof EventTarget ? right(foreign) : left("Value is not an EventTarget");
    };
  };
};

exports.eventListener = function (fn) {
  return function (event) {
    return fn(event);
  };
};

exports.addEventListener = function (type) {
  return function (listener) {
    return function (useCapture) {
      return function (target) {
        return function () {
          target.addEventListener(type, listener, useCapture);
          return {};
        };
      };
    };
  };
};

exports.removeEventListener = function (type) {
  return function (listener) {
    return function (useCapture) {
      return function (target) {
        return function () {
          target.removeEventListener(type, listener, useCapture);
          return {};
        };
      };
    };
  };
};

exports.dispatchEvent = function (event) {
  return function (target) {
    return function () {
      return target.dispatchEvent(event);
    };
  };
};
