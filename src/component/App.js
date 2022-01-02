import React from "react";
import "../stylesheet/App.scss";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import Game from "./Game";
import Ship from "./Ship";

function Login() {
  return (
    <>
      <h1>Login!</h1>
    </>
  );
}

function Battleship() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Container fluid className="">
          <Row className="row">
            <Col xs={2} className="col-left">
              <Ship length={2} />
              <Ship />
              <Ship />
            </Col>

            <Col xs={9} className="col-mid">
              <Game />
            </Col>

            <Col xs={1} className="col-right"></Col>
          </Row>
        </Container>
      </DndProvider>
      <div className="banner">Banner</div>
      <div></div>
    </>
  );
}

function ReactRouter() {
  // --------- switch part toggles sections Link to
  return (
    <BrowserRouter>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">click 4 login</Link>
            </li>
            <li>
              <Link to="/battleship">click 4 Battleship</Link>
            </li>
          </ul>
        </nav> */}
        <Switch>
          <Route path="/battleship" component={Battleship} />

          <Route path="/" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default ReactRouter;

// function App() {
//   return (
//     <>
//       <div className="banner">Banner</div>
//       <DndProvider backend={HTML5Backend}>
//         <Container fluid className="">
//           <Row className="row">
//             <Col xs={3} className="col-left">
//               <Ship length={2}/>
//               <Ship />
//               <Ship />
//             </Col>

//             <Col xs={6} className="col-mid">
//               <Game />
//             </Col>

//             <Col xs={3} className="col-right"></Col>
//           </Row>
//         </Container>
//       </DndProvider>
//     </>
//   );
// }

// export default App;
