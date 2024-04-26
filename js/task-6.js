function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById("boxes");

  boxesContainer.innerHTML = "";

  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10;
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";
}

document.addEventListener("DOMContentLoaded", function () {
  const createButton = document.querySelector("[data-create]");
  const destroyButton = document.querySelector("[data-destroy]");
  const input = document.querySelector('input[type="number"]');

  createButton.addEventListener("click", function () {
    const amount = parseInt(input.value);
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = "";
    } else {
      alert("Кількість елементів повинна бути в межах від 1 до 100.");
    }
  });

  destroyButton.addEventListener("click", destroyBoxes);
});
