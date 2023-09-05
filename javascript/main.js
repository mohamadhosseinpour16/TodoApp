// select dom node
let add = document.getElementById("Add");
let root = document.getElementById("root");
let input = document.querySelector("input");

// variable
let isEditingMode = -1;

// functions
const handleClickAdd = () => {
  if (isEditingMode > -1) {
    todos[isEditingMode].title = input.value;
    isEditingMode = -1;
  } else {
    const newObject = {
      title: input.value,
      id: todos.length,
    };
    todos.push(newObject);
  }
  input.value = "";
  isEditingMode = -1;
  render();
};

const handleClickDelete = (index) => {
  todos.splice(index, 1);
  render();
};

const handleClickEdit = (index) => {
  isEditingMode= index;
  input.value = todos[index].title;
};

const render = (todolist) => {
  let template = todos.map((todo, index) => {
    return `
         <li class="List">${todo.title}
                     <i onclick="handleClickDelete(${index})" class="fa-solid fa-trash" style="color: #000000;"></i>
                     <i onclick="handleClickEdit(${index})" class="fas fa-edit" style="color: #000000;"></i>
         </li>
        `;
  });
  root.innerHTML = template.join("");
};
render();

// events
add.addEventListener("click", handleClickAdd);
