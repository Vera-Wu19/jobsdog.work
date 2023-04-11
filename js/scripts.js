document.addEventListener("DOMContentLoaded", function () {
  const ctaBtns = document.querySelectorAll(".cta-btn");

  ctaBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      alert("您已点击按钮，此处可以添加更多交互功能。");
    });
  });
});

// Toggle menu
const toggleMenu = document.querySelector(".toggle-menu");
const nav = document.querySelector("nav");

toggleMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const form = document.querySelector(".contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameError = validateName(nameInput.value);
  const emailError = validateEmail(emailInput.value);
  const messageError = validateMessage(messageInput.value);

  displayError(nameInput, nameError);
  displayError(emailInput, emailError);
  displayError(messageInput, messageError);

  if (!nameError && !emailError && !messageError) {
    // Submit the form
  }
});

function validateName(name) {
  if (!name) {
    return "Name is required";
  }
  return "";
}

function validateEmail(email) {
  if (!email) {
    return "Email is required";
  }
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email)) {
    return "Please enter a valid email";
  }
  return "";
}

function validateMessage(message) {
  if (!message) {
    return "Message is required";
  }
  return "";
}

function displayError(input, errorMessage) {
  const errorDiv = input.nextElementSibling;
  errorDiv.textContent = errorMessage;
}
