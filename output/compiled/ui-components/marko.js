// Compiled using marko@4.11.3 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/templating-benchmarks$0.0.0/templates/ui-components/template.marko",
    components_helpers = require("marko/dist/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/dist/runtime/helper-loadTemplate"),
    marko_colors_template = marko_loadTemplate(require.resolve("./components/marko-colors")),
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    marko_colors_tag = marko_loadTag(marko_colors_template);

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"my-app\">");

  marko_colors_tag(data, out, __component, "1");

  out.w("</div>");
}

marko_template._ = marko_renderer(render, {
    ae_: true,
    _l_: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/templating-benchmarks$0.0.0/templates/ui-components/template.marko",
    tags: [
      "./components/marko-colors"
    ]
  };
