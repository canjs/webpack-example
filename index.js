// index.js
import { StacheElement } from "can";
import view from "./app.stache";

class MyApp extends StacheElement {
  static view = view;

  static props = {
    message: {
      default: "Hello World!"
    }
  };
}
customElements.define("my-app", MyApp);
