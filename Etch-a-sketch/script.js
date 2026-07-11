//if a user clicks the reset button, prompt them for a new grid size and create a new grid with that size. The maximum size is 100. If the user enters a number greater than 100, alert them that the maximum size is 100. If the user enters a number less than 1, alert them that the minimum size is 1.
// i need to make sure the user number create a square grid with that side length. For example, if the user enters 16, the grid should be 16x16. If the user enters 100, the grid should be 100x100. If the user enters 1, the grid should be 1x1.
// how do i make sure the grid sizes is displayed correct in width and height?
//when a user cancel what should my grid display? should it display the default grid size of 16x16 or should it display nothing? I think it should display the default grid size of 16x16.

const container = document.querySelector(".container");

const boardSize = container.clientWidth;

const resetButton = document.querySelector(".reset-btn");

resetButton.addEventListener("click", function () {
  const input = prompt("Enter the number of squares per side (max 100):");
  if (input === null) {
    return;
  }
  const size = Number(input);

  if (isNaN(size)) {
    alert("Please enter a valid number.");
    return;
  }

  if (size > 100) {
    alert("Please enter a number less than or equal to 100.");
  } else if (size < 1) {
    alert("Please enter a number greater than or equal to 1.");
  } else {
    container.innerHTML = "";
    createGrid(size);
  }
});

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const canvas = document.createElement("div");
    container.appendChild(canvas);
    canvas.style.width = `${boardSize / size}px`;
    canvas.style.height = `${boardSize / size}px`;
    canvas.classList.add("canvas");
    canvas.addEventListener("mouseover", function () {
      const randomColor = Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
      canvas.style.backgroundColor = `#${randomColor}`;
    });
  }
}
createGrid(16);
