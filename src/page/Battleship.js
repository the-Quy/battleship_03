import React from "react";
import "../stylesheet/App.scss";

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
      <div></div>
      <DndProvider backend={HTML5Backend}>
        <Container fluid className="">
          <Row className="row">
            <Col xs={2} className="col-left">
              <div className="shipContainer">
                <img src={txt_mesTrucs} alt="txt_sesPieces"></img>
                <Ship length={2} bateauImg={bateau5} preview={bateau5} />
                <Ship length={2} bateauImg={bateau4} preview={bateau4} />
                <Ship length={2} bateauImg={bateau3} preview={bateau3} />
                <Ship length={2} bateauImg={bateau2} preview={bateau2} />
                <Ship length={2} bateauImg={bateau1} preview={bateau1} />
              </div>
            </Col>
            <Col xs={5} className="col-mid">
              <div className="txt_mesPieces_align">
                <img src={txt_mesPieces} alt="txt_sesPieces"></img>
              </div>
              <div className="col-mid-content">
                <div className="boardArt">
                  <Game />
                </div>
              </div>
            </Col>
            <Col xs={5} className="col-mid">
              <div className="">
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
