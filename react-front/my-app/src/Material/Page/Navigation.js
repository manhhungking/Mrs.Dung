import React from "react";
import Translate from "react-translate-component";
import { Row, Col, Nav, Navbar } from "react-bootstrap";
import "../Style/Navigation.css";
import counterpart from "counterpart";
import en from "../lang/en";

counterpart.registerTranslations("en", en);

class Navigation extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navigation">
            <Row>
              <Col xl={12}>
                <Nav.Link href="/">
                  <p className="text-semi-bold first-element">
                    <Translate content="navigation.title" />
                  </p>
                </Nav.Link>
                <Nav.Link href="/addInfo">
                  <Translate content="navigation.project" />
                </Nav.Link>
              </Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
