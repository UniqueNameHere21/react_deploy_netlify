import { useEffect, useState, useRef} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function NotePane({activeNote, onSaveNote, onDeleteNote}){
    
    const [title, setTitle] = useState("");
    const quillRef = useRef();

    const titleChange = (e) => {
        setTitle(e.target.value);
    }

    const onSave = () => {
        onSaveNote({
            id: activeNote.id,
            title: document.getElementsByClassName("note-title")[0].value,
            body: quillRef.current.getEditor().getText(),
            lastModified: new Date().toLocaleString()
        });
        console.log(activeNote);
    };

    const onDelete = () => {
        onDeleteNote(activeNote.id);
        
    };
        
    useEffect(() => {
        if(activeNote){
            
            document.getElementsByClassName("note-title")[0].value = activeNote.title;
            quillRef.current.getEditor().setText(activeNote.body);
        }
      }, [activeNote]);
    
    
    if (!activeNote) { 
        return(
            <div id="note-space">
                <div id="empty-pane">
                    <p>Select a note, or create a new one.</p>
                </div>
            </div>
        );
    }    


    return(
        <div id="note-space">
            <div id="active-pane">
                <div id="note-header-bar">
                    <div id="note-header-pane-container">
                        <input type="text" className="note-title" autoFocus onChange={titleChange} value={title}></input>
                        <div id="note-date">
                            <p id="date-time">{activeNote.lastModified}</p>
                            <i className="fa-regular fa-calendar"></i>
                        </div>
                    </div>
                    <p className="clickable" onClick={() => onSave()}>Save</p>
                    <p className="clickable" onClick={() => onDelete()}>Delete</p>
                </div>
                <div id="body-text"><ReactQuill id="text-box" ref={quillRef}/></div>
            </div>
        </div>
    );
}

export default NotePane;