// index.js
import {Component} from "can";
import view from "raw-loader!./app.stache";

Component.extend({
  tag: "my-app",
  view,
  ViewModel: {
    message: {
      default: "Hello World"
    }
  }
});
