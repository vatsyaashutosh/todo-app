import { Fab } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

export const CreateArea = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setNote((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const submitNote = (e) => {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    e.preventDefault();
  };
  return (
    <div>
      <form className="create-note">
        <input
          onChange={handleChange}
          type="text"
          name="title"
          value={note.title}
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          name="content"
          value={note.content}
          placeholder="Take a note"
          rows="3"
        />
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
};
