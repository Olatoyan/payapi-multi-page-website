"use strict";

const openNav = document.querySelector(".nav-open");
const closeNav = document.querySelector(".nav-close");
const nav = document.querySelector(".main-nav");
const form = document.querySelector("form");
const nameField = document.querySelector(".name");
const emailField = document.querySelector(".email");
const companyField = document.querySelector(".company");
const titleField = document.querySelector(".title");
const messageField = document.querySelector(".message");
const submit = document.querySelector(".submit");
const checkboxField = document.getElementById("checkbox");
const checkboxError = document.querySelector(".checkbox-error");

const displayNav = function () {
  nav.classList.toggle("mid:opacity-0");
  nav.classList.toggle("mid:translate-x-full");
  nav.classList.toggle("mid:invisible");

  console.log("menu");
};

openNav.addEventListener("click", displayNav);
closeNav.addEventListener("click", displayNav);

submit.addEventListener("click", function (e) {
  e.preventDefault();

  if (nameField.value.trim() === "") {
    showErrorMessage(nameField);
  } else {
    hideErrorMessage(nameField);
  }

  if (emailField.value.trim() === "") {
    showErrorMessage(emailField);
  } else {
    hideErrorMessage(emailField);
  }

  if (companyField.value.trim() === "") {
    showErrorMessage(companyField);
  } else {
    hideErrorMessage(companyField);
  }

  if (titleField.value.trim() === "") {
    showErrorMessage(titleField);
  } else {
    hideErrorMessage(titleField);
  }

  if (messageField.value.trim() === "") {
    showErrorMessage(messageField);
  } else {
    hideErrorMessage(messageField);
  }
  if (!checkboxField.checked) {
    showCheckboxErrorMessage();
  } else {
    hideCheckboxErrorMessage();
  }

  if (
    nameField.value.trim() !== "" &&
    emailField.value.trim() !== "" &&
    companyField.value.trim() !== "" &&
    titleField.value.trim() !== "" &&
    messageField.value.trim() !== "" &&
    checkboxField.checked
  ) {
    form.submit();
  }
});

const showErrorMessage = function (field) {
  const errorLabel = field.nextElementSibling;
  errorLabel.classList.remove("hidden");
};

const hideErrorMessage = function (field) {
  const errorLabel = field.nextElementSibling;
  errorLabel.classList.add("hidden");
};

const showCheckboxErrorMessage = function () {
  checkboxError.classList.remove("hidden");
};

const hideCheckboxErrorMessage = function () {
  checkboxError.classList.add("hidden");
};
