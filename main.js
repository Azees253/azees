var typed = new Typed("#element", {
  strings: ["Frontend Developer", "React.js", "React Native"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

var sidenav = document.querySelector(".side-navbar");

function handleOpen() {
  sidenav.style.right = "0";
}
function handleClose() {
  sidenav.style.right = "-60%";
}
function sendEmail() {
  Email.send({
    Host: "smtp.mailendo.com",
    Username: "username",
    Password: "password",
    To: "them@website.com",
    From: "you@isp.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
