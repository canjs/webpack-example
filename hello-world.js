var Component = require("can-component");
var DefineMap = require("can-define/map/map");
var stache = require("can-stache");

var HelloWorldVM = DefineMap.extend({
  visible: { default: false },
  message: { default: "Hello There!" }
});

Component.extend({
  tag: "hello-world",
  view: stache("{{#if visible}}{{message}}{{else}}Click me{{/if}}"),
  ViewModel: HelloWorldVM,
  events: {
    click: function() {
      this.viewModel.visible = !this.viewModel.visible;
    }
  }
});
