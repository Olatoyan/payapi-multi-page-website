"use strict";

const openNav = document.querySelector(".nav-open");
const closeNav = document.querySelector(".nav-close");
const nav = document.querySelector(".main-nav");

const displayNav = function () {
  nav.classList.toggle("mid:hidden");
  nav.classList.toggle("mid:flex");
  nav.classList.toggle("mid:opacity-0");
  nav.classList.toggle("mid:translate-x-full");
  nav.classList.toggle("mid:invisible");

  console.log("menu");
};

openNav.addEventListener("click", displayNav);
closeNav.addEventListener("click", displayNav);
