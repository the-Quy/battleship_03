import React, { useState } from "react";
import "../stylesheet/Game.scss";



import Tile from "./Tile";

let size = 10;

export default function Game() {
  const [etatGrille, fonctionChangementState] = useState(
    Array(size * size).fill(null)
  ); 
  const DropItem = (position, item, grille) => {
   


    let stateTemp = grille.slice(0);
    stateTemp[position] = item.nom;
    console.log("grille");
    // console.log(etatGrille);
    console.log(stateTemp);
    fonctionChangementState(stateTemp);
  }; 



  let arraySquare = [];
  for (let y = 0; y < size; y++) {
    let ligneSquare = [];
    for (let x = 0; x < size; x++) {
      let id = x + y * size;
      ligneSquare.push(
        <div className="tileBg">
          <Tile key={id} position={id} onDrop={DropItem} bateauImg={etatGrille[id]} grille={etatGrille} />
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
