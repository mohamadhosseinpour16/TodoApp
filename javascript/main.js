// select dom node
let add = document.getElementById("Add");
let root = document.getElementById("root");

// functions
const handleAdd = () => {};

const render = (todolist) => {
  let template = todos.map((todos) => {
    const { title } = todos;
    return `<li>${title}</li>`;
  });
  root.innerHTML += template.join("");
};
render();

// events
add.addEventListener("click", handleAdd);
