// index.js
import "core-js/stable"
import { Component, route } from "can";
import view from "./app.stache";

Component.extend({
  tag: "my-app",
  view,
  ViewModel: {
    message: {
      default: "Hello World!"
    }
  }
});

route.register("{page}", {page: "home" });
route.start();
