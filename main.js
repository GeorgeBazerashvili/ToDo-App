const input = document.getElementById("input");
const submit = document.getElementById("submit");
const clear = document.getElementById("clear");
const paragraph = document.getElementById("paragraph");
const containerGood = document.getElementById("container-good")


clear.addEventListener("click", () => {
  paragraph.innerText = "";
  containerGood.innerText = ""
  input.value = "";
});

submit.addEventListener("click", () => {
  const paragraph = document.getElementById("paragraph")
  if (input.value !== "") {
    const container = document.createElement("div")
    const div = document.createElement("div")
    div.classList.add("div3")
    paragraph.append(container)
    container.append(div)
    container.classList.add("styling")
    const div2 = document.createElement("div")
    container.append(div2)
    div2.classList.add("div2")
    div.innerText = input.value
    div2.innerText = "Remove"
    input.value = ""
    const doneTask = document.createElement("div")
    container.appendChild(doneTask)
    doneTask.innerText = "Done"
    doneTask.classList.add("doneBtn")
    doneTask.addEventListener("click", () => {
      div.classList.toggle("text-decoration")
    })
    div2.addEventListener("click", () => {
      container.style.display = "none"
    })
  }
});

document.addEventListener("keydown", (e) => {
  if (e.keyCode == 13 && input.value !== "") {
    const container = document.createElement("div")
    const div = document.createElement("div")
    div.classList.add("div3")
    paragraph.append(container)
    container.append(div)
    container.classList.add("styling")
    const div2 = document.createElement("div")
    container.append(div2)
    div2.classList.add("div2")
    div.innerText = input.value
    div2.innerText = "Remove"
    input.value = ""
    const doneTask = document.createElement("div")
    container.appendChild(doneTask)
    doneTask.innerText = "Done"
    doneTask.classList.add("doneBtn")
    doneTask.addEventListener("click", () => {
      div.classList.toggle("text-decoration")
    })
    div2.addEventListener("click", () => {
      container.style.display = "none"
    })
  } else if (e.keyCode == 46) {
    paragraph.innerText = "";
  }
});

myFunction("https://catfact.ninja/fact")

async function myFunction(file) {
  let x = await fetch(file)
  let y = await x.text()
  document.getElementById("paragraph").innerHTML = y
}
