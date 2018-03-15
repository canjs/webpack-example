import Component from "can-component";
import DefineMap from "can-define/map/map";
import stache from "can-stache";

const HelloWorldVM = DefineMap.extend({
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
