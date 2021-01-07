

const hamButton = document.querySelector(".btn-burger");
const nav = document.querySelector(".nav");

hamButton.addEventListener('click', () => {
  nav.classList.toggle('active');
})


const arrow = document.querySelector(".arrow-btn");
const arrowNav =document.querySelector(".nav");

arrow.addEventListener('click', () => {
  arrowNav.classList.toggle('active');
})

