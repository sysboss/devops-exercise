/*
    BigService Bamboo App
*/

var http       = require('http'),
    config     = require('./config.json'),
    dispatcher = require('httpdispatcher'),
    redis      = require("redis").createClient();

// connect to Redis
redis.on('connect', function() {
    console.log('Connected to Redis!');

    // init visits counter
    redis.exists('counter', function(err, reply) {
        if (reply !== 1) {
            console.log('Initializing visits counter');
            redis.set('counter', 0);
        }
    });
});

function handleRequest(request, response){
    try {
        console.log("Requested URL: " + request.url);

        redis.incr('counter', function(err, reply) {
            console.log('COUNTER: ' + reply);
            var counter = "\rGet requests: " + reply,
                _write  = response.write;

            // inject counter
            response.write = function (data) {
                _write.call(response, data.toString() + counter);
            }

            dispatcher.dispatch(request, response);
        });
    } catch(err) {
        console.log(err);
    }
}

dispatcher.onGet("/", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('I <3 Bamboo');
});

dispatcher.onError(function(req, res) {
    res.writeHead(404);
    res.end("404 - Page Does not exists");
});

http.createServer(handleRequest).listen(config.port, function(){
    console.log("Server listening on: http://localhost:%s", config.port);
});
