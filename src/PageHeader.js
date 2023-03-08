function Header(){

    const toggleMenu = () => {
        console.log("test");
        if(document.getElementById("tab").style.display === "none"){
            document.getElementById("tab").style.display = "block";
            
        }else{
            document.getElementById("tab").style.display = "none";
            document.getElementById("note-space").style.margin = "auto";
        }
        
    };

    return(
        <header>
      <div id="menu" onClick={()=>toggleMenu()}>{"\u2630"}</div>
      <div id="title">
        <h1>Lotion</h1>
        <p>Like Notion But Worse</p>
      </div>
    </header>
    );
}

export default Header;