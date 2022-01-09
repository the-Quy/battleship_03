import React from "react";
import { useDrag } from "react-dnd";

export default function Ship({bateauImg}) {
  const [{ opacity }, dragRef] = useDrag(() => ({
    type: "ship",
    item: {bateauImg },
    // item: { sign: <img src="..."></img>, length: 3 },
    collect: (monitor) => ({ opacity: monitor.isDragging() ? 0.7 : 1 }),
  }));

  return (
  <>
<div>test</div>
    {/* <div ref={dragRef} style={{ opacity, color=rgb(255,0,0)}}>
      <span>le_Test</span>
    </div> */}
    </>
  );
}
