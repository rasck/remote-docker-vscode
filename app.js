const Koa = require('koa');
const app = new Koa();
const fs = require('fs').promises

app.use(async (ctx, next) => {
    const file = await fs.readFile(__dirname + '/index.html', 'utf8')
    ctx.body = file;
    await next();
});

app.listen(3000);