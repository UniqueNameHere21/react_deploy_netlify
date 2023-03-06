function MenuTab(){
    return(
        <div id="tab">
            <div id="tab-head">
                <p id="tab-title">Notes</p>
                <p id="add-btn">+</p>
            </div>
            <div id="tab-notes">
                <div class="tab-note">
                    <h6>TITLE</h6>
                    <p class="date">DATE -- DD/MM/YYYY</p>
                    <p class="preview">NOTE PREVIEW</p>
                </div> 
            </div>
        </div>
    );
}

export default MenuTab;