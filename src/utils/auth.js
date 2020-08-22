var secret_keys = require('./secret.key');

module.exports = async (ctx, next) => {
    if (secret_keys.find(secret_key => secret_key === ctx.header['auth-token'])) {
        ctx.isAuth = true;
    } else {
        ctx.isAuth = false;
        ctx.body = "Not authenticated";
        ctx.response.status = 401;
    }

    await next();
};
