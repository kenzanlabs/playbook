import React from 'react';
import ContentSlider from './slider';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

describe('<ContentSlider /> Component', () => {
  it('renders without crashing', () => {
    const Slider = shallow(<ContentSlider />);

    expect(Slider).not.toBeNull();
  });

  it('should have a "handleKeyDown" method', () => {
    const wrapper = shallow(<ContentSlider />).instance();

    expect(wrapper.handleKeyDown).not.toBeNull();
  });

  it('should ADD a "keyDown" listener on the "document" object when component mounts', () => {
    const spy = jest.fn();
    let wrapper;
    global.document.addEventListener = spy;

    expect(spy).not.toHaveBeenCalled();
    wrapper = shallow(<ContentSlider />).instance();

    expect(spy).toBeCalledWith("keydown", wrapper.handleKeyDown);
    spy.mockReset();
    spy.mockRestore();
  });

  it('should REMOVE the "keyDown" listener on the "document" object when component unmounts', () => {
    const wrapper = shallow(<ContentSlider />).instance();
    const spy = jest.fn();

    global.document.removeEventListener = spy;

    expect(spy).not.toHaveBeenCalled();

    wrapper.componentWillUnmount();

    expect(spy).toBeCalledWith("keydown", wrapper.handleKeyDown);
    spy.mockReset();
    spy.mockRestore();
  });

  describe('handleKeyDown method', () => {
    it('triggers the "handleRightClick" method when called ', () => {
      const wrapper = shallow(<ContentSlider />).instance();
      const mockNext = jest.fn();

      wrapper.slider = {slickNext: mockNext}
      expect(mockNext).not.toHaveBeenCalled();

      wrapper.handleKeyDown({key: "ArrowRight"});

      expect(mockNext).toHaveBeenCalled();

      mockNext.mockReset();
      mockNext.mockRestore();
    });

    it('triggers the "handleLeftClick" method when called ', () => {
      const wrapper = shallow(<ContentSlider />).instance();
      const mockPrev = jest.fn();

      wrapper.slider = {slickPrev: mockPrev}
      expect(mockPrev).not.toHaveBeenCalled();

      wrapper.handleKeyDown({key: "ArrowLeft"});

      expect(mockPrev).toHaveBeenCalled();

      mockPrev.mockReset();
      mockPrev.mockRestore();
    });
  });
});
