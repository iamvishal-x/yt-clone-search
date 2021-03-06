import { Card, Placeholder } from "react-bootstrap";
import "./PlaceholderCard.css";
import yt from "../../Resources/Images/yt.svg";
const PlaceholderCard = () => {
  return (
    <>
      <Card className="placeholdercard">
        <Card.Img src={yt} className="placeholdercard__img" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
        </Card.Body>
      </Card>
    </>
  );
};

export default PlaceholderCard;
