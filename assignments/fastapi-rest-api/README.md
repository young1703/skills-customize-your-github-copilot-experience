# 📘 Assignment: Building REST APIs with FastAPI

## 🎯 Objective

Build a REST API for managing study tasks with FastAPI. Practice defining routes, validating JSON with Pydantic models, and using HTTP methods for CRUD operations.

## 📝 Tasks

### 🛠️ Create the API and List Tasks

#### Description
Install FastAPI and Uvicorn, then complete the starter code to create the API and return all study tasks from `GET /tasks`.

Run the API with:

```bash
python -m pip install fastapi uvicorn
uvicorn starter-code:app --reload
```

#### Requirements
Completed program should:

- Create a FastAPI application using the provided `app` variable
- Return the task list as JSON from `GET /tasks`
- Start successfully and show the interactive API documentation at `/docs`


### 🛠️ Retrieve and Create Tasks

#### Description
Add endpoints to retrieve one task by its ID and create a task from a JSON request body.

#### Requirements
Completed program should:

- Return the matching task from `GET /tasks/{task_id}`
- Return an HTTP 404 response when the requested task ID does not exist
- Create a task with a unique ID from `POST /tasks` using the provided `TaskInput` model
- Return the newly created task as JSON


### 🛠️ Update and Delete Tasks

#### Description
Add endpoints that update an existing task and remove a task by ID.

#### Requirements
Completed program should:

- Update a task with `PUT /tasks/{task_id}` using a JSON request body
- Return an HTTP 404 response when trying to update a task that does not exist
- Delete a task with `DELETE /tasks/{task_id}`
- Return an HTTP 404 response when trying to delete a task that does not exist


### 🛠️ Test the API

#### Description
Use the interactive documentation at `/docs` to test the API endpoints and check both successful requests and missing-task errors.

#### Requirements
Completed program should:

- Create a task and confirm it appears in `GET /tasks`
- Update the task and confirm the changed values are returned
- Delete the task and confirm it no longer appears in the task list
- Confirm that requesting a missing task returns HTTP 404