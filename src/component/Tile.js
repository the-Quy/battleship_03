import React, { useState } from "react";
import { useDrop } from "react-dnd";
import "../stylesheet/Tile.scss";

export default function Tile() {
  const [ship, getShip] = useState("");

  let onDrop = (item) => {
    getShip(item.sign);
  };

  const [{ hover }, drop] = useDrop(
    () => ({
      accept: "ship",
      drop: (item) => onDrop(item),
      collect: (monitor) => ({
        hover: !!monitor.isOver(),
      }),
    }),
    []
  );

  return (
    <>
      <div className="tile" ref={drop} >
        <span>{ship}</span>
      </div>
    </>
  );
}
