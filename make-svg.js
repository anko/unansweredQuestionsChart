#!/usr/bin/env node

var d3 = require("d3");
var fs = require("fs");

// Read data
var data = (function() {
    return fs.readFileSync("data", {encoding:"utf-8"})
        .split("\n")
        .map(function(line) {
            var fields = line.split(" ");
            return {
                date : new Date(Number(fields[0])),
                number : Number(fields[1])
            };
        });
})();

// Create SVG element
var svg = d3.select("body").append("svg")
    .attr({
        width : 500,
        height : 200
    });


// Make a chart
svg.append("circle").attr({
    cx : 50,
    cy : 50,
    r  : 10
});


// Log the resulting SVG
console.log(svg.node().outerHTML);
