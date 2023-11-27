import { useState } from "react";
import "./App.css";
import Note from "./components/Note";
import Input from "./components/Input";

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
      <Input />
      <main>
        {/* <Note /> */}
        <div class="short">
          <h3>A note about style</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            odit totam iusto, similique cum aliquam saepe amet ab! Animi, vitae.
          </p>
          <a href="">Read More</a>
        </div>
        <div class="tall">
          <img src="./img/1.jpeg" alt="image" />
        </div>
        <div class="short">
          <h3>A note about style</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            odit totam iusto, similique cum aliquam saepe amet ab! Animi, vitae.
          </p>
          <a href="">Read More</a>
        </div>
        <div class="short">
          <h3>A note about style</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            odit totam iusto, similique cum aliquam saepe amet ab! Animi, vitae.
          </p>
          <a href="">Read More</a>
        </div>
      </main>
    </>
  );
}

export default App;
