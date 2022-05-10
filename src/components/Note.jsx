import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
export const Note = (props) => {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.onDelete(props.id);
          console.log(props.id);
        }}
      >
        <DeleteIcon />
      </button>
    </div>
  );
};
