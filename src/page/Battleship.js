import React from "react";
import "../stylesheet/App.scss";
import "../stylesheet/animation.scss"

import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import Game from "../component/Game";
import GameOpp from "../component/GameOpp";
import Ship from "../component/Ship";

import txt_sesPieces from "../image/battleship/txt_sesPieces_01.svg";
import txt_mesPieces from "../image/battleship/txt_mesPieces_01.svg";
import txt_mesTrucs from "../image/battleship/txt_mesTrucs_01.svg";

import bateau5 from "../image/battleship/bateau5.svg";
import bateau4 from "../image/battleship/bateau4.svg";
import bateau3 from "../image/battleship/bateau3.svg";
import bateau2 from "../image/battleship/bateau2.svg";
import bateau1 from "../image/battleship/bateau1.svg";

export default function Battleship() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Container fluid className="">
          <Row className="game_row">
            <Col lg={6} className="col-mid">
              <div className="txt_mesPieces_align txt_mesCoups">
                <img src={txt_mesPieces} alt="txt_sesPieces "></img>
              </div>
              <div className="col-mid-content">
                <div className="boardArt">
                  <Game />
                </div>
              </div>
              <Row>
                <Col xd={6}>
                  <div className="col-mid-content ">
                    <img src={txt_mesTrucs} alt="txt_sesPieces"></img>
                  </div>
                </Col>
              </Row>
              <Row>
                <Row>
                  <Col lg={1} md={0}></Col>
                  <Col lg={12} md={12} className="col-left">
                    <div className="shipContainer">
                      <Ship length={5} nom={"carrier"} orientation={true} bateauImg={bateau5} preview={bateau5} />
                      <Ship length={2} bateauImg={bateau2} preview={bateau2}  />
                      <Ship length={2} bateauImg={bateau4} preview={bateau4} />
                      <Ship length={2} bateauImg={bateau1} preview={bateau1} />
                      <Ship length={2} bateauImg={bateau3} preview={bateau3} />
                    </div>
                  </Col>
                  <Col lg={1} md={0}></Col>
                </Row>
                <Col xs={6}></Col>
              </Row>
            </Col>
            <Col lg={6} className="col-mid">
              <div className="txt_sesCoups">
                <img src={txt_sesPieces} alt="txt_sesPieces"></img>
              </div>
              <div className="col-mid-content">
                <div className="boardOppArt">
                  <GameOpp />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </DndProvider>
    </>
  );
}
