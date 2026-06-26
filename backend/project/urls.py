from django.urls import path
from .views import (
    TaskListCreateView,
    TaskDetailView,
    NoteListCreateView,
    NoteDetailView,
)

urlpatterns = [
    path('tasks/', TaskListCreateView.as_view()),
    path('tasks/<int:pk>/', TaskDetailView.as_view()),

    path('notes/', NoteListCreateView.as_view()),
    path('notes/<int:pk>/', NoteDetailView.as_view()),
]
