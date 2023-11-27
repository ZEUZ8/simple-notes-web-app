import { useState } from "react";
import "./App.css";
import Note from "./components/Note";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="header">
        <nav>
          <h1>
            <div>Notes</div>
          </h1>
        </nav>
      </div>
      <div className='input-container'>
      <input class='input' type="text" placeholder='Take a Note'/>
    </div>
      <main>
        <Note />
      </main>
    </>
  );
}

export default App;
