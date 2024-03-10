const input = document.querySelector(".name-input");
const button = document.querySelector(".submit-button");

button.addEventListener("click", () => {
  alert(`Your name is: ${input.value}`);
});
