TASK MANAGER WITH NOTES MANAGEMENT

## Project Overview

This project is a Task Manager web application developed using Django REST Framework for the backend and React.js (Vite) for the frontend.

The application allows users to create, view, update, and delete tasks. It also includes a Notes Management module for creating and managing personal notes.

## Technologies Used

Frontend:

* React.js
* Vite
* JavaScript
* HTML5
* CSS3
* Axios
* React Router DOM

Backend:

* Python
* Django
* Django REST Framework

Database:

* SQLite3

## Features

Task Management:

* Create new tasks
* View all tasks
* Update task details
* Delete tasks
* Track task status (Pending, In Progress, Completed)

Notes Management:

* Create notes
* View notes
* Delete notes

API Features:

* RESTful API architecture
* JSON data exchange
* CRUD operations

## Project Structure

Frontend:
src/
├── components/
│   ├── Navbar.jsx
│   ├── TaskForm.jsx
│   ├── TaskList.jsx
│   ├── NoteForm.jsx
│   └── NoteList.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── CreateTaskPage.jsx
│   ├── TaskDetailPage.jsx
│   └── NotesPage.jsx
└── App.jsx

Backend:
project/
├── models.py
├── views.py
├── serializers.py
├── urls.py
└── migrations/

## Installation Steps

1. Clone the repository.

2. Backend Setup:

   * Create virtual environment:
     python -m venv venv

   * Activate virtual environment:
     venv\Scripts\activate

   * Install dependencies:
     pip install -r requirements.txt

   * Run migrations:
     python manage.py makemigrations
     python manage.py migrate

   * Start Django server:
     python manage.py runserver

3. Frontend Setup:

   * Navigate to frontend folder:
     cd frontend

   * Install dependencies:
     npm install

   * Start development server:
     npm run dev

## API Endpoints

Tasks:
GET    /api/tasks/
POST   /api/tasks/
GET    /api/tasks/<id>/
PUT    /api/tasks/<id>/
DELETE /api/tasks/<id>/

Notes:
GET    /api/notes/
POST   /api/notes/
GET    /api/notes/<id>/
PUT    /api/notes/<id>/
DELETE /api/notes/<id>/

## Future Enhancements

* User Authentication
* JWT Authentication
* Search and Filter Tasks
* Task Categories
* Note Editing
* Dashboard Analytics
* Dark Mode

## Developer

Name: Arbaz Shaikh

This project was developed as a learning project to demonstrate full-stack web development skills using Django REST Framework and React.js.
