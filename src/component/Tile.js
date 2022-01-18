import React, { useState } from "react";
import { useDrop } from "react-dnd";
import "../stylesheet/Tile.scss";

export default function Tile({ position, onDrop, bateauImg, grille }) {
  const [ship, getShip] = useState({ text: "", image: "" });
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: "ship",
      drop: (item) => onDrop(item, position, grille),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [grille]
  );

  onDrop = (item) => {
    // console.log("mon item")
    // console.log(item);
    getShip({ text: item.nom, image: item.preview });
  };

  return (
    <>
      <div
        className="tile"
        id={position}
        ref={drop}

        style={{
          backgroundSize: "100% 100%",
          backgroundImage: isOver || ship.image != ""? "url(./image/hover.svg)" :"none"
        }}
      >
        <img src={ship.image} alt=""></img>
        {ship.text}
      </div>
    </>
  );
}
