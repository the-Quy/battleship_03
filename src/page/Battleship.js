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

import bgImg5 from "../image/board/bgImg5.jpg";
import bgImg4 from "../image/board/bgImg4.jpg";
import bgImg3 from "../image/board/bgImg3.jpg";
import bgImg2 from "../image/board/bgImg2.jpg";
import bgImg1 from "../image/board/bgImg1.jpg";

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
                      <Ship length={5} nom={"carrier"} orientation={true} bateauImg={bgImg5} preview={bateau5} />
                      <Ship length={2} nom={"sub"} orientation={true} bateauImg={bgImg2} preview={bateau2} />
                      <Ship length={2} nom={"battleship"} orientation={true} bateauImg={bgImg4} preview={bateau4} />
                      <Ship length={2} nom={"frigate"} orientation={true} bateauImg={bgImg1} preview={bateau1} />
                      <Ship length={2} nom={"mslLauncher"} orientation={true} bateauImg={bgImg3} preview={bateau3} />
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
