function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");
const buttonEl = document.querySelector(".change-color");

const colorChange = () => {
  const changedColor = getRandomHexColor();
  bodyEl.style.backgroundColor = changedColor;
  spanEl.textContent = changedColor;
};

buttonEl.addEventListener("click", colorChange);