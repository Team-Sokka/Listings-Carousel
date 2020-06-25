import React from 'react';
import {configure, mount, render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/components/App.jsx';
import ListingsView from '../client/components/listingsView.jsx';

configure({ adapter: new Adapter() });


describe('Listings Carousel Component Tests', () => {
  test('Should render ListingsView', () => {
    const wrapper = mount(<ListingsView />);
    expect(wrapper).toBe(true);
  })
});