const input = document.getElementById("input");
const submit = document.getElementById("submit");
const clear = document.getElementById("clear");
const paragraph = document.getElementById("paragraph");

clear.addEventListener("click", () => {
  paragraph.innerText = "";
  input.value = "";
});

submit.addEventListener("click", () => {
  const div = document.createElement("div");
  paragraph.append(div);
  div.innerText = input.value;
  div.style.color = "white";
  input.value = "";
});

document.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    const div = document.createElement("div");
    paragraph.append(div);
    div.innerText = input.value;
    div.style.color = "white";
    input.value = "";
  }
});
