import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import Navigation from "./Navigation";
import InfoTable from "./InfoTable";
import AddInfo from "./AddInfo";
import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function MainPage() {
  return (
    <div className="main">
      <Container fluid>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <BrowserRouter>
          <Row>
            <Col xl={2}>
              <Routes>
                <Route path="/addInfo" element={<Navigation />} />
                <Route path="/login" element={<Navigation />} />
                <Route path="/" element={<Navigation />} />
              </Routes>
            </Col>
            <Col xl={9}>
              <Routes>
                <Route path="/addInfo" element={<AddInfo />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<InfoTable />} />
              </Routes>
            </Col>
          </Row>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default MainPage;
