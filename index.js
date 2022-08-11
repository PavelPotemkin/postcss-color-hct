const path = require("path");
const Koa = require("koa");
const Router = require("koa-router");
const serve = require("koa-static");
const getCssData = require("./getCssData");

const paths = {
	css: path.resolve(__dirname, "css"),
	public: path.resolve(__dirname, "public"),
};

const app = new Koa();
const router = new Router();

router.get("/css", async (ctx, next) => {
	ctx.body = await getCssData(paths.css);
});

app.use(router.routes()).use(serve(paths.public));

app.listen(3000);
