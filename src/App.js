import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Protected from "./components/Protected";
import { UserAuthContextProvier } from "./context/UserAuthContext";

function App() {
  return (
    <>
    <Container>
      <Row>
        <Col>
          <UserAuthContextProvier>
            <Routes>
              <Route path="/Home" element={<Protected><Home/></Protected>}/>
              <Route path="/" element={<Login/>}/>
              <Route path="/SignUp" element={<SignUp/>}/>
            </Routes>
          </UserAuthContextProvier>   
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
