import React from "react";

const NoteList = ({ notes, onDelete }) => {
  return (
    <div>
      <h3>My Notes</h3>

      {notes.length === 0 ? (
        <p>No Notes Found</p>
      ) : (
        notes.map((note) => (
          <div className="card p-3 mb-3" key={note.id}>
            <h5>{note.title}</h5>

            <p>{note.content}</p>

            <button
              className="btn btn-danger"
              onClick={() => onDelete(note.id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default NoteList;