const initPinScreen = (selector, onEnter) => {
  const container = document.querySelector(selector);
  const input = container.querySelector(".pin-value");
  const keys = container.querySelectorAll(".pin-key");

  const handleClear = () => {
    input.value = "";
  };

  for (const key of keys) {
    key.addEventListener("click", () => {
      const value = key.textContent.trim();
      if (key.classList.contains("pin-reset")) {
        handleClear();
      } else if (key.classList.contains("pin-enter")) {
        input.value && onEnter && onEnter(input.value, handleClear);
      } else {
        input.value += value;
      }
    });
  }
};

initPinScreen("#mainScreen", (pin, handleClear) => {
  console.log(`Entered Pin: ${pin}`);
  handleClear();
});