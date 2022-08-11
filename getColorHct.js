var postcss = require("postcss");
var colorHct = require("postcss-color-hct");

const getColorHtc = (cssContent) => {
	return postcss().use(colorHct()).process(cssContent).css;
};

module.exports = getColorHtc;
