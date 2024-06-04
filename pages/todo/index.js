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
    <button title="Editar tarefa" onClick="openEditDialog(${taskId})" style="margin-right: 5px;">✏️</button>
    <button title="Excluir tarefa" onClick="excluirTarefa(${taskId})" style="margin-left: 5px;">❌</button>
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


function editarTarefa(taskId) {
  const li = document.querySelector(`#id-${taskId}`);
  const taskTitleElement = li.querySelector('h2');
  const taskDescriptionElement = li.querySelector('p');

  const editTitle = document.querySelector('#editTaskForm #title').value;
  const editDescription = document.querySelector('#editTaskForm #description').value;

  taskTitleElement.textContent = editTitle;
  taskDescriptionElement.textContent = editDescription;


  const tasks = JSON.parse(localStorage.getItem(taskKey)) || [];
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    tasks[taskIndex].title = editTitle;
    tasks[taskIndex].description = editDescription;
    localStorage.setItem(taskKey, JSON.stringify(tasks)); // Atualizar os dados no localStorage
  }

  closeDialog();
} 

// Função para excluir uma tarefa
function excluirTarefa(taskId) {
  const li = document.querySelector(`#id-${taskId}`)
  li.remove()

  // Remover tarefa do localStorage
  const tasks = JSON.parse(localStorage.getItem(taskKey)) || []
  const updatedTasks = tasks.filter(task => task.id !== taskId)
  localStorage.setItem(taskKey, JSON.stringify(updatedTasks))
}

function openEditDialog(taskId) {
  const tasks = JSON.parse(localStorage.getItem(taskKey)) || []

  selectedTaskId = tasks.findIndex((task) => task.id === taskId)
  const task = tasks[selectedTaskId]

  const dialog = document.querySelector('dialog')

  const editTitle = document.querySelector('#editTaskForm #title')
  const editDescription = document.querySelector('#editTaskForm #description')

  editTitle.value = task.title
  editDescription.value = task.description

  dialog.showModal()
}

function closeDialog() {
  const dialog = document.querySelector('dialog')
  dialog.close()
}

// Função para renderizar as tarefas na página
function renderizarTarefas(tasks) {
  const taskList = document.querySelector('#taskList')

  taskList.innerHTML = tasks
    .map(
      (task) => `
      <li id='id-${task.id}'>
        <div>
          <h2>${task.title}</h2>
          <p>${task.description}</p>
        </div>
        <button title="Editar tarefa" onClick="openEditDialog(${task.id})" style="margin-right: 5px;">✏️</button>
        <button title="Excluir tarefa" onClick="excluirTarefa(${task.id})" style="margin-left: 5px;">❌</button>
      </li>
    `
    )
    .join('')
}

// Carregar tarefas do localStorage ao recarregar a página
window.addEventListener('DOMContentLoaded', () => {
  const tasks = JSON.parse(localStorage.getItem(taskKey)) || []
  renderizarTarefas(tasks)
})





