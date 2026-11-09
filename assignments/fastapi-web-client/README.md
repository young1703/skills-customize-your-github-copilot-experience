# 📘 Assignment: Build a Web Client for FastAPI

## 🎯 Objective

Build a browser-based task manager that uses JavaScript `fetch` to communicate with the FastAPI REST API. Connect the frontend and backend, then display and manage JSON data from the page.

## 📝 Tasks

### 🛠️ Connect the Frontend to the API

#### Description
Configure the FastAPI application from the REST API assignment to allow requests from this local frontend. Run the API and the frontend on separate local servers.

Add this middleware to the FastAPI application after creating `app`:

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5500"],
    allow_methods=["*"],
    allow_headers=["*"],
)
```

Run the API in one terminal:

```bash
cd assignments/fastapi-rest-api
uvicorn starter-code:app --reload
```

Run the frontend in a second terminal:

```bash
cd assignments/fastapi-web-client
python -m http.server 5500
```

Open `http://127.0.0.1:5500` in your browser.

#### Requirements
Completed program should:

- Allow requests from the exact frontend origin `http://127.0.0.1:5500`
- Run the API and frontend on their separate local servers
- Load the frontend without a browser CORS error


### 🛠️ Display Tasks from the API

#### Description
Complete `loadTasks()` in `app.js` so the page requests the task collection and displays each task.

#### Requirements
Completed program should:

- Send a `GET` request to `http://127.0.0.1:8000/tasks` using `fetch`
- Check the response and parse the returned JSON
- Display each task title and whether it is complete
- Show a useful message when the list is empty or the request fails


### 🛠️ Create and Delete Tasks

#### Description
Connect the task form and delete buttons to the API so users can manage tasks without reloading the page.

#### Requirements
Completed program should:

- Send a `POST` request with a JSON body containing the new task title and `completed: false`
- Send a `DELETE` request to the selected task's endpoint
- Refresh the displayed task list after a successful create or delete
- Show an error message if either request fails


### 🛠️ Update Tasks and Verify the Workflow

#### Description
Connect each completion button to the API and test the full workflow from the browser.

#### Requirements
Completed program should:

- Send a `PUT` request with the task title and updated `completed` value
- Refresh the displayed task list after a successful update
- Display a clear error message for unsuccessful API responses
- Create, complete, delete, and reload tasks successfully from the browser