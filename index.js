module.exports = function () {
  return function ({ addVariant }) {
    addVariant('rem', ({container}) => {
      let prop;
      let value;

      container.walkRules((rule) => {
        rule.walkDecls((decl) => {
          value = decl.value.split('px')[0];
          prop = decl.prop;
        });

        rule.removeAll();
        rule.prepend(postcss.decl({prop, value: `${value / 16}rem`}));
      });
    });
  }
}