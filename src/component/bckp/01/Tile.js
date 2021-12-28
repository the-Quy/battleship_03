import React, { useState } from "react";
import { useDrop } from "react-dnd";
import "../stylesheet/Tile.scss";

export default function Tile({ value, click, onDrop}) {
  const [ship, getShip] = useState("");
  // let onDrop = (item) => {
    
  //   console.log("in the tile yo")
  //   getShip(item.sign);
  // };

  const [{ hover }, drop] = useDrop(
    () => ({
      accept: "ship",
      drop: (item) => onDrop(item),
      collect: (monitor) => ({ hover: !!monitor.isOver() }),
    }),
    []
  );

  return (
    <>
      <div className="tile" ref={drop} id={value} onClick={click}>{ship}{value}</div>
    </>
  );
}
