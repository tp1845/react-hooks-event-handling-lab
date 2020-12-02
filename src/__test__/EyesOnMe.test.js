import '@testing-library/jest-dom';
import { expect } from 'chai';
import sinon from 'sinon';
import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import EyesOnMe from '../components/EyesOnMe'

Enzyme.configure({ adapter: new Adapter() })

describe('<EyesOnMe />', () => {
  const spy = sinon.spy(console, 'log');
  const wrapper = shallow(<EyesOnMe />);

  afterEach(() => {
    spy.resetHistory();
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
