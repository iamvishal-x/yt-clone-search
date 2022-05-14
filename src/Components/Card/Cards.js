import React from "react";
import { Card } from "react-bootstrap";
import "./Cards.css";

const Cards = ({ thumbnail, title, description, videoId }) => {
  const handleShare = () => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
  };
  return (
    <>
      <Card onClick={() => handleShare()} className="cards__container">
        <Card.Img variant="top" src={thumbnail} className="cards__img" />
        <Card.Body className="cards__body">
          <Card.Title className="cards__title">{title}</Card.Title>
          <hr />
          <Card.Text className="cards__text">{description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
