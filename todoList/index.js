document.addEventListener("DOMContentLoaded", function() {
    const todoForm = document.getElementById("todo-form");
  
    todoForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const title = document.getElementById("title").value;
      const description = document.getElementById("description").value;
  
      if (title.trim() !== "") {
        const todoItem = {
          title: title,
          description: description
        };
  
        let todos = JSON.parse(localStorage.getItem("todos")) || [];
        todos.push(todoItem);
        localStorage.setItem("todos", JSON.stringify(todos));
  
        renderTodoList();
        todoForm.reset();
      } else {
        alert("Por favor, insira um título para a tarefa.");
      }
    });
  
    function renderTodoList() {
      let todos = JSON.parse(localStorage.getItem("todos")) || [];
      const todoList = document.getElementById("todo-list");
      todoList.innerHTML = "";
  
      todos.forEach(function(todo, index) {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${todo.title}</strong><br>${todo.description}`;
        todoList.appendChild(li);
      });
    }
  
    renderTodoList();
  });

  function atualizarContadorVisitas() {
    let contador = JSON.parse(localStorage.getItem('contadorVisitas'));
    
    if (!contador) {
        contador = {
            count: 1,
            lastVisit: new Date().toLocaleString('pt-BR', { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' })
        };
    } else {
        contador.count++;
        contador.lastVisit = new Date().toLocaleString('pt-BR', { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' }); 
    }
    
    localStorage.setItem('contadorVisitas', JSON.stringify(contador));
    
  
    const footer = document.querySelector('footer');
    const contadorElement = document.createElement('p');
    contadorElement.textContent = `Esta página foi visitada ${contador.count} vezes. A última visita foi: ${contador.lastVisit}`;
    footer.appendChild(contadorElement);
}

atualizarContadorVisitas();
