import Navbar from "../Navbar";
import "../styles/HomeStyles.css";
import "../styles/Services.css";
import "../styles/Project.css";
import "../styles/Protfolio.css";
import "../styles/Contact.css";
import React from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm(
      "service_ukieswo",
      "template_4dtiprc",
      e.target,
      "NtGd6cRhtVM-0rput"
    );
    Swal.fire({
      title: "Successfully!",
      text: "You Gmail send!",
      icon: "success",
    });
  }
  return (
    <>
      <div className="nav">
        <Navbar />
      </div>
      <section className="contacts" id="contact">
        <div className="contact-text">
          <h2>
            Contact <span>Me</span>
          </h2>
          <h4>Let,s Work Together</h4>
          <p>
            I believe we can achieve great results by combining our skills and
            perspectives on this project. Let's work together to meet our
            deadlines and deliver outstanding work. I'm available to discuss any
            challenges you're facing, and I welcome your ideas and feedback.
            Looking forward to our collaboration!
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
            <a href="mailto:mohamedazees61@gmail.com">
              <i class="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            />
            <input
              type="email"
              name="email_form"
              placeholder="Enter Your Email"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Enter your subject"
            />
            <textarea
              name="message"
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
    </>
  );
}
