import React, { useState } from "react";

const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("Please fill all fields");
      return;
    }

    onAddNote({
      title,
      content,
    });

    setTitle("");
    setContent("");
  };

  return (
    <div className="card p-3 mb-4">
      <h3>Add Note</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Note Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            rows="4"
            placeholder="Write your note..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Add Note
        </button>
      </form>
    </div>
  );
};

export default NoteForm;