#!/usr/bin/env node

var getNumUnanswered = (function() {
    var request = require("request");

    var params = {
        uri : "http://api.stackexchange.com/2.2/questions/unanswered",
        json : true,
        gzip : true,
        qs : {
            site : "gamedev",
            // We don't actually care about the results themselves, just how many
            // there are.
            filter : "total"
        }
    };

    return function(callback) {
        request(params, function(error, _, response) {
            callback(error, response.total);
        });
    };
})();

var interval = 1000 // 1 second
             * 60   // 1 minute
             * 10   // 10 minutes

var printIt = function() {
    getNumUnanswered(function(error, n) {
        if (error) {
            console.error(error);
        } else {
            console.log(Number(new Date()) + " " + n);
        }
    });
};

// Initial
printIt();

// Interval'd
setInterval(printIt, interval);

