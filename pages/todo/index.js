const taskKey = '@tasks'

let selectedTaskId = null




function addTask(event) {
  event.preventDefault() 
  const taskId = new Date().getTime()
  const taskList = document.querySelector('#taskList')

  const form = document.querySelector('#taskForm')
  const formData = new FormData(form)

  const taskTitle = formData.get('title')
  const taskDescription = formData.get('description')

  const li = document.createElement('li')

  li.id = `id-${taskId}`
  li.innerHTML = `
    <div>
      <h2>${taskTitle}</h2>
      <p>${taskDescription}</p>
    </div>
    <button title="Editar tarefa" onClick="openEditDialog(${taskId})" style="margin-right: 3px;">✏️</button>
    <button title="Excluir tarefa" onClick="removeTask(${taskId})" style="margin-left: 3px;">❌</button>
  `
  taskList.appendChild(li)


  const tasks = JSON.parse(localStorage.getItem(taskKey)) || []
  tasks.push({
    id: taskId,
    title: taskTitle,
    description: taskDescription,
  })
  localStorage.setItem(taskKey, JSON.stringify(tasks))

  form.reset()
}

function editTask() {
  const form = document.querySelector('#editTaskForm')
  const formData = new FormData(form)

  const taskId = formData.get('id')
  const taskTitle = formData.get('title')
  const taskDescription = formData.get('description')

  const tasksLocal = JSON.parse(localStorage.getItem(taskKey)) || []
  tasksLocal.forEach(element => {
    if (element.id == taskId) {
      element.title = taskTitle
      element.description = taskDescription
    }
  })
  localStorage.setItem(taskKey, JSON.stringify(tasksLocal))
}

function openEditDialog(taskId) {
  const tasks = JSON.parse(localStorage.getItem(taskKey)) || []

  selectedTaskId = tasks.findIndex((task) => task.id === taskId)
  const task = tasks[selectedTaskId]

  const dialog = document.querySelector('dialog')

  const editId = document.querySelector('#editTaskForm #id')
  const editTitle = document.querySelector('#editTaskForm #title')
  const editDescription = document.querySelector('#editTaskForm #description')

  editId.value = taskId
  editTitle.value = task.title
  editDescription.value = task.description

  dialog.showModal()
}

function closeDialog() {
  const dialog = document.querySelector('dialog')
  dialog.close()
}

function removeTask(id) {
  const listaTasks = document.getElementById("taskList")
  const elementoRemovido = document.getElementById(`id-${id}`)
  listaTasks.removeChild(elementoRemovido)

  const tasksLocal = JSON.parse(localStorage.getItem(taskKey)) || []
  const indiceRemove = tasksLocal.findIndex(element => element.id === id)
  tasksLocal.splice(indiceRemove, 1)
  localStorage.setItem(taskKey, JSON.stringify(tasksLocal))
}


window.addEventListener('DOMContentLoaded', () => {
  const tasks = JSON.parse(localStorage.getItem(taskKey)) || []
  const taskList = document.querySelector('#taskList')

  taskList.innerHTML = tasks
    .map(
      (task) => `
      <li id='id-${task.id}'>
        <div>
          <h2>${task.title}</h2>
          <p>${task.description}</p>
        </div>
        <button title="Editar tarefa" onClick="openEditDialog(${task.id})" style="margin-right: 3px;">✏️</button>
        <button title="Excluir tarefa" onClick="removeTask(${task.id})" style="margin-left: 3px;">❌</button>
      </li>
    `
    )
    .join('')
})
