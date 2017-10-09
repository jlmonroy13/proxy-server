var proxy = require('express-http-proxy');
var cors = require('cors');
var app = require('express')();
 
app.use(cors());
app.use('/', proxy('https://impraise-shorty.herokuapp.com/'));

app.listen(5001)
