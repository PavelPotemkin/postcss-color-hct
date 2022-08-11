const fs = require("fs/promises");
const path = require("path");
const getColorHtc = require("./getColorHct");

const getInputCss = (name) => fs.readFile(path.join(name), "utf8");

const createOutputCss = (path, content) => fs.writeFile(path, content);

const convertCss = async (inputPath, outputPath) => {
	const css = await getInputCss(inputPath);
	const content = getColorHtc(css);
	await createOutputCss(outputPath, content);
};

module.exports = convertCss;
