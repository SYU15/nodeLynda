var parser = require('node-markdown');

var html = parser.Markdown('Using **markdown** helps you focus on writing, *not* on Markup.');

console.log(html);