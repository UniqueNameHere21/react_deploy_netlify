function NotePane(){
    return(
        <div id="note-space">
            <div id="empty-pane">
                <p>Select a note, or create a new one.</p>
            </div>
            <div id="active-pane">
                <div id="note-header-bar">
                    <div id="note-header-pane-container">
                        <input type="text" class="note-title" autoFocus></input>
                        <div id="note-date">
                            <p id="date-time">YYYY-MM-DD, HH:MM:SS PM</p>
                            <i class="fa-regular fa-calendar"></i>
                        </div>
                    </div>
                    <p class="clickable">Save</p>
                    <p class="clickable">Delete</p>
                </div>
                <div id="tool-bar">
                    <select>
                        <option>Normal</option>
                        <option>font 1</option>
                        <option>font 2</option>
                    </select>
                    <i class="fa-sharp fa-solid fa-bold"></i>
                    <i class="fa-sharp fa-solid fa-italic"></i>
                    <i class="fa-sharp fa-solid fa-underline"></i>
                    <i class="fa-sharp fa-solid fa-link"></i>
                    <i class="fa-sharp fa-solid fa-list"></i>
                    <i class="fa-sharp fa-solid fa-list-ol"></i>
                    <i class="fa-sharp fa-solid fa-text-slash"></i>
                </div>
                <textarea></textarea>
            </div>
            
        </div>
    );
}

export default NotePane;