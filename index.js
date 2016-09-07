const React = require('react');
const ReactDOM = require('react-dom');

const Keypad = require('./components/Keypad');
const EyesOnMe = require('./components/EyesOnMe');

ReactDOM.render(
  <div>
    <Keypad />
    <EyesOnMe />
  </div>,
  document.getElementById('main')
);
