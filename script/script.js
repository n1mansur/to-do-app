const form = document.querySelector('.form')
const list = document.querySelector('.list')
const listValue = document.querySelector('#listValue')
const footer__btn = document.querySelector('.footer__btn') //** Clear all btn */

let todos = [
  { id: 1, todo: 'Reading books' },
  { id: 2, todo: 'Play footbal' },
  { id: 3, todo: 'Watch TV' },
  { id: 4, todo: 'Coding' },
]
render()

function render() {
  list.innerHTML = ''
  todos.forEach((v) => {
    list.innerHTML += `
              <li class="item" id='${v.id}'>
                <span>${v.todo}</span>
                <div class="item__btns">
                  <button id="${v.id}" onclick='{editBtn(id)}' class="item__btn edit__btn">
                    <i class="bx bx-sm bxs-pencil"></i>
                  </button>
                  <button id="${v.id}" onclick='{deleteBtn(id)}' class="item__btn delete__btn">
                    <i class="bx bx-md bx-x"></i>
                  </button>
                </div>
              </li>`
  })
}
const clearAll = () => {
  todos = []
  render()
}
const deleteBtn = (id) => {
  todos = todos.filter((v) => v.id != id)
  render()
}
const editBtn = (id) => {
  const editValue = prompt()
  todos.filter((v) => {
    if (editValue) {
      if (v.id == id) {
        v.todo = editValue
      }
    }
  })
  render()
}
const addBtn = () => {
  const inputValue = document.querySelector('#listValue').value
  if (inputValue) {
    const newTodo = { id: new Date().getTime(), todo: inputValue }
    todos.unshift(newTodo)
    form.reset()
    listValue.classList.remove('required')
  } else {
    listValue.classList.add('required')
  }
  render()
}

//form.addEventListener('submit', (e) => {
//e.preventDefault()
//  const inputValue = e.target.elements.todo.value
//if (inputValue) {
//  const newTodo = { id: new Date().getTime(), todo: inputValue }
//  todos.unshift(newTodo)
//  form.reset()
//  listValue.classList.remove('required')
//} else {
//  listValue.classList.add('required')
//}
//render()
//})
//footer__btn.addEventListener('click', () => {
//  //** Clear all */
//  //todos.splice(0)
//  todos = []
//  render()
//})
//const items = document.querySelector('.list')
//items.addEventListener('click', (e) => {
//  if (e.target.closest('.delete__btn')) {
//    const currentId = e.target.closest('.item').id
//    todos = todos.filter((v) => v.id != currentId)
//    render()
//  }
//  if (e.target.closest('.edit__btn')) {
//  }
//})

//*************************************************************  не очень правильный способ */
//const deleteBtn = document.querySelectorAll('.delete__btn')
//for (let i = 0; i < deleteBtn.length; i++) {
//  deleteBtn[i].addEventListener('click', () => {
//    todos.splice(i, 1)
//    render()
//  })
//}

//const edit = document.querySelectorAll('.edit__btn')
//for (let i = 0; i < edit.length; i++) {
//  edit[i].addEventListener('click', () => {
//    const editValue = prompt()
//    console.log(editValue)
//    todos[i].todo = editValue
//    const inp = document.createElement('input')
//    inp.className = 'editValue'
//    const item = document.querySelectorAll('.item')
//    item[i].append(inp)
//    render()
//  })
//}
