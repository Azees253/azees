import Navbar from "../Navbar";
import "../styles/HomeStyles.css";
import "../styles/Services.css";
import "../styles/Project.css";
import "../styles/Protfolio.css";
import "../styles/Contact.css";
import azees1 from "../assets/aji2.jpeg";
import azees2 from "../assets/aji4.jpeg";
import ecm from "../assets/ecm.png";
import { useEffect } from "react";
import Typed from "typed.js";
import resume from "../assets/Azees.pdf";
import trvl from "../assets/trvl.jpg";
import shirt from "../assets/shirt.jpg";
import zomato from "../assets/zomato.jpg";

export default function Home() {
  useEffect(() => {
    const options = {
      strings: ["Frontend Developer", "React.js"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };
    const typed = new Typed("#element", options);

    return () => typed.destroy();
  }, []);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, it's Me</h3>
          <h1>Abdul Azees</h1>
          <h3>
            And I'm a <span id="element"></span>
          </h3>
          <p>
            I'm Junior Web Developer job seeker <br />I create E-commerce
            website and React.js Project
          </p>
          <div className="home-sci">
            <a href="https://wa.link/tql3u1" style={{ i: 6 }}>
              <i class="fa-brands fa-whatsapp"></i>
            </a>
            <a href="https://www.instagram.com/azees706/?hl=en">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/azees253/">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/Azees253">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
          <a href="" className="btn-box">
            More About Me
          </a>
        </div>
        <div className="home-background">
          <img src={azees1} alt="" className="home-img" />
        </div>
      </section>
      <section className="about" id="about">
        <div className="about-img">
          <img src={azees2} alt="" />
        </div>
        <div className="about-text">
          <h2>
            About<span>Me</span>
          </h2>
          <h4>Front-end Developer</h4>
          <p>
            "I want to pursue this course in front-end development because I am
            passionate about creating visually appealing and user-friendly web
            applications. I am fascinated by how the combination of design and
            technology can shape user experiences, and I want to develop the
            skills to bring ideas to life on the web.
          </p>
          <a href={resume} className="btn-box1">
            My Resume
          </a>
        </div>
      </section>

      <h1 class="sub-title">
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
      <section>
        <div className="services" id="services">
          <div className="container">
            <h1 className="sub-title">
              My <span>Services</span>
            </h1>
            <div className="services-list">
              <div>
                <i
                  class="fa-solid fa-file-code"
                  style={{ color: "#00eeff" }}
                ></i>

                <h2>FAY-WALK-WEBSITE</h2>
                <p>
                  I created my first React project, a shirt e-commerce website.
                  It includes a home page, a collection page, and a contact
                  page. The website has selection functionality and imported
                  icons, making it useful for clients.
                </p>
                <a
                  href="https://github.com/Azees253/fly-walk.git"
                  className="read"
                >
                  Click
                </a>
              </div>
              <div>
                <i
                  class="fa-solid fa-file-code"
                  style={{ color: "#00eeff" }}
                ></i>
                <h2>TRAVEL-WEBSITE</h2>
                <p>
                  My second project is called "Travel." It has four pages and
                  provides an enjoyable journey through mountains and various
                  destinations. Users can choose their travel locations, make
                  bookings, and access services. The website is colorful and
                  easy to navigate.
                </p>
                <a
                  href="https://github.com/Azees253/travel.git"
                  className="read"
                >
                  Click
                </a>
              </div>
              <div>
                <i
                  class="fa-solid fa-file-code"
                  style={{ color: "#00eeff" }}
                ></i>
                <h2>Zomato-website</h2>
                <p>
                  This project is inspired by the Zomato website. I created it
                  to improve my skills and enhance my creativity. It can be used
                  for multiple purposes in web development.
                </p>
                <a href="https://github.com/Azees253/zomato.git" class="read">
                  Click
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="protfolio" id="protfolio">
          <div className="main-text" id="project">
            <h2>
              Latest <span>Project</span>
            </h2>
            <div className="portfolio-content">
              <div className="row">
                <img src={shirt}></img>
                <div className="layer">
                  <h5>FAY-WALK-WEDSITE-PROJECT</h5>
                  <p>
                    I created my first React project, a shirt e-commerce
                    website. It includes a home page, a collection page, and a
                    contact page. The website has selection functionality and
                    imported icons, making it useful for clients.
                  </p>
                  <a href="https://azees253.github.io/fly-walk/">
                    <i
                      style={{ color: "white" }}
                      class="fa-solid fa-arrow-up-right-from-square"
                    ></i>
                  </a>
                </div>
              </div>
              <div className="row">
                <img src={trvl}></img>
                <div className="layer">
                  <h5>TRAVAL-WEBSITE-PROJECT</h5>
                  <p>
                    My second project is called "Travel." It has four pages and
                    provides an enjoyable journey through mountains and various
                    destinations. Users can choose their travel locations, make
                    bookings, and access services. The website is colorful and
                    easy to navigate.
                  </p>
                  <a href="https://azees253.github.io/travel/">
                    <i
                      style={{ color: "white" }}
                      class="fa-solid fa-arrow-up-right-from-square"
                    ></i>
                  </a>
                </div>
              </div>
              <div className="row">
                <img src={zomato}></img>
                <div className="layer">
                  <h5>Zomato website</h5>
                  <p>
                    This project is inspired by the Zomato website. I created it
                    to improve my skills and enhance my creativity. It can be
                    used for multiple purposes in web development.
                  </p>
                  <a href="https://azees253.github.io/zomato/">
                    <i
                      style={{ color: "white" }}
                      class="fa-solid fa-arrow-up-right-from-square"
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contacts" id="contact">
        <div className="contact-text">
          <h2>
            Contact <span>Me</span>
          </h2>
          <h4>Let,s Work Together</h4>
          <p>
            if you would like to contact me please follow the steps below...
          </p>
          <div className="contact-icons">
            <a href="https://www.linkedin.com/in/azees253/">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://wa.link/tql3u1">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
            <a href="https://www.instagram.com/azees706/?hl=en">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="">
              <i class="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="contact-form">
          <form action="">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Enter your subject"
            />
            <textarea
              name="msg"
              id=""
              cols="40"
              rows="10"
              placeholder="Enter Your message"
              required
            ></textarea>
            <input type="submit" value="submit" className="send" />
          </form>
        </div>
      </section>
      <div class="last-text">
        <p>Developer with love by Abdul Azees @ 2025</p>
      </div>
    </>
  );
}
