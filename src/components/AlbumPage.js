import React from 'react';
import CardComponent from "./CardComponent";
import { Col, Container, Row } from "reactstrap";

const AlbumPage = () => {
  return (
    <div>
        <Container>
        <Row>
          <Col xs="3" className="m-5">
          <CardComponent/>
          </Col>

          <Col xs="3" className="m-5">
          <CardComponent/>
          </Col>

          <Col xs="3" className="m-5">
          <CardComponent/>
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default AlbumPage

