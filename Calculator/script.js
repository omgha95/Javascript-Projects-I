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

const resetBtnHandler = () => {
  storedNumber = "";
  currentNumber = "";
  operation = "";
  updateScreen(currentNumber);
};

const deleteBtnHandler = () => {
  if (!currentNumber || currentNumber === "0") return;

  if (currentNumber.length === 1) {
    currentNumber = "";
  } else {
    currentNumber = currentNumber.substring(0, currentNumber.length - 1);
  }

  updateScreen(currentNumber);
};

const executeOperation = () => {
  if (storedNumber && currentNumber && operation) {
    switch (operation) {
      case "+":
        storedNumber = parseFloat(storedNumber) + parseFloat(currentNumber);
        break;
      case "-":
        storedNumber = parseFloat(storedNumber) - parseFloat(currentNumber);
        break;
      case "*":
        storedNumber = parseFloat(storedNumber) * parseFloat(currentNumber);
        break;
      case "/":
        storedNumber = parseFloat(storedNumber) / parseFloat(currentNumber);
        break;
    }
    currentNumber = "";
    updateScreen(storedNumber);
  }
};

const operationBtnHandler = (operationValue) => {
  if (!storedNumber && !currentNumber) return;

  if (!storedNumber && currentNumber) {
    storedNumber = currentNumber;
    currentNumber = "";
    operation = operationValue;
  } else if (storedNumber) {
    operation = operationValue;

    if (currentNumber) executeOperation();
  }
};

const keyElementsHandler = (element) => {
  const type = element.dataset.type;
  const value = element.dataset.value;
  element.addEventListener("click", () => {
    if (type === "number") {
      numberBtnHandler(value);
    } else if (type === "operation") {
      switch (value) {
        case "c":
          resetBtnHandler();
          break;
        case "Backspace":
          deleteBtnHandler();
          break;
        case "Enter":
          executeOperation();
          break;
        default:
          operationBtnHandler(value);
      }
    }
  });
};

keyElements.forEach(keyElementsHandler);

// Keyboard Accessability

const availableNumbers = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
];
const availableOperations = ["+", "-", "*", "/"];
const availableKeys = [
  ...availableNumbers,
  ...availableOperations,
  "Backspace",
  "Enter",
  "c",
];

// const handleKeyboardInputWithoutHover = (key) => {
//   if (availableNumbers.includes(key)) {
//     numberBtnHandler(key);
//   } else if (availableOperations.includes(key)) {
//     operationBtnHandler(key);
//   } else if (key === "Backspace") {
//     deleteBtnHandler();
//   } else if (key === "c") {
//     resetBtnHandler();
//   } else if (key === "Enter") {
//     executeOperation();
//   }
// };

const handleKeyboardInputWithHover = (key) => {
  if (availableKeys.includes(key)) {
    const el = document.querySelector(`[data-value="${key}"]`);
    console.log(el, "log");
    el.classList.add("hover");
    el.click();
    setTimeout(() => {
      el.classList.remove("hover");
    }, 200);
  }
};

window.addEventListener("keydown", (e) => {
  handleKeyboardInputWithHover(e.key);
});
