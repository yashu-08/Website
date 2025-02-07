'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

document.getElementById("chatbot-button").addEventListener("click", function() {
  document.getElementById("chatbot-container").style.display = "block";
});

document.getElementById("close-chatbot").addEventListener("click", function() {
  document.getElementById("chatbot-container").style.display = "none";
});

document.getElementById("send-message").addEventListener("click", function() {
  let inputField = document.getElementById("chatbot-input");
  let userMessage = inputField.value;
  if (userMessage.trim() === "") return;
  
  let messagesContainer = document.getElementById("chatbot-messages");
  let userMsgDiv = document.createElement("div");
  userMsgDiv.textContent = "You: " + userMessage;
  messagesContainer.appendChild(userMsgDiv);
  
  inputField.value = "";
  setTimeout(() => {
      let botMsgDiv = document.createElement("div");
      botMsgDiv.textContent = "Bot: " + getBotResponse(userMessage);
      messagesContainer.appendChild(botMsgDiv);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, 1000);
});

function getBotResponse(input) {
  let responses = {
      "hello": "Hi there! How can I assist you today?",
      "services": "We offer Cloud Computing, Cybersecurity, Network Management, Data Storage, and more!",
      "contact": "You can reach us via email at techsolutions@gmail.com or call +91 8899223319.",
      "default": "I'm here to help! Please ask about our services, contact details, or anything else."
  };
  input = input.toLowerCase();
  return responses[input] || responses["default"];
}