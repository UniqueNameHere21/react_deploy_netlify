import MenuTab from "./Tab.js";
import NotePane from "./Note.js";
import Header from "./PageHeader";
import { useEffect, useState } from "react";
import uuid from "react-uuid";

function App() {
  
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() =>{
    if(localStorage.getItem('notes')){
      setNotes(JSON.parse(localStorage.getItem('notes')));
      console.log("LOADED");
    }
  }, []);


  const onAddNote = () => {

    const newNote = {
      id: uuid(),
      title: "Untitled",
      body: "",
      lastModified: new Date().toLocaleString()
    }

    setNotes([newNote, ...notes]);
    localStorage.setItem('notes', JSON.stringify([newNote, ...notes]));
  };


  const onSaveNote = (savedNote) => {
    const updatedNotesArray = notes.map((note) =>{
      if(note.id === activeNote){
        return savedNote;
      }
      return note;
    });
    setNotes(updatedNotesArray);
    console.log(notes);
    localStorage.setItem('notes', JSON.stringify(notes));
  };

  const onDeleteNote = (id) => {
    var x = window.confirm("Are you sure you want to delete.\nThis action cannot be undone");

    if(x){
      setNotes(notes.filter((note) => note.id !== id));
      localStorage.setItem('notes', JSON.stringify((notes.filter((note) => note.id !== id))));
    }
  };

  const getActiveNote = () => {
      return notes.find((note) => note.id === activeNote);
      
  };

  return (
    <div id="page">
      <Header/>
      <section>
        <MenuTab notes={notes} onAddNote={onAddNote} activeNote={activeNote} setActiveNote={setActiveNote}/>
        <NotePane activeNote={getActiveNote()} onSaveNote={onSaveNote} onDeleteNote={onDeleteNote}/>
      </section>
    </div>
  );
}

export default App;
