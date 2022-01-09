import React, { useState } from "react";
import { useDrop } from "react-dnd";
import "../stylesheet/Tile.scss";

export default function Tile() {
  const [ship, getShip] = useState({ text: "", image: "" });
  // const [length, getShipLength] = useState("");

  let onDrop = (item) => {
    console.log(item);

    getShip({ text: item.sign, image: item.bateauImg });
    // getShip((item.sign, item.bateauImg));
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
      <div className="tile" ref={drop}>
      <img src={ship.image}></img>
      </div>
    </>
  );
}
