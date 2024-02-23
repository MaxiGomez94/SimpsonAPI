import Card from "react-bootstrap/Card";

function Frases({ personaje }) {
  return (
    <Card className="border-0 card-img text-light">
      <Card.Title className="title-card fw-bold">{personaje.character}</Card.Title>
      <Card.Body>
        <Card.Img
          variant="top"
          src={personaje.image}
          className="img-fluid w-25"
        />
        <Card.Text className="py-4 mt-4 fw-bold text-card">{personaje.quote}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Frases;
