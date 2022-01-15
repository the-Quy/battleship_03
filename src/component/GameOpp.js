import React, { useState } from "react";
import "../stylesheet/Game.scss";

import myTestSvg from "../image/oppBoard/test5.svg";

import TileOpp from "./TileOpp";

let size = 10;

export default function GameOpp() {
  const [allValues, setValues] = useState(Array(100).fill(null)); //-----> tic tac toe
  const nextSymbole = <img src={myTestSvg}></img>;
  //-----> tic tac toe

  function onClickTile(index) {
    let maCopie = allValues.slice();
  
    // console.log(maCopie);
    maCopie[index] = nextSymbole;
    setValues(maCopie);
  } //-----> tic tac toe

  function fabriqueTile(index) {
    return (
      <TileOpp
        value={allValues[index]} //-----> tic tac toe
        click={() => onClickTile(index)} //-----> tic tac toe
      />
    );
  }

  let arraySquareOpp = [];
  for (let y = 0; y < size; y++) {
    let ligneSquare = [];
    for (let x = 0; x < size; x++) {
      let id = x + y * size;
      ligneSquare.push(<div className="tileBg">{fabriqueTile([id])}</div>);
    }
    const row = <div>{ligneSquare}</div>;
    arraySquareOpp.push(row);
  }
  return (
    <>
      <div className="board">{arraySquareOpp}</div>
    </>
  );
}
