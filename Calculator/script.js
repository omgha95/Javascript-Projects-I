const toggleElement = document.querySelector(".themes__toggle");

const toggleTheme = () =>
  toggleElement.classList.toggle("themes__toggle--isActive");

const toggleThemeAccessability = (event) =>
  (event.key === "Enter" || event.key === " ") && toggleTheme();

toggleElement.addEventListener("keydown", toggleThemeAccessability);
toggleElement.addEventListener("click", toggleTheme);

// Numpad logic
let storedNumber = "";
let currentNumber = "";
let operation = "";

const resultElement = document.querySelector(".calc__result");
const keyElements = document.querySelectorAll("[data-type]");

const updateScreen = (value) => {
  resultElement.textContent = !value ? "0" : value;
};

const numberBtnHandler = (value) => {
  if (value === "." && currentNumber.includes(".")) return;
  if (value === "0" && !currentNumber) return;

  currentNumber += value;
  updateScreen(currentNumber);
};

const keyElementsHandler = (element) => {
  element.addEventListener(
    "click",
    () =>
      (element.dataset.type = "number") &&
      numberBtnHandler(element.dataset.value)
  );
};

keyElements.forEach(keyElementsHandler);
