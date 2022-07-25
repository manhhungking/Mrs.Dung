import React, { useContext } from "react";
import Translate from "react-translate-component";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../Style/Header.css";
import logo from "../Images/logo_elca.png";
import counterpart from "counterpart";
import en from "../lang/en";

counterpart.registerTranslations("en", en);
counterpart.setLocale("en");
function Header() {
  return (
    <div className="content">
      <Container fluid>
        <Row>
          <Col xl={1}></Col>
          <Col xl={1}>
            <img className="logo" src={logo} alt="logo" />
          </Col>
          <Col xl={6}>
            <p className="name">
              <Translate content="header.name" />
              <Button
                style={{
                  color: "black",
                  backgroundColor: "white",
                  border: "0",
                  marginRight: "0",
                  marginLeft: "3em",
                  paddingRight: "4px",
                }}
              >
                EN |
              </Button>
              <Button
                style={{
                  color: "blue",
                  backgroundColor: "white",
                  border: "0",
                  paddingLeft: "0",
                }}
              >
                FR
              </Button>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
