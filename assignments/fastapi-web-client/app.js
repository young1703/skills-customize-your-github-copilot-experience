const API_URL = "http://127.0.0.1:8000/tasks";

const taskForm = document.querySelector("#task-form");
const taskTitleInput = document.querySelector("#task-title");
const taskList = document.querySelector("#task-list");
const statusMessage = document.querySelector("#status-message");

function setMessage(message, isError = false) {
  statusMessage.textContent = message;
  statusMessage.classList.toggle("error", isError);
}

function renderTasks(tasks) {
  taskList.replaceChildren();

  if (tasks.length === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "empty-state";
    emptyItem.textContent = "No tasks yet. Add one above.";
    taskList.append(emptyItem);
    return;
  }

  for (const task of tasks) {
    const item = document.createElement("li");
    item.className = "task-item";

    const title = document.createElement("span");
    title.className = task.completed ? "task-title completed" : "task-title";
    title.textContent = task.title;

    const actions = document.createElement("div");
    actions.className = "task-actions";

    const toggleButton = document.createElement("button");
    toggleButton.type = "button";
    toggleButton.textContent = task.completed ? "Mark incomplete" : "Mark complete";
    toggleButton.addEventListener("click", () => updateTask(task));

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteTask(task.id));

    actions.append(toggleButton, deleteButton);
    item.append(title, actions);
    taskList.append(item);
  }
}

async function loadTasks() {
  setMessage("Loading tasks...");

  try {
    // TODO: Fetch API_URL, check the response, parse its JSON, and render the tasks.
  } catch (error) {
    setMessage(`Could not load tasks: ${error.message}`, true);
  }
}

async function createTask(title) {
  // TODO: POST a JSON task, check the response, then reload the list.
}

async function updateTask(task) {
  // TODO: PUT the task title and opposite completed value, then reload the list.
}

async function deleteTask(taskId) {
  // TODO: DELETE the task by ID, then reload the list.
}

taskForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const title = taskTitleInput.value.trim();

  if (!title) {
    return;
  }

  await createTask(title);
});

loadTasks();