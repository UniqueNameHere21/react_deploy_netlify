function MenuTab({notes, onAddNote, activeNote, setActiveNote}){
    
    const sortedNotes = notes.sort((a,b) => b.lastModified - a.lastModified);
    
    
    return(
        <div id="tab">
            <div id="tab-head">
                <p id="tab-title">Notes</p>
                <p id="add-btn" onClick={onAddNote}>+</p>
            </div>
            <div id="tab-notes">
                {sortedNotes.map((note) => (
                    <div className={`tab-note ${note.id === activeNote && "active"}`}              
                    onClick={() => setActiveNote(note.id)}>
                        <h6>{note.title}</h6>
                        <p class="date">{note.lastModified}</p>
                        <p class="preview">{note.body && note.body.substr(0,100) + "..."}</p>
                    </div> 
                ))}
                
            </div>
        </div>
    );
}

export default MenuTab;