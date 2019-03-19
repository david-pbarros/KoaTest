import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import session from 'koa-session';
import passport from 'koa-passport';

const app = new Koa();
app.keys = ['secret'];

let user = new Router({prefix: '/users'});
let product = new Router({prefix: '/products'});

user.get('/', (ctx, next) => {
    ctx.body = 'Hello user';
});

product.get('/', (ctx, next) => {
    ctx.body = 'Hello product';
});

app
    .use(bodyParser())
    .use(session(app))
    .use(passport.initialize())
    .use(passport.session())
    .use(user.routes())
    .use(product.routes());
  //.use(user.allowedMethods());

app.listen(3000);