#!/usr/bin/env node

var d3 = require("d3");
var fs = require("fs");

// Read data
var data = (function() {
    return fs.readFileSync("data", {encoding:"utf-8"})
        .split("\n")
        .filter(function(line) {
            // Ignore empty lines
            return line.length > 0;
        })
        .map(function(line) {
            var fields = line.split(" ");
            return {
                date : new Date(Number(fields[0])),
                number : Number(fields[1])
            };
        });
})();

// ---------------------
// SVG constructor stuff
// ---------------------

var width  = 500;
var height = 200;
var marginLeft = 40;
var marginTop  = 40;

var x = d3.time.scale()
    .range([0, width])
    .domain(d3.extent(data, function(d) { return d.date; }));
var y = d3.scale.linear()
    .range([height, 0])
    .domain(d3.extent(data, function(d) { return d.number; }));

var xAxis = d3.svg.axis().scale(x).orient("bottom");
var yAxis = d3.svg.axis().scale(y).orient("left");

var line = d3.svg.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.number); });

// -----------------------
// Actually make the chart
// -----------------------

// Create SVG element
var svg = d3.select("body").append("svg");
var vis = svg.append("g")
    .attr({ width : width, height : height })
    .append("g")
    .attr("transform", "translate(" + marginLeft + "," + marginTop + ")");

// Make a chart
svg.append("path").datum(data).attr("d", line);
svg.append("g").call(xAxis);
svg.append("g").call(yAxis);


// Log the resulting SVG
console.log(svg.node().outerHTML);
