import React from "react";
import "./stylesheet/App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import Game from "./component/Game";
import GameOpp from "./component/GameOpp";
import Ship from "./component/Ship";
import leTitre from "./image/battleship/titre_02.svg";
import txt_sesPieces from "./image/battleship/txt_sesPieces_01.svg";
import txt_mesPieces from "./image/battleship/txt_mesPieces_01.svg";
import txt_mesTrucs from "./image/battleship/txt_mesTrucs_01.svg";

import APropos from "./page/APropos.js";
import Accueil from "./page/Accueil.js";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div>Mon Menu</div>
        <a href="/">accueil</a>
        <br />
        <a href="/apropos">sddsf</a>
        <Routes>
          <Route path="/" element={<Accueil />}></Route>
          {/* <Route path="/battleship" element={<Battleship />}></Route> */}
          <Route path="/apropos" element={<APropos />}></Route>
        </Routes>
      </BrowserRouter>
      <div className="banner">
        <img src={leTitre} alt="title"></img>
      </div>
      <DndProvider backend={HTML5Backend}>
        <Container fluid className="">
          <Row className="row">
            <Col xs={2} className="col-left">
              <div>
                <img src={txt_mesTrucs} alt="txt_sesPieces"></img>
              </div>
              <div className="shipContainer">
                <div>
                  <Ship length={2} />
                </div>
                <div>
                  <Ship />
                </div>
                <div>
                  <Ship />
                </div>
              </div>
            </Col>

            <Col xs={5} className="col-mid">
              <div className="txt_mesPieces_align">
                <img src={txt_mesPieces} alt="txt_sesPieces"></img>
              </div>
              <div className="col-mid-content">
                <Game />
              </div>
            </Col>

            <Col xs={5} className="col-mid">
              <div className="">
                <img src={txt_sesPieces} alt="txt_sesPieces"></img>
              </div>
              <div className="col-mid-content">
                <GameOpp />
              </div>
            </Col>

            {/* <Col xs={1} className="col-right"></Col> */}
          </Row>
        </Container>
      </DndProvider>
    </>
  );
}
