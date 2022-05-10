import { Note } from "./components/Note";
import { useState } from "react";
import "./App.css";
import { CreateArea } from "./components/CreateArea";
import { Header } from "./components/Header";
import uniqid from "uniqid";
import Footer from "./components/Footer";

function App() {
  const [notes, setNotes] = useState([]);
  const addNotes = (note) => {
    if (note.title.length > 0 && note.content.length > 0)
      setNotes((prev) => {
        return [...prev, note];
      });
    console.log(notes);
  };
  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, i) => {
        return i !== id;
      });
    });
  };
  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNotes} />
      {notes.map((noteItem, i) => {
        return (
          <Note
            content={noteItem.content}
            title={noteItem.title}
            id={i}
            key={uniqid()}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
