# GDSE unanswered questions chart

This is to motivate us to prune our big stack of currently unanswered
questions.

You can expect output to look a bit like this:

![sample chart][1]

## Running

These scripts expect a Linux platform with [Inkscape][2], [ImageMagick][3] and [Node.js][4] installed.

Rendering the chart and gathering data are independent operations.

`npm install`, then run `node index.js >> data` to start collecting data. Run
`./render.sh` to render the `data` into a chart as `out.svg` and `out.png`


[1]: https://cloud.githubusercontent.com/assets/5231746/5365108/4d7cd0de-7fe9-11e4-96c2-b5e221d20d02.png
[2]: https://www.inkscape.org/
[3]: http://www.imagemagick.org/
[4]: http://nodejs.org/
