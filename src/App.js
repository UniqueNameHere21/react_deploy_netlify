import MenuTab from "./Tab.js";
import NotePane from "./Note.js";
import Header from "./PageHeader";

function App() {
  return (
    <div id="page">
      <Header/>
      <section>
        <MenuTab />
        <NotePane />
      </section>
    </div>
  );
}

export default App;
