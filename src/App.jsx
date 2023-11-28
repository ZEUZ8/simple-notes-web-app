import { useState, useEffect } from "react";
import "./App.css";
import Note from "./components/Note";
import axios from "axios";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    (async function () {
      const response = await axios.get("http://localhost:3000/notes");
      console.log(response,' the reponse')
      if (response?.data) {
        setNotes(response.data);
      }
    })();
  }, []);

  const deleteNote = async(id)=>{
    console.log(id)
    try{
      const response = await axios.put("http://localhost:3000/notes",{id})
      if(response?.data){
        setNotes(response.data)
      }
    }catch(err){
      console.log(err)
    }
  }
  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3000/notes", {
        data: inputValue,
      });
      if(response?.data){
        setNotes((prev) => [...prev, response.data[0]]);
      }
      setInputValue('')
    } catch (err) {
      console.log(err);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <>
      <div className="header">
        <nav>
          <h1>
            <div>Notes</div>
          </h1>
        </nav>
      </div>
      <div className="input-container">
        <input
          class="input"
          type="text"
          value={inputValue}
          placeholder="Take a Note"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
       <div style={{textAlign:"center"}}> <p>{`* seperate heding with ( , )`} </p></div>
      <main>
        {notes.map((note) => {
          const text = note?.note?.length;
          return <Note data={note} className={text>132 ? `tall` : `short`} key={note?.id} deleteNote={deleteNote} />;
        })}
      </main>
    </>
  );
}

export default App;
