import React from "react";
import { useDrag } from "react-dnd";

export default function Ship({ preview, bateauImg }) {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: "ship",
      item: { preview, bateauImg },
      collect: (monitor) => ({ opacity: monitor.isDragging() ? 0.7 : 1 }),
    }),
    [preview]
  );

  return (
    <span ref={dragRef} style={{ opacity, backgroundImage:bateauImg }} >
      <span>&nbsp;&nbsp;</span> <img src={preview} alt="ship preview"></img>
    </span>
  );
}
