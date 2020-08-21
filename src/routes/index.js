var Sendmail = require('sendmail');

const sendmail = Sendmail();

const adminMail = "api@YOUR_EMAIL.com";
const postfix = "api@YOUR_EMAIL.com";

module.exports = async (ctx, next) => {
    if (ctx.isAuth) {
        const {from_prefix, recipients, subject, html} = ctx.request.body;
        const result = {};

        recipients.forEach(recipient => {
            try {
                sendmail({
                    from: `${from_prefix}-${postfix}`,
                    to: recipient,
                    subject,
                    html
                });

                result[recipient] = "OK";
            } catch (e) {
                result[recipient] = e.toString();
            }
        });

        sendmail({
            from: adminMail,
            to: adminMail,
            subject: "API used - /send_mail",
            html: `<pre>
                        <p><b>result:</b> ${JSON.stringify(result)}</p>
                        <p><b>auth_token:</b> ${ctx.header.auth_token}</p>
                   </pre>`
        });

        ctx.body = result;
    }

    await next();
};
