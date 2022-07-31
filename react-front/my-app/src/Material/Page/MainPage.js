import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import Navigation from "./Navigation";
import InfoTable from "./InfoTable";
import AddInfo from "./AddInfo";
import Login from "./Login";
import Register from "./Register";
import InsertData from "./InsertData";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function MainPage() {

  return (

    <div className="main">
      <Container fluid>
        <BrowserRouter>
          <Row>
            <Col>
              <Routes>
                <Route path="/addInfo" element={<Header />} />
                <Route path="/insertData" element={<Header />} />
                <Route path="/" element={<Header />} />
              </Routes>
            </Col>
          </Row>

          {/* <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes> */}
          <Row>
            <Col xl={12} style={{ padding: "0" }}>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </Col>
          </Row>
          <Row>

            <Col xl={2}>
              <Routes>
                <Route path="/addInfo" element={<Navigation />} />
                <Route path="/insertData" element={<Navigation />} />
                <Route path="/" element={<Navigation />} />
              </Routes>
            </Col>
            <Col xl={10}>
              <Routes>
                <Route path="/addInfo" element={<AddInfo />} />
                <Route path="/insertData" element={<InsertData />} />
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
