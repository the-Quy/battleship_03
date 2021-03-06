import React from "react";
import { useDrag } from "react-dnd";




export default function Ship({ preview, nom}) {
  const [{ opacity }, dragRef] = useDrag(() => ({
    type: "ship",
    item: { preview },
    collect: (monitor) => ({ opacity: monitor.isDragging() ? 0.7 : 1 }),
  }),[preview]);

  return (
    <span ref={dragRef} style={{ opacity }}>
    <span>&nbsp;&nbsp;</span> <img src={preview} alt="ship preview"></img> 
   
    </span>
    
  );
}
