from fastapi import FastAPI, HTTPException, Response, status
from pydantic import BaseModel

app = FastAPI(title="Study Tasks API")


class TaskInput(BaseModel):
    title: str
    completed: bool = False


tasks = [
    {"id": 1, "title": "Read the API documentation", "completed": False},
    {"id": 2, "title": "Practice a GET request", "completed": True},
]


# TODO: Add GET /tasks to return the complete task list.

# TODO: Add GET /tasks/{task_id} to return one task or raise HTTPException(404).

# TODO: Add POST /tasks to create a task from TaskInput and return it.

# TODO: Add PUT /tasks/{task_id} to update a task or raise HTTPException(404).

# TODO: Add DELETE /tasks/{task_id} to remove a task or raise HTTPException(404).