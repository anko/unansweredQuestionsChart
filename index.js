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

getNumUnanswered(function(error, n) {
    console.log(n);
});
