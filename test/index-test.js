import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import Keypad from '../src/components/Keypad';
import EyesOnMe from '../src/components/EyesOnMe';

Enzyme.configure({ adapter: new Adapter() })

const spy = sinon.spy(console, 'log');

describe('<Keypad />', () => {
  const wrapper = shallow(<Keypad />);

  afterEach(function () {
    spy.reset();
  });

  it('should have one input', () => {
    expect(wrapper.find('input[type]').length).to.equal(1, 'The component has zero or more than one input.')
  });

  it('should have the right input type', () => {
    expect(wrapper.find('input[type="password"]').length).to.equal(1, 'The component does not have a `input[type="password"]` field.')
  });

  it('should trigger console output when typing', () => {
    wrapper.find('input[type="password"]').simulate('keyUp');
    expect(spy.calledOnce, 'The console output is not being triggered when typing').to.be.true;
    expect(spy.firstCall.args[0]).to.equal('Entering password...', 'The console output is not the expected string.');
  });
});

describe('<EyesOnMe />', () => {
  const wrapper = shallow(<EyesOnMe />);

  afterEach(() => {
    spy.reset();
  });

  it('should have one button', () => {
    expect(wrapper.find('button').length).to.equal(1, 'The component has zero or more than one button.')
  });

  it('should trigger console output when focusing', () => {
    wrapper.find('button').simulate('focus');
    expect(spy.calledOnce, 'The console output is not being triggered when focusing the button').to.be.true;
    expect(spy.firstCall.args[0]).to.equal('Good!', 'The console output is not the expected string.');
  });

  it('should trigger console output when removing focus (blur)', () => {
    wrapper.find('button').simulate('blur');
    expect(spy.calledOnce, 'The console output is not being triggered when focusing the button').to.be.true;
    expect(spy.firstCall.args[0]).to.equal('Hey! Eyes on me!', 'The console output is not the expected string.');
  });
});
