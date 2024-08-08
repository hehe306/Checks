document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('task-list');
    const newTask = document.createElement('li');

    newTask.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    taskList.appendChild(newTask);

    const completeBtn = newTask.querySelector('.complete-btn');
    const deleteBtn = newTask.querySelector('.delete-btn');

    completeBtn.addEventListener('click', function() {
        newTask.classList.toggle('completed');
    });

    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(newTask);
    });
}
