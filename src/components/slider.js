import React from "react";
import Slider from "react-slick";

export default class ContentSlider extends React.Component {
    constructor(props) {
      super(props);

      this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleKeyDown(e) {
      if(e.key === 'ArrowRight'){
        this.slider.slickNext();
      } else if(e.key === 'ArrowLeft'){
        this.slider.slickPrev();
      }
    }

    // As soon as the component mounts, `mySlider` will be focused.
    componentDidMount() {
      document.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKeyDown);
    }

    render() {
        var settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider  ref={slider => (this.slider = slider)} {...settings}>
                <div>
                    <h3>Prepare backlog</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur, dolor non pharetra fermentum, odio lorem euismod tellus, in volutpat augue lectus eget nunc. Nullam mattis pulvinar tristique. Fusce convallis, orci id auctor sodales, quam dolor viverra nisi, et posuere magna nisl ac nisl. Aenean hendrerit sollicitudin ornare.
                        Nunc a enim laoreet, mollis arcu id, varius dolor. Pellentesque enim ipsum, sollicitudin in venenatis quis, maximus id nunc. Fusce ut blandit lorem, in euismod ipsum. In hac habitasse platea dictumst.

                        Suspendisse in rhoncus urna, et vulputate ipsum. Sed ultricies orci in massa euismod, eleifend interdum mauris faucibus.
                        Cras ornare est vitae ligula pretium aliquet. Aenean eget erat ut elit dictum gravida. Aliquam neque purus, dignissim vel neque vitae, condimentum hendrerit enim. Sed pretium scelerisque mauris quis gravida. Curabitur luctus consectetur vestibulum. Sed ac nisl id sapien sodales fringilla tristique ac sapien. Aliquam et mauris quam.</p>
                </div>
                <div>
                    <h3>Backlog</h3>
                    <p>Fusce nunc ipsum, sagittis eu sollicitudin sit amet, faucibus id lorem. Vivamus et luctus nisi. Suspendisse feugiat, nulla in luctus pellentesque, dui turpis bibendum dui, sit amet consequat risus elit sit amet tortor. Maecenas vel magna massa. Integer vitae odio ultricies, lobortis neque eu, porttitor felis. Praesent tincidunt diam id purus maximus rhoncus. Integer id ex vitae quam cursus condimentum sed quis nisi. Nam tincidunt ante felis, at consectetur est elementum ut. Nunc quis augue non leo condimentum tristique. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus ultricies rhoncus tellus, fermentum faucibus lectus vestibulum at. Morbi et quam arcu. Pellentesque augue urna, facilisis nec tincidunt vel, tristique quis lacus.

                        Etiam ac enim a nisl mattis tempus. Nam sit amet sapien enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam auctor sed sapien in malesuada. Etiam mauris erat, venenatis sed tristique eu, facilisis nec lacus. Etiam condimentum augue quis feugiat condimentum. Nulla facilisis erat est, eget ornare elit finibus ut. Pellentesque aliquam bibendum ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel dolor nibh. Mauris lacus sapien, laoreet ut mauris nec, gravida rutrum quam. Suspendisse potenti.</p>
                </div>
                <div>
                    <h3>Defined</h3>
                    <p>Integer volutpat semper enim. Fusce sodales nec velit ac luctus. Suspendisse faucibus, velit id congue dapibus, tortor tellus consequat odio, vitae tristique justo est sed orci. Cras convallis ligula dui, ac feugiat nulla laoreet scelerisque. Morbi sed quam sit amet orci hendrerit sagittis. Aenean imperdiet eros quis tortor convallis, id viverra massa luctus. Nam blandit sapien vel lacus porttitor eleifend. Fusce aliquam in ligula vitae vulputate. Sed fringilla finibus metus ac fringilla. Nulla at dui ac elit interdum mollis. Morbi varius tincidunt orci ac finibus. Cras non fermentum magna. Aenean in vestibulum leo. Phasellus sit amet molestie massa. Nulla vulputate justo in risus mollis semper. Ut placerat purus porta enim volutpat tempus.</p>
                </div>
                <div>
                    <h3>In-progress</h3>
                    <p>Fusce nunc ipsum, sagittis eu sollicitudin sit amet, faucibus id lorem. Vivamus et luctus nisi. Suspendisse feugiat, nulla in luctus pellentesque, dui turpis bibendum dui, sit amet consequat risus elit sit amet tortor. Maecenas vel magna massa. Integer vitae odio ultricies, lobortis neque eu, porttitor felis. Praesent tincidunt diam id purus maximus rhoncus. Integer id ex vitae quam cursus condimentum sed quis nisi. Nam tincidunt ante felis, at consectetur est elementum ut. Nunc quis augue non leo condimentum tristique. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus ultricies rhoncus tellus, fermentum faucibus lectus vestibulum at. Morbi et quam arcu. Pellentesque augue urna, facilisis nec tincidunt vel, tristique quis lacus.

                        Etiam ac enim a nisl mattis tempus. Nam sit amet sapien enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam auctor sed sapien in malesuada. Etiam mauris erat, venenatis sed tristique eu, facilisis nec lacus. Etiam condimentum augue quis feugiat condimentum. Nulla facilisis erat est, eget ornare elit finibus ut. Pellentesque aliquam bibendum ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel dolor nibh. Mauris lacus sapien, laoreet ut mauris nec, gravida rutrum quam. Suspendisse potenti.</p>
                </div>
                <div>
                    <h3>Completed</h3>
                    <p>Fusce nunc ipsum, sagittis eu sollicitudin sit amet, faucibus id lorem. Vivamus et luctus nisi. Suspendisse feugiat, nulla in luctus pellentesque, dui turpis bibendum dui, sit amet consequat risus elit sit amet tortor. Maecenas vel magna massa. Integer vitae odio ultricies, lobortis neque eu, porttitor felis. Praesent tincidunt diam id purus maximus rhoncus. Integer id ex vitae quam cursus condimentum sed quis nisi. Nam tincidunt ante felis, at consectetur est elementum ut. Nunc quis augue non leo condimentum tristique. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus ultricies rhoncus tellus, fermentum faucibus lectus vestibulum at. Morbi et quam arcu. Pellentesque augue urna, facilisis nec tincidunt vel, tristique quis lacus.

                        Etiam ac enim a nisl mattis tempus. Nam sit amet sapien enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam auctor sed sapien in malesuada. Etiam mauris erat, venenatis sed tristique eu, facilisis nec lacus. Etiam condimentum augue quis feugiat condimentum. Nulla facilisis erat est, eget ornare elit finibus ut. Pellentesque aliquam bibendum ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel dolor nibh. Mauris lacus sapien, laoreet ut mauris nec, gravida rutrum quam. Suspendisse potenti.</p>
                </div>
                <div>
                    <h3>Accepted</h3>
                    <p>Fusce nunc ipsum, sagittis eu sollicitudin sit amet, faucibus id lorem. Vivamus et luctus nisi. Suspendisse feugiat, nulla in luctus pellentesque, dui turpis bibendum dui, sit amet consequat risus elit sit amet tortor. Maecenas vel magna massa. Integer vitae odio ultricies, lobortis neque eu, porttitor felis. Praesent tincidunt diam id purus maximus rhoncus. Integer id ex vitae quam cursus condimentum sed quis nisi. Nam tincidunt ante felis, at consectetur est elementum ut. Nunc quis augue non leo condimentum tristique. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus ultricies rhoncus tellus, fermentum faucibus lectus vestibulum at. Morbi et quam arcu. Pellentesque augue urna, facilisis nec tincidunt vel, tristique quis lacus.

                        Etiam ac enim a nisl mattis tempus. Nam sit amet sapien enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam auctor sed sapien in malesuada. Etiam mauris erat, venenatis sed tristique eu, facilisis nec lacus. Etiam condimentum augue quis feugiat condimentum. Nulla facilisis erat est, eget ornare elit finibus ut. Pellentesque aliquam bibendum ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel dolor nibh. Mauris lacus sapien, laoreet ut mauris nec, gravida rutrum quam. Suspendisse potenti.</p>
                </div>
            </Slider>
        );
    }
}