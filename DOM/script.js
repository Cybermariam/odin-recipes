const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const redText = document.createElement("p");

redText.textContent = "Hey I'm red!";
redText.style.color = "red";
container.appendChild(redText);

const blueHeading = document.createElement("h3");
blueHeading.textContent = "I'm a blue h3!";
blueHeading.style.color = "blue";
container.appendChild(blueHeading);

const blackDiv = document.createElement("div");
blackDiv.style.border = "1px solid black";
blackDiv.style.backgroundColor = "pink";

const anotherHeading = document.createElement("h1");

anotherHeading.textContent = "I'm in a div";

blackDiv.appendChild(anotherHeading);

container.appendChild(blackDiv);

const anotherParagraph = document.createElement("p");

anotherParagraph.textContent = "ME TOO!";

blackDiv.appendChild(anotherParagraph);

// the JavaScript file
const btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
  alert("Hello World");
  console.log(e.target);
});
