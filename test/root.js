const path = require('path');
const jsdom = require('jsdom').jsdom;
const fs = require('fs');

const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'));
const exposedProperties = ['window', 'navigator', 'document'];

global.expect = require('expect');
global.document = jsdom(html);
global.window = document.defaultView;

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};
