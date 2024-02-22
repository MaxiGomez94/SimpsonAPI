import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card className='border-0'>
        <Card.Title>Nelson Munts</Card.Title>
      <Card.Body>
      <Card.Img variant="top" src="https://cdn.glitch.me/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png" className='img-fluid w-25'/>
        <Card.Text className='py-4 mt-4'>
        Shoplifting is a victimless crime, like punching someone in the dark
        </Card.Text>
        <Button variant="primary">Cambiar Frase</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;