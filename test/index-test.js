const React = require('react');
const { shallow } = require('enzyme');
const sinon = require('sinon');

const Keypad = require('../components/Keypad');
const EyesOnMe = require('../components/EyesOnMe');

const spy = sinon.spy(console, 'log');

describe('<Keypad />', function () {
  const wrapper = shallow(<Keypad />);

  afterEach(function () {
    spy.reset();
  });

  it('should have one input', function () {
    expect(wrapper.find('input[type]').length).toEqual(1, 'The component has zero or more than one input.')
  });

  it('should have the right input type', function () {
    expect(wrapper.find('input[type="password"]').length).toEqual(1, 'The component does not have a `input[type="password"]` field.')
  });

  it('should trigger console output when typing', function () {
    wrapper.find('input[type="password"]').simulate('keyUp');
    expect(spy.calledOnce).toBeTruthy('The console output is not being triggered when typing');
    expect(spy.firstCall.args[0]).toEqual('Entering password...', 'The console output is not the expected string.');
  });
});

describe('<EyesOnMe />', function () {
  const wrapper = shallow(<EyesOnMe />);

  afterEach(function () {
    spy.reset();
  });

  it('should have one button', function () {
    expect(wrapper.find('button').length).toEqual(1, 'The component has zero or more than one button.')
  });

  it('should trigger console output when focusing', function () {
    wrapper.find('button').simulate('focus');
    expect(spy.calledOnce).toBeTruthy('The console output is not being triggered when focusing the button');
    expect(spy.firstCall.args[0]).toEqual('Good!', 'The console output is not the expected string.');
  });

  it('should trigger console output when removing focus (blur)', function () {
    wrapper.find('button').simulate('blur');
    expect(spy.calledOnce).toBeTruthy('The console output is not being triggered when focusing the button');
    expect(spy.firstCall.args[0]).toEqual('Hey! Eyes on me!', 'The console output is not the expected string.');
  });
});
