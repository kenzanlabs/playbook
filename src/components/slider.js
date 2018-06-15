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
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider  ref={slider => (this.slider = slider)} {...settings}>
                <div>
                    <div className="intro">
                        <img className="process" src="/images/process.png" alt="Kenzan Agile process" />
                        <h2>Who are we?</h2>
                        <ul>
                            <li>Chief Technology Officer - Jon Stockdill</li>
                            <li>Director of PMBA - Jen Aczualdez</li>
                            <li>Director of Engineering - Scott Pullano</li>
                        </ul>
                        <h2>Who is Kenzan and what do we Do?</h2>
                        <ul>
                            <li>Software engineering and full service digital consulting firm</li>
                            <li>Application / platform development, architecture consulting, and digital transformation</li>
                            <li>Provides custom E2E solutions that align technical strategy with business goals</li>
                            <li>Craft solutions leveraging cutting-edge technology</li>
                        </ul>
                        <img className="ci" src="/images/continuous.png" alt="Continuous Delivery (© Thoughtworks)" />
                        <h2>The PMBA role expanded:</h2>
                        <ul>
                            <li>Relies heavily on agile methodology & scrum framework</li>
                            <li>Minimize risks to schedule delays, budget overruns, quality issues, and scope creep</li>
                            <li>Facilitate project-related communication (including cross-functional communication)</li>
                            <li>Maximize project team participation and ownership</li>
                            <li>Standardize processes to manage client expectation</li>
                        </ul>
                        <h2>What is Continuous Integration?</h2>
                        <ul>
                            <li>Development practice of integrating code multiple times a day</li>
                            <li>Automating testing and builds on each commit</li>
                            <li>Identifies issues much quicker in the process</li>
                            <li>Makes locating issues significantly easier</li>
                        </ul>
                    </div>
                </div>
                <div className="planning">
                    <h2>Planning</h2>
                    <div>
                        Good projects have dedicated cadences for planning.  This includes Backlog Refinement and Sprint Planning.
                        <img className="planningprocess" src="/images/planning.png" alt="Planning Process" />
                        <h3>Backlog Refinement</h3>
                        <ul>
                            <li>PO owns the backlog</li>
                            <li>Scrum Master works with PO to prioritize the backlog</li>
                            <li>PO ensures all tickets in upcoming sprint are in solid shape</li>
                        </ul>
                        <h3>Sprint Planning</h3>
                        <ul>
                            <li>Explain purpose / scope of each feature </li>
                            <li>Provide estimates for effort</li>
                            <li>Break apart large user stories</li>
                            <li>Review deliverables and commit to what will be worked on</li>
                        </ul>

                    </div>
                </div>
                <div>
                    <h3>Development with Continuous Integration</h3>
                    <div>
                        <p>At Kenzan, Continuous Integration (CI) plays a crucial role here. As complexity and number of features increase, the importance of CI does as well. With large distributed teams CI is a neccessity</p>

                        <p>The Development phase can be broken into many steps:</p>
                        <ul>
                            <li>Creating a feature branch</li>
                            <li>Writing code</li>
                            <li>Writing unit tests</li>
                            <li>Writing integration tests</li>
                            <li>Testing changes locally</li>
                            <li>Commiting changes to source control</li>
                            <li>Pushing committed changes to remote shared repository</li>
                            <li>Create pull requests</li>
                        </ul>

                        <p>Like anything else, tools play a crucial role in the success of development and continuous integration</p>
                        <ul>
                            <li>Git</li>
                            <li>Github</li>
                            <li>Spinnaker</li>
                            <li>Jenkins</li>
                            <li>Google Cloud (GCP)</li>
                        </ul>

                    </div>
                </div>
                <div>
                    <h3>In Review with Continuous Integration</h3>
                    <div>
                        The review phase of the lifecyle can be broken into a few steps:
                        <ul>
                            <li>Reviewing code</li>
                            <li>Collaborating on feedback</li>
                            <li>Resolving integrated build failures</li>
                            <li>Resolving unit / integrated test failures</li>
                            <li>Resolving bugs / gaps</li>
                            <li>Resolving conflicts</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3>Done with CI [Accepted]</h3>
                    <div>
                        The Done phase of the lifecyle can be broken into a few steps:
                        <ul>
                            <li>Approving PR</li>
                            <li>Merging PR</li>
                            <li>Deploying PR</li>
                        </ul>
                    </div>
                </div>
            </Slider>
        );
    }
}