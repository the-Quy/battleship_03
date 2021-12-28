import React from "react";
import { useDrag} from "react-dnd";

export default function Ship({}) {
  const [{ opacity }, dragRef] = useDrag(() => ({
    type: "ship",
    item: { sign: "Quy" },
    collect: (monitor) => ({ opacity: monitor.isDragging() ? 0.7 : 1 }),
  }));

  return (
    <div ref={dragRef} style={{ opacity }}>
      <span>le_Test</span>
    </div>
  );
}