var typed = new Typed("#element", {
  strings: ["Frontend Developer", "React.js", "React Native"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

var sidenav = document.querySelector(".side-navbar");
const navLinks = document.querySelectorAll(".active");
function handleOpen() {
  sidenav.style.right = "0";
}
function handleClose() {
  sidenav.style.right = "-60%";
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => (sidenav.style.right = "-60%"));
});

function SendMail() {
  var params = {
    name: document.getElementById("name").value,
    email_form: document.getElementById("email_form").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_pysdv3m", "template_4dtiprc", params)
    .then(function (res) {
      alert("Your message has been sent successfully!" + res.status);
    });
}
