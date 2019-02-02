import React from 'react';
import { shallow } from 'enzyme';
// import toJSON from 'enzyme-to-json';
import Header from '../../components/Header';

 test('should render Header correclty', () => {
     const wrapper = shallow(<Header />);
    // expect(toJSON(wrapper)).toMatchSnapshot();
    expect(wrapper).toMatchSnapshot();


     //enzyme API
    //  expect(wrapper.find('h1').length).toBe(1);
    //  expect(wrapper.find('h1').text()).toBe('Expensify');


    //  const render = new ReactShallowRenderer();
    //  render.render(<Header />);
    //  expect(render.getRenderOutput()).toMatchSnapshot();
 });