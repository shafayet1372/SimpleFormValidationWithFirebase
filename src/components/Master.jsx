import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "../style.module.css";
import Form from "./Form";
import { ToastContainer } from "react-toastify";
export default function Master() {
  return (
    <Container fluid className={style.maincontainer}>
      <Row>
        <Col md="12 my-2">
          <Form />
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
}
