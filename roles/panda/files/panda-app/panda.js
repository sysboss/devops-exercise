/*
    PandaService App
*/

var express = require('express'),
    config  = require('./config.json'),
    app     = express();

app.get('/', function (req, res) {
  res.send('Check my resources...');
});

app.use('/resources', express.static('resources'));

app.listen(config.port, function () {
  console.log('Panda app listening on port '+config.port);
});
