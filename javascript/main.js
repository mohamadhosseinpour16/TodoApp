// select dom node
let add = document.getElementById("Add");
let root = document.getElementById("root");
let input = document.querySelector("input");

// functions
const handleClickAdd = () => {};
const handleClickDelete = () => {};
const handleClickEdit = () => {};
const handleClickSuccess = () => [];

const render = (todolist) => {
  let template = todos.map((todos) => {
    const { title } = todos;
    return `
         <li class="List">${title}
                     <i onclick="handleClickDelete()" class="fa-solid fa-trash" style="color: #000000;"></i>
                     <i onclick="handleClickEdit()" class="fas fa-edit" style="color: #000000;"></i>
                     <i onclick="handleClickSuccess()" class="fa-solid fa-check" style="color: #000000;"></i>
         </li>
        `;
  });
  root.innerHTML += template.join("");
};
render();

// events
add.addEventListener("click", handleClickAdd);
