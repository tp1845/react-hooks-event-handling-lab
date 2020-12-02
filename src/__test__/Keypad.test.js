import '@testing-library/jest-dom';
import { expect } from 'chai';
import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Keypad from '../components/Keypad'

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
