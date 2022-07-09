"use strict";

const GITHUB_USERS_API = "https://api.github.com/users/";
const GITHUB_NICKNAME = "VlasovIgorIT";
const GITHUB_API_USER_URL = GITHUB_USERS_API + GITHUB_NICKNAME;
async function getJson(url) {
  const res = await fetch(url);
  return res.json();
}

async function setPage() {
  const PROFILE_INFO = await getJson(GITHUB_API_USER_URL);
  console.log(PROFILE_INFO);

  let profileTitle = document.querySelector(".profile__title");
  let profileBio = document.querySelector(".profile__role");
  let profileImg = document.querySelector(".about__img");
  let profileEmail = document.querySelector(".contact-email");

  profileTitle.innerText = `<!-- Hello This Is ${PROFILE_INFO.name} -->`;
  profileBio.innerText = PROFILE_INFO.bio;
  profileImg.src = PROFILE_INFO.avatar_url;
  profileEmail.href = "mailto: igorvlasov09@yandex.ru";
}

setPage();

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}