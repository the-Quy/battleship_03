import React from "react";
import { useDrag } from "react-dnd";




export default function Ship({bateauImg, preview, nom}) {
  const [{ opacity }, dragRef] = useDrag(() => ({
    type: "ship",
    item: { nom, bateauImg },
    collect: (monitor) => ({ opacity: monitor.isDragging() ? 0.7 : 1 }),
  }),[bateauImg]);

  return (
    <span ref={dragRef} style={{ opacity }}>
    <span>&nbsp;&nbsp;</span> <img src={preview}></img> 
   
    </span>
    
  );
}
