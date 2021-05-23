const textArea = document.querySelector(".textBox");
const limitText = document.querySelector(".limit");

// console.log(textArea.value);
// console.log((limitText.textContent = textArea.value));
// const counter = () => {
//   if (textArea.value.length <= 60) {
//   }
// };

textArea.addEventListener("input", () => {
  let text = textArea.value;
  text = text.trim();
  limitText.textContent = text.length;
  if (textArea.value.length >= 60) {
    textArea.classList.add("limitEnd");
    limitText.classList.add("active");
  } else {
    textArea.classList.remove("limitEnd");
    limitText.classList.remove("active");
  }
});
