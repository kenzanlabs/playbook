import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

describe('<App /> Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should have a "App" classname', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('.App').length).toEqual(1);
  });

  describe('<header />', () => {
    it('should have one <header/> component', () => {
      const wrapper = mount(<App />);

      expect(wrapper.find('header').length).toEqual(1);
    });

    it('should have a "App-header" classname', () => {
      const wrapper = mount(<App />);

      expect(wrapper.find('.App-header').length).toEqual(1);
    });

    it('should have a "<h1/>" element', () => {
      const wrapper = mount(<App />);
      const expectedTitle = "CI Demystified ";

      expect(wrapper.find('h1').length).toEqual(1);
      expect(wrapper.find('h1').text()).toEqual(expectedTitle);
    });

    it('should have a "<p/>" element', () => {
      const wrapper = mount(<App />);
      const expecteText = "How Kenzan uses continuous integration to support the agile lifecycle";

      expect(wrapper.find('p').first().text()).toEqual(expecteText);
    });
  });

  describe('Main section', () => {
    it('should have a "Main" class', () => {
      const wrapper = mount(<App />);

      expect(wrapper.find('.Main').length).toEqual(1);
    });

    it('should have a <ContentSlider /> component', () => {
      const wrapper = mount(<App />);

      expect(wrapper.find('ContentSlider').length).toEqual(1);
    });
  });
});
