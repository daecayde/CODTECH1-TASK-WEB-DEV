let taskList = [];

document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    let taskInput = document.getElementById('task-input');
    let task = taskInput.value.trim();

    if (task !== '') {
        taskList.push({ text: task, completed: false });
        taskInput.value = '';
        displayTasks();
    }
}

function displayTasks() {
    let taskListElement = document.getElementById('task-list');
    taskListElement.innerHTML = '';

    taskList.forEach((task, index) => {
        let taskElement = document.createElement('li');
        taskElement.textContent = task.text;

        if (task.completed) {
            taskElement.classList.add('completed');
        }

        taskElement.addEventListener('click', () => {
            task.completed = !task.completed;
            displayTasks();
        });

        taskListElement.appendChild(taskElement);

        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            taskList.splice(index, 1);
            displayTasks();
        });

        taskElement.appendChild(removeButton);
    });
}

displayTasks();