import Navbar from "../Navbar";
import "../styles/HomeStyles.css";
import "../styles/Services.css";
import "../styles/Project.css";
import "../styles/Protfolio.css";
import "../styles/Contact.css";

export default function Skill() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <h1 className="sub-title">
        My <span>Skills</span>
      </h1>
      <section>
        <div className="container1" id="Skills">
          <h1 className="heading1">Technical Skill</h1>
          <div className="Technical-bars">
            <div className="bar">
              <i style={{ color: " #c95d2e" }} class="fa-brands fa-html5"></i>

              <div className="info">
                <span>HTML</span>
              </div>
              <div className="progress-line html">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <i style={{ color: "#147bbc" }} class="fa-brands fa-css3-alt"></i>

              <div className="info">
                <span>CSS</span>
              </div>
              <div className="progress-line css">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <i style={{ color: "#b0bc1e" }} class="fa-brands fa-js"></i>

              <div className="info">
                <span>Javascript</span>
              </div>
              <div className="progress-line javascript">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <i style={{ color: "#69bcbc" }} class="fa-brands fa-react"></i>

              <div className="info">
                <span>React.Js</span>
              </div>
              <div className="progress-line react">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <i style={{ color: "#c32ec9" }} class="fa-brands fa-react"></i>

              <div className="info">
                <span>React Native</span>
              </div>
              <div className="progress-line reactnative">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <i class="fa-brands fa-github"></i>

              <div className="info">
                <span>Github</span>
              </div>
              <div className="progress-line github">
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div className="container1">
          <h1 className="heading1">Professional Skills</h1>
          <div className="radial-bars">
            <div className="radial-bar">
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle class="progress-bar" cx="100" cy="100" r="80"></circle>
                <circle class="path path-1" cx="100" cy="100" r="80"></circle>
              </svg>
              <div class="percentage">90%</div>
              <div class="text">Creativity</div>
            </div>
            <div className="radial-bar">
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle class="progress-bar" cx="100" cy="100" r="80"></circle>
                <circle class="path path-1" cx="100" cy="100" r="80"></circle>
              </svg>
              <div class="percentage">55%</div>
              <div class="text">Communication</div>
            </div>
            <div className="radial-bar">
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle class="progress-bar" cx="100" cy="100" r="80"></circle>
                <circle class="path path-1" cx="100" cy="100" r="80"></circle>
              </svg>
              <div class="percentage">60%</div>
              <div class="text">Promple solving</div>
            </div>
            <div className="radial-bar">
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle class="progress-bar" cx="100" cy="100" r="80"></circle>
                <circle class="path path-1" cx="100" cy="100" r="80"></circle>
              </svg>
              <div class="percentage">90%</div>
              <div class="text">TeamWork</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
