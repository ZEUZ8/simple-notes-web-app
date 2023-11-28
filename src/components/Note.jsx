import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";

const Note = ({ data,className,deleteNote}) => {

  const handleClick = ()=>{
    deleteNote(data.id)
  }

  return (
    <>
      <div class={className} key={data?.id}>
        <div className="chumma">
          <h3>{data?.title}</h3>
          <MdDelete onClick={handleClick}/>
        </div>
        <p>{data?.note}</p>
        <small style={{color:"#3333"}}>{data?.date}</small>
      </div>
    </>
  );
};

export default Note;
