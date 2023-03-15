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
                <label for="todoItem" > 
                <input
                  class="item-inp"
                  type="checkbox"
                  name="todoItem"
                />
                <span class="label">
                ${v.todo}</span>
                </label>
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
  let editValue = ''
  const newBtn = document.createElement('button')
  const typeInp = document.querySelector('.item-inp')
  const item__btns = document.querySelector('.item__btns')
  newBtn.className = 'done__btn'
  newBtn.innerHTML = `<i class="bx bx-md bx-check"></i>`
  item__btns.prepend(newBtn)
  const label = document.querySelector('.label')
  label.textContent = ''
  typeInp.type = 'text'
  if ((typeInp.type = 'text')) {
    typeInp.classList.add('itemInp')
    const doneBtn = document.querySelector('.done__btn')
    doneBtn.addEventListener('click', () => {
      editValue = typeInp.value
      typeInp.type = 'checkbox'
      typeInp.classList.remove('itemInp')
      todos.filter((v) => {
        if (editValue) {
          if (v.id == id) {
            v.todo = editValue
          }
        }
      })
      render()
    })
  }
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
