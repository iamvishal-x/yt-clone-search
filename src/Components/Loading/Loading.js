import React from "react";
import { Col, Row } from "react-bootstrap";
import PlaceholderCard from "../PlaceholderCard/PlaceholderCard";

const Loading = () => {
  return (
    <>
      <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6} className="g-3">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Col key={idx}>
            <PlaceholderCard />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Loading;
