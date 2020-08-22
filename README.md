## Node JS email sender API

#### Usage:

0. Clone repository to your server
0. Change auth tokens in `/src/utils/secret.key.js`
0. Change emails in `/src/routes/index.js`
0. Run `npm run start`
0. Make rest request to url `IP_YOUR_SERVER:1000/send_mail` and body like `application/json`
0. Enjoy!
   
#### Body structure
````
   {
        "from_prefix": "email prefix",
        "recipients": ["test_1@YOUR_EMAIL.com", "test_2@YOUR_EMAIL.com"],
        "subject": "subject of message",
        "html": "<html>html body</html>"
    }
````
