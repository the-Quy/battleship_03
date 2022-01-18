import React, { useState } from "react";
import { useDrop } from "react-dnd";
import "../stylesheet/Tile.scss";

export default function Tile(id) {
  const [ship, getShip] = useState({ text: "", image: "" });


  let onDrop = (item) => {
    
    console.log("mon item")
    console.log(item);

    getShip({ text: item.nom, image: item.bateauImg });

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
      <div className="tile" id={id} ref={drop}>
      <img src={ship.image}></img>{ship.text}
      </div>
    </>
  );
}
