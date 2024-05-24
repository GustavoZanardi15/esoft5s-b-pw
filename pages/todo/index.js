const taskKey = '@tasks';

const lsVisistorsKey = '@visitorsCounter'

const defaultLsVisitors = {
  count: 0,
  lastVisit: getCurrentDateAndTime(),
}

function getCurrentDateAndTime() {
  const locale = 'pt-BR'
  const date = new Date()

  options = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }

  const time = new Intl.DateTimeFormat(locale, options).format(date)
  return time
}

function countVisitors() {
  const lsVisitors =
    localStorage.getItem(lsVisistorsKey) || JSON.stringify(defaultLsVisitors)
  const lsVisitorsObj = JSON.parse(lsVisitors)

  lsVisitorsObj.count++
  lsVisitorsObj.lastVisit = getCurrentDateAndTime()

  localStorage.setItem(lsVisistorsKey, JSON.stringify(lsVisitorsObj))

  const p = document.createElement('p')
  p.id = 'visitors-counter'
  p.textContent = `Esta página foi visitada ${lsVisitorsObj.count} vezes. A última visita foi: ${lsVisitorsObj.lastVisit}`

  const footer = document.querySelector('footer')

  footer.appendChild(p)
}

document.addEventListener('DOMContentLoaded', function () {
  countVisitors()
})


// Função para adicionar tarefa
function addTask(event) {
  event.preventDefault(); // Evita o recarregamento da página
  const taskId = new Date().getTime();
  const taskList = document.querySelector('#taskList');

  const form = document.querySelector('#taskForm');
  const formData = new FormData(form);

  const taskTitle = formData.get('title');
  const taskDescription = formData.get('description');

  const li = document.createElement('li');
  li.id = taskId;
  li.innerHTML = `
    <button class="edit-button" title="Editar tarefa" onclick="openEditDialog(${taskId})">✏️</button>
    <h2>${taskTitle}</h2>
    <p>${taskDescription}</p>
  `;

  taskList.appendChild(li);

  // Salvar tarefas no localStorage
  const tasks = JSON.parse(localStorage.getItem(taskKey)) || [];
  tasks.push({ id: taskId, title: taskTitle, description: taskDescription });
  localStorage.setItem(taskKey, JSON.stringify(tasks));

  form.reset();
}

// Carregar tarefas do localStorage ao recarregar a página
window.addEventListener('DOMContentLoaded', () => {
  const tasks = JSON.parse(localStorage.getItem(taskKey)) || [];
  const taskList = document.querySelector('#taskList');
  taskList.innerHTML = tasks
    .map(
      (task) => `
        <li id="${task.id}">
          <button class="edit-button" title="Editar tarefa" onclick="openEditDialog(${task.id})">✏️</button>
          <h2>${task.title}</h2>
          <p>${task.description}</p>
        </li>
      `
    )
    .join('');
});

// Função para abrir o diálogo de edição
function openEditDialog(taskId) {
  const dialog = document.getElementById('editDialog');
  const tasks = JSON.parse(localStorage.getItem(taskKey)) || [];
  const task = tasks.find(task => task.id === taskId);

  if (task) {
    document.getElementById('editTitle').value = task.title;
    document.getElementById('editDescription').value = task.description;
    dialog.style.display = 'block';
  }
}

// Função para fechar o diálogo de edição
function closeEditDialog() {
  const dialog = document.getElementById('editDialog');
  dialog.style.display = 'none';
}

// Adiciona o evento de clique ao botão de cancelar para fechar o diálogo
document.getElementById('cancelButton').addEventListener('click', closeEditDialog);

// Opcional: Prevenir fechamento do diálogo ao clicar dentro dele
document.getElementById('editDialog').addEventListener('click', (event) => {
  if (event.target === event.currentTarget) {
    closeEditDialog();
  }
});
