// select dom node
let add = document.getElementById("Add");
let root = document.getElementById("root");
let input = document.querySelector("input");

// functions
const handleClickAdd = () => {
  const newObject = {
    title: input.value,
    id: todos.length,
  };
  todos.push(newObject);
  render();
  input.value = "";
};

const handleClickDelete = (index) => {
  todos.splice(index, 1);
  render()
};


const handleClickEdit = () => {};
const handleClickSuccess = () => [];

const render = (todolist) => {
  let template = todos.map((todo, index) => {
    return `
         <li class="List">${todo.title}
                     <i onclick="handleClickDelete(${index})" class="fa-solid fa-trash" style="color: #000000;"></i>
                     <i onclick="handleClickEdit()" class="fas fa-edit" style="color: #000000;"></i>
                     <i onclick="handleClickSuccess()" class="fa-solid fa-check" style="color: #000000;"></i>
         </li>
        `;
  });
  root.innerHTML = template.join("");
};
render();

// events
add.addEventListener("click", handleClickAdd);
