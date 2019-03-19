'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _koaSession = require('koa-session');

var _koaSession2 = _interopRequireDefault(_koaSession);

var _koaPassport = require('koa-passport');

var _koaPassport2 = _interopRequireDefault(_koaPassport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default();
app.keys = ['secret'];

var user = new _koaRouter2.default({ prefix: '/users' });
var product = new _koaRouter2.default({ prefix: '/products' });

user.get('/', function (ctx, next) {
    ctx.body = 'Hello user';
});

product.get('/', function (ctx, next) {
    ctx.body = 'Hello product';
});

app.use((0, _koaBodyparser2.default)()).use((0, _koaSession2.default)(app)).use(_koaPassport2.default.initialize()).use(_koaPassport2.default.session()).use(user.routes()).use(product.routes());
//.use(user.allowedMethods());

app.listen(3000);