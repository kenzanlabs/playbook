import React from 'react';
import Slider from 'react-slick';

export default class ContentSlider extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }


  // As soon as the component mounts, `mySlider` will be focused.
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(e) {
    if (e.key === 'ArrowRight') {
      this.slider.slickNext();
    } else if (e.key === 'ArrowLeft') {
      this.slider.slickPrev();
    }
  }

  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider ref={slider => (this.slider = slider)} {...settings}>
        <div className="App-section intro">
          <img className="process" src="/images/process.png" alt="Kenzan Agile process" />
          <h2 className="section-header capitalize">Who are we?</h2>
          <ul>
            <li>Chief Technology Officer - <i>Jon Stockdill</i></li>
            <li>Director of PMBA - <i>Jen Aczualdez</i></li>
            <li>Director of Engineering - <i>Scott Pullano</i></li>
          </ul>
          <h2 className="section-header capitalize">Who is Kenzan and what do we Do?</h2>
          <ul>
            <li>Software engineering and full service digital consulting firm</li>
            <li>Application / platform development, architecture consulting, and digital transformation</li>
            <li>Provides custom E2E solutions that align technical strategy with business goals</li>
            <li>Craft solutions leveraging cutting-edge technology</li>
          </ul>
        </div>
        <div className="App-section intro">
          <img className="ci" src="/images/continuous.png" alt="Continuous Delivery (© Thoughtworks)" />
          <h2 className="section-header capitalize">The PMBA role expanded:</h2>
          <ul>
            <li>Relies heavily on agile methodology & scrum framework</li>
            <li>Minimize risks to schedule delays, budget overruns, quality issues, and scope creep</li>
            <li>Facilitate project-related communication (including cross-functional communication)</li>
            <li>Maximize project team participation and ownership</li>
            <li>Standardize processes to manage client expectation</li>
          </ul>
          <h2 className="section-header capitalize">What is Continuous Integration?</h2>
          <ul>
            <li>Development practice of integrating code multiple times a day</li>
            <li>Automating testing and builds on each commit</li>
            <li>Identifies issues much quicker in the process</li>
            <li>Makes locating issues significantly easier</li>
          </ul>
        </div>
        <div className="App-section planning">
          <h2 className="section-header capitalize">Planning</h2>
          <div>
              Good projects have dedicated cadences for planning.
              This includes Backlog Refinement and Sprint Planning.
            <img className="planningprocess" src="/images/planning.png" alt="Planning Process" />
            <h3 className="section-subheader">Backlog Refinement</h3>
            <ul>
              <li>PO owns the backlog</li>
              <li>Scrum Master works with PO to prioritize the backlog</li>
              <li>PO ensures all tickets in upcoming sprint are in solid shape</li>
            </ul>
            <h3 className="section-subheader">Sprint Planning</h3>
            <ul>
              <li>Explain purpose / scope of each feature </li>
              <li>Provide estimates for effort</li>
              <li>Break apart large user stories</li>
              <li>Review deliverables and commit to what will be worked on</li>
            </ul>
          </div>
        </div>
        <div className="App-section dev-ci">
          <h2 className="section-header capitalize">Development with Continuous Integration</h2>
          <div>
            <img className="tools" src="/images/gears.png" alt="Gears" />
            <p>At Kenzan, Continuous Integration (CI) plays a crucial role</p>
            <h3 className="section-subheader">What happens in this phase?</h3>
            <ul>
              <li>Creating a feature branch</li>
              <li>Writing code</li>
              <li>Writing tests</li>
              <li>Local testing</li>
              <li>Committing changes to source control (We recommend GIT)</li>
              <li>Running CI pipeline on commit (Build, Lint, Test)</li>
              <li>Creating pull requests</li>
            </ul>
          </div>
        </div>
        <div className="App-section review-ci">
          <h2 className="section-header capitalize">Review Process</h2>
          <div>
            <img className="improvement" src="/images/continuousimprovement.png" alt="Continuous Improvement" />
            <h3 className="section-subheader">What happens in this phase?</h3>
            <ul>
              <li>Reviewing code</li>
              <li>Collaborating on feedback</li>
              <li>Resolving integrated build failures</li>
              <li>Resolving test / linting failures</li>
              <li>Resolving bugs / gaps</li>
              <li>Resolving conflicts</li>
            </ul>
          </div>
        </div>
        <div className="App-section done-ci">
          <h2 className="section-header capitalize">Done</h2>
          <div>
            <img className="done" src="/images/dod.png" alt="Definition of Done" />
            <p>Done can have a very different meaning to different organizations. </p>
            <h3 className="section-subheader">Kenzan's Done Checklist</h3>
            <ul>
              <li>Code is written in full for the feature (including all acceptance criteria)</li>
              <li>Code is checked into source control</li>
              <li>Code is peer reviewed and meets set development standards</li>
              <li>Code builds without errors, Unit tests are written and tests pass</li>
              <li>Code is deployed to appropriate environment and passes integration testing</li>
              <li>Any changes are documented, Remaining estimated hours in the ticket are set to zero, ticket is closed</li>
            </ul>
          </div>
        </div>
        <div className="App-section summary">
          <h2 className="section-header capitalize">In Summary</h2>
          <div>
            <img className="githubflow" src="/images/githubflow.png" alt="Github Flow" />
            <p> As teams become distributed and grow in size, the simple process we walked through today becomes exponentially more complex. </p>
            <h3 className="section-subheader">Key Takeways</h3>
            <ul>
              <li>Complex projects with large distributed teams make CI a MUST!</li>
              <li>Cant do CI alone
                <ul>
                  <li>Agile best practices</li>
                  <li>Solid processes (PR Process, Peer Review)</li>
                  <li>Continuous integration</li>
                </ul>
              </li>
              <li>Embrace automation</li>
              <li>Embrace tools</li>
            </ul>
          </div>
        </div>
      </Slider>
    );
  }
}
