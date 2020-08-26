const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function addTodo() {
  
  let item = document.createElement('li');
  let item2 = document.createElement("input");
  uncheckedCountSpan.innerText++;
  itemCountSpan.innerText++;
  //let contador = itemCountSpan;
  item.innerText = "Tarea N:" + itemCountSpan.innerText;
  item.className = classNames.TODO_TEXT;
  item2.type = "checkbox";
  item2.className = classNames.TODO_CHECKBOX;
  item2.onclick = function () {
    if (item2.checked){      
      uncheckedCountSpan.innerText--;
    } else if (!item2.checked) {      
      uncheckedCountSpan.innerText++;
    }
  };
  list.append(item);
  item.append(item2);
  
}