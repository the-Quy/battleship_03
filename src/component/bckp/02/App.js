import React from "react";
import "../stylesheet/App.scss";

import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import Game from "./Game";
import Ship from "./Ship";

function App() {
  return (
    <>
      <div className="banner">Banner</div>
      <DndProvider backend={HTML5Backend}>
        <Container fluid className="">
          <Row className="row">
            <Col xs={3} className="col-left">
              <Ship length={2}/>
              <Ship />
              <Ship />
            </Col>

            <Col xs={6} className="col-mid">
              <Game />
            </Col>

            <Col xs={3} className="col-right"></Col>
          </Row>
        </Container>{" "}
      </DndProvider>
    </>
  );
}

export default App;
