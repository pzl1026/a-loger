const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors')
const app = new Koa();
app.use(bodyParser());  // 解析request的body

// 解决跨域
app.use(cors({
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization', 'Date'],
    maxAge: 100,
    credentials: true,
    allowMethods: ['GET', 'POST', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Custom-Header', 'anonymous'],
}));

require('./model');

app.use(require('./router').routes());
app.listen(8000);
console.log('app started at port 8000...')
