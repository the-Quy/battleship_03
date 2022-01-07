import React, { useState } from "react";
import { useDrop } from "react-dnd";
import "../stylesheet/Tile.scss";

export default function Tile({bateauImg}) {
  const [ship, getShip] = useState("");
  // const [length, getShipLength] = useState("");

  let onDrop = (item) => {
    console.log("hello!")
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
      <div className="tile" style={{backgroundImage: hover ? "url(../image/board/test5.svg)" : bateauImg}} ref={drop} >
        <span>{ship}</span>
      </div>
    </>
  );
}
