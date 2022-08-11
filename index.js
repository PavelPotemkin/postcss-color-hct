const path = require("path");
const Koa = require("koa");
const Router = require("koa-router");
const serve = require("koa-static");
const convertCss = require("./convertCss");

const paths = {
	public: path.resolve(__dirname, "public"),
};

const app = new Koa();
const router = new Router();

app.use(router.routes()).use(serve(paths.public));

const inputCss = path.resolve(paths.public, "input.css");
const outputCss = path.resolve(paths.public, "output.css");

const init = async () => {
	await convertCss(inputCss, outputCss);

	app.listen(3000);
};

init();
