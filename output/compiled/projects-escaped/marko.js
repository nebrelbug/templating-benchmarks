// Compiled using marko@4.13.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/templating-benchmarks$0.0.0/templates/projects-escaped/template.marko",
    components_helpers = require("marko/dist/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/dist/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_attr = marko_helpers.a,
    init_components_tag = marko_loadTag(require("marko/dist/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/dist/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><title>" +
    marko_escapeXml(input.title) +
    "</title></head><body>");

  component_globals_tag({}, out);

  out.w("<p>" +
    marko_escapeXml(input.text) +
    "</p>");

  var for__5 = 0;

  marko_forEach(input.projects, function(project) {
    var keyscope__6 = "[" + ((for__5++) + "]");

    out.w("<a" +
      marko_attr("href", project.url) +
      ">" +
      marko_escapeXml(project.name) +
      "</a><p>" +
      marko_escapeXml(project.description) +
      "</p>");
  });

  if (!input.projects.length) {
    out.w("No projects");
  }

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "9");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ak_: true,
    _l_: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/templating-benchmarks$0.0.0/templates/projects-escaped/template.marko",
    tags: [
      "marko/dist/components/taglib/component-globals-tag",
      "marko/dist/components/taglib/init-components-tag",
      "marko/dist/taglibs/async/await-reorderer-tag"
    ]
  };
