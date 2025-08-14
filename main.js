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

var name = document.getElementById("names");
var email = document.getElementById("email");
var subject = document.getElementById("subject");
var message = document.getElementById("message");

function clear() {
  names.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";
}
clear();
