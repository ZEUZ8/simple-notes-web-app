import React, { useState,useEffect } from "react";
import { MdDelete } from "react-icons/md";
const Note = () => {
  const [notes,setNotes] = useState([])
  const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam odittotam iusto, similique cum aliquam saepe amet ab! Animi, vitae."
  console.log(text.length, '  thie i she lenth')
  useEffect(()=>{
    const response = ()=>{
      console.log(console.log(' the fetching function goes here'))
    } 
  },[])
  return (
    <>
      <div class="short">
      <div className="chumma">
       <h3>A note about style</h3>
        <a href=""><MdDelete/></a>
       </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam odit
          totam iusto, similique cum aliquam saepe amet ab! Animi, vitae.
        </p>
      </div>
      <div class="tall">
       <div className="chumma">
       <h3>A note about style</h3>
        <a href=""><MdDelete/></a>
       </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam odit
          totam iusto, similique cum aliquam saepe amet ab! Animi, vitae. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, alias!
          Voluptatem maxime obcaecati optio, perspiciatis omnis ipsa, molestias
          a deleniti eius animi dolore id, ab cumque ex. Iusto, placeat
          corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quam ab ut voluptatum porro aut deserunt. Beatae repellat, ipsam non
          eos, magni qui aspernatur ullam explicabo ad odio inasdflajsdflkjalskdjflkasjdfasjdflkjasdlkfjalksdjfklj Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum odio, autem sapiente neque consequatur adipisci facere ex accusamus? Culpa praesentium corporis veritatis, et illo natus minima ad quia exercitationem iste? ventore, amet
          maiores.
        </p>
      </div>
      <div class="short">
        <h3>A note about style</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam odit
          totam iusto, similique cum aliquam saepe amet ab! Animi, vitae. lore
        </p>
        <a href="">Delete</a>
      </div>
      <div class="short">
        <h3>A note about style</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam odit
          totam iusto, similique cum aliquam saepe amet ab! Animi, vitae.
        </p>
        <a href="">Delete</a>
      </div>
    </>
  );
};

export default Note;
