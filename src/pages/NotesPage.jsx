import React, { useEffect, useState } from "react";
import axios from "axios";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";

const API_URL = "http://127.0.0.1:8000/api/notes/";

const NotesPage = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const response = await axios.get(API_URL);
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  useEffect(() => {
  const loadNotes = async () => {
    await fetchNotes();
  };

  loadNotes();
    }, []);
  const addNote = async (noteData) => {
    try {
      const response = await axios.post(API_URL, noteData);

      setNotes([...notes, response.data]);
    } catch (error) {
      console.error("Error creating note:", error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`${API_URL}${id}/`);

      setNotes(notes.filter((note) => note.id !== id));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Notes Management</h2>

      <NoteForm onAddNote={addNote} />

      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
};

export default NotesPage;