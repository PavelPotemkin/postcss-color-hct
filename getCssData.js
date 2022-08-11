const fs = require("fs/promises");
const path = require("path");
const getColorHtc = require("./getColorHct");

const paths = {
	css: path.resolve(__dirname, "css"),
};

const getCssFilesList = (path) => fs.readdir(path);

const getCssFile = (rootPath, name) =>
	fs.readFile(path.join(rootPath, name), "utf8");

const getCssData = async (path) => {
	const data = [];
	const fileNames = await getCssFilesList(path);

	for (const fileName of fileNames) {
		const cssContent = await getCssFile(path, fileName);

		const outputCssContent = getColorHtc(cssContent);

		data.push({
			name: fileName,
			content: {
				before: cssContent,
				after: outputCssContent,
			},
		});
	}

	return data;
};

module.exports = getCssData;
