const moveTop = document.getElementById("top");
const footer = document.querySelector("footer");
const box = document.querySelector(".box");
const header = document.querySelector("header");
const navbar = document.querySelector("#navbar");

const headerOffset = header.offsetHeight + 10;
window.addEventListener("scroll", (e) => {
  // Show navbar
  if (window.scrollY > header.offsetHeight) {
    header.style.display = "none";
    document.body.style.paddingTop = headerOffset + "px";
    navbar.style.display = "flex";
    navbar.style.transform = "translateY(0%)";
  } else {
    document.body.style.paddingTop = "1rem";
    header.style.display = "inline-block";
    navbar.style.transform = "translateY(-100%)";
  }

  // Show back to top button
  const footerOffset = footer.getBoundingClientRect().top;
  if (footerOffset < 1000) {
    moveTop.style.visibility = "visible";
  } else {
    moveTop.style.visibility = "hidden";
  }
});

moveTop.addEventListener("click", backToTop);

function backToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -80);
    setTimeout(backToTop, 0);
  }
}
// Back to Top ends here

// For email sending
$(function () {
  $("#sendEmail").click(function (event) {
    event.preventDefault();
    var email = "awaisabbas47@gmail.com";
    var subject = $(".subject").val();
    var emailBody = $(".message").val();
    var attach = "You Welcome :)";
    document.location =
      "mailto:" +
      email +
      "?subject=" +
      subject +
      "&body=" +
      emailBody +
      "?attach=" +
      attach;
  });
});
// Email sending ends here

/* 
  Projects Section
*/

// Project-1
const form_validator = document.querySelector(".form-validator");
form_validator.addEventListener("click", () => {
  const w = window.open();
  w.location.href = "https://form-validator-vanillajs-6c2824.netlify.app";
});

// Projects Ends here

// Loading Gif
const loading_gif = document.querySelector("#loading-gif");

setTimeout(() => {
  loading_gif.style.display = "none";
  document.querySelector("body").classList.add("body-anim");
}, 3000);

// Loading ends

// Background Changer
const colors = ["7941b9", "479c4e", "3fb4bd"];
const checkBox = document.querySelector("#circleMenu");
const bg_container = document.querySelector("#container");

checkBox.checked = false;
if (checkBox.checked == false) {
  bg_container.style.backgroundColor = "white";
}

checkBox.addEventListener("click", () => {
  const Random = Math.floor(Math.random() * colors.length);
  bg_container.style.backgroundColor = `#${colors[Random]}`;
});
// Background changer ends here
