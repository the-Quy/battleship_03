import React, { useState } from "react";
import { useDrop} from "react-dnd";
import "../stylesheet/Tile.scss";

export default function Tile({ position, onDrop, grille, bateauImg }) {
  const [ship, getShip] = useState({ text: "", image: "" });

  onDrop = (item) => {
    // console.log("mon item")
    // console.log(item);
    getShip({ text: item.nom, image: item.preview });
  };

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "ship",
      drop: (item) => onDrop(item, position, grille),
      collect: (monitor) => ({
        isOver:  !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [grille]
  );

  return (
    <>
      <div
        className="tile"
        id={position}
        ref={drop}
        style={{
          backgroundImage: isOver ? "url(../image/board/hover.jpg)" : bateauImg,
        }}
      >
        <img src={ship.image} alt="ship preview"></img>
        {ship.text}
      </div>
    </>
  );
}
