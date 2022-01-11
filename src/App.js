import React from "react";
import "./stylesheet/App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import leTitre from "./image/battleship/titre_02.svg";
import accueil from "./image/battleship/txt_accueil_01.svg";
import inscrire from "./image/battleship/txt_inscrire_01.svg";
import moi from "./image/battleship/txt_moi_01.svg";

import Login from "./page/Login.js";
import APropos from "./page/APropos.js";
import Accueil from "./page/Accueil.js";
import Battleship from "./page/Battleship.js";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="banner battleship_title">
          <a href="/battleship">
            <img src={leTitre} alt="title"></img>
          </a>
        </div>
        <div className=" battleship_title">
          &nbsp;
          <a href="/">
            <img src={accueil} alt="accueil"></img>
          </a>
          &nbsp;
          <a href="/login">
            <img src={inscrire} alt="inscrire"></img>
          </a>
          &nbsp;
          <a href="/apropos">
            <img src={moi} alt="moi"></img>
          </a>
        </div>

        <Routes>
          <Route path="/" element={<Accueil />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/battleship" element={<Battleship />}></Route>
          <Route path="/apropos" element={<APropos />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
