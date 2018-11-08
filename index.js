const groups = require("@stephanschubert/css-property-groups");

const toRuleObject = names => ({
  emptyLineBefore: "always",
  properties: names.reduce((acc, name) => [...acc, ...groups[name]], []),
});

const related = [
  // Generated content
  ["content"],

  // Position & layout
  ["position", "flexbox", "float", "grid", "columns"],

  // Display & visibility
  ["display", "clipping"],

  // Animations
  ["animation", "transition"],

  // Box model (from outside in)
  ["margin", "box-shadow", "border", "dimensions", "padding"],

  // Background & cursor
  ["background", "cursor"],

  // Typography
  ["color", "typography"],

  // Lists & tables
  ["list", "table"],
];

module.exports = {
  plugins: ["stylelint-order"],
  rules: {
    "declaration-empty-line-before": null,
    "order/properties-order": [
      related.map(toRuleObject),
      { unspecified: "bottom" },
    ],
  },
};
