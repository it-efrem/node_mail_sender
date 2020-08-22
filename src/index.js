var path = require('path');
var logger = require('koa-logger');
var Router = require('koa-router');
var koaBody = require('koa-body');
var Koa = require('koa');
var app = module.exports = new Koa();
const cors = require('@koa/cors');

var mail_sender = require('./routes');
var auth_check = require('./utils/auth');
var port = 1000;

const router = new Router();
router.post('/send_mail', koaBody(), mail_sender);

app.use(cors({
    allowHeaders : 'content-type, auth_token',
    exposeHeaders: 'Content-Disposition',
    credentials: true,
}));
app.use(auth_check);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(logger());

if (!module.parent) {
    app.listen(port);
    console.log(`koa listening on port ${port}`);
}
