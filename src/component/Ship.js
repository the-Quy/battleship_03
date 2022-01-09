import React from "react";
import { useDrag } from "react-dnd";




export default function Ship({bateauImg, preview}) {
  const [{ opacity }, dragRef] = useDrag(() => ({
    type: "ship",
    item: { sign: "aaaa", bateauImg },
    // item: { sign: <img src="..."></img>, length: 3 },
    collect: (monitor) => ({ opacity: monitor.isDragging() ? 0.7 : 1 }),
  }),[bateauImg]);

  return (
    <div ref={dragRef} style={{ opacity }}>
      <span><img src={preview}></img> </span>
      <br></br><br/>
    </div>
    
  );
}
