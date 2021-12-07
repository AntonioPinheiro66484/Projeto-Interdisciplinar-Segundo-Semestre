const express = require('express');
const session = require('express-session');
const consign = require('consign');

const app = express();
app.use(session({secret: '11111111111111111'}));
bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

consign().include('controller/routes').into(app);

app.listen(8081, function () {
    console.info("Servidor funcionando");
})
