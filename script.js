// Get elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearTasksBtn = document.getElementById('clearTasksBtn');

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'deleteBtn';
        deleteBtn.onclick = function () {
            taskList.removeChild(li);
        };

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
}

// Function to clear all tasks
function clearTasks() {
    taskList.innerHTML = '';
}

// Event listeners
addTaskBtn.addEventListener('click', addTask);
clearTasksBtn.addEventListener('click', clearTasks);

// Optional: Allow pressing "Enter" to add a task
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
