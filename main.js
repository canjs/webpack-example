var DefineMap = require("can-define/map/map");
var stache = require("can-stache");
var template = stache(require('raw-loader!./main.stache'));

import "./hello-world";

var data = new DefineMap({ message: "Hello World" });

document.body.appendChild(template(data));
