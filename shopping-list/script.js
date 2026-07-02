//input text and add it to the list
//once the button is clicked, the text will be added to the list
// i will need to create where the list wiill be displayed

// once the button is clicked, the text will be added to the list
// there will be a button to delete the list item

const input = document.getElementById("item");
const btn = document.getElementById("add-item");
const list = document.createElement("ul");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (input.value.trim() === "") {
    alert("Please enter an item");
    return;
  }

  const listItem = document.createElement("li");
  listItem.textContent = input.value;
  list.appendChild(listItem);

  input.value = "";
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  listItem.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    listItem.remove();
  });
  input.focus();
});
document.body.appendChild(list);
