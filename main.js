import DefineMap from "can-define/map/map";
import stache from "can-stache";
import rawTemplate from "raw-loader!./main.stache";
import "./hello-world";

const data = new DefineMap({ message: "Hello World" });
const template = stache(rawTemplate);

document.body.appendChild(template(data));
