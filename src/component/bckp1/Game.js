import React, { useState } from "react";
import "../stylesheet/Game.scss";

import Tile from "./Tile";

let size = 10;

export default function Game() {
  const [etatGrille, fonctionChangementState] = useState(
    Array(size * size).fill(null)
  ); //-----> dragdrop
  const DropItem = (position, item, valeursGrille) => {
   
    console.log("premiere ligne");
    let stateTemp = valeursGrille.slice(0);
    stateTemp[position] = item.sign;
    console.log("YO!");
    fonctionChangementState(stateTemp);
  }; //-----> dragdrop

  function fabriqueTile() {
    return <Tile />;
  }

  let arraySquare = [];
  for (let y = 0; y < size; y++) {
    let ligneSquare = [];
    for (let x = 0; x < size; x++) {
      let id = x + y * size;
      ligneSquare.push(
        <div className="tileBg">
          {fabriqueTile([id], (id, item, valeursGrille) =>
            DropItem(id, item, valeursGrille)
          )}
        </div>
      );
    }
    const row = <div>{ligneSquare}</div>;
    arraySquare.push(row);
    
  }
  console.log(arraySquare)
  return (
    <>
      <div className="board">{arraySquare}</div>
    </>
  );
}
