import { Container, Card, Button, Row, Col} from 'react-bootstrap';
import { useState } from 'react';
import Cat from '../assets/cat.svg';
import Dog from '../assets/dog.svg';
import Fish from '../assets/fish.svg';


// Card data
const serviceInfo = {
  dogs: {
    title: 'Dogs',
    img: Dog,
    rate: '$60/night',
    includes: 'Twice daily feedings, 2 daily walks, Group play sessions, one-on-one play.',
    additional: 'Grooming, Nail Clipping.'
  },
  cats: {
    title: 'Cats',
    img: Cat,
    rate: '$40/night',
    includes: 'Twice daily feedings, litter cleaning, one-on-one play',
    additional: 'Grooming, Nail Clipping'
  },
  small: {
    title: 'Small Animals',
    img: Fish,
    rate: '$20/night',
    includes: 'Litter cleaning, Daily feedings, one-on-one play',
    additional: 'Nail Clipping (animal dependent)'
  }
};

export default function Services() {
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  return (
    <Container className="d-flex flex-column align-items-center" style={{ minHeight: '100vh', paddingTop: '2rem' }}>
      
      <h1 style={{ fontSize: '5rem', padding: '0' }}>Services</h1>

      {selectedAnimal === null ? ( // default view, no animal selected
        <Row className="justify-content-center align-items-center flex-grow-1 w-100">
          {Object.entries(serviceInfo).map(([key, animal]) => (
            <Col md={4} key={key}>
              <Card>
                <Card.Img variant="top" src={animal.img} style={{ height: '300px', objectFit: 'contain' }} />
                <Card.Body className="text-center">
                  <Card.Title as="h1" style={{ fontSize: '3em', textShadow: '0 0 0' }}>
                    {animal.title}
                  </Card.Title>
                  <Button onClick={() => setSelectedAnimal(key)}>Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : ( // load data specific to animal
        <Row className="justify-content-center align-items-center flex-grow-1 w-100 gap-3">
          <Col xs={12} className="mb-3">
            <Button variant="outline-primary" onClick={() => setSelectedAnimal(null)}>
              &lt; Back
            </Button>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img src={serviceInfo[selectedAnimal].img} style={{ height: '300px', objectFit: 'contain' }} />
              <Card.Body className="text-center">
                <Card.Title as="h1" style={{ fontSize: '3em', textShadow: '0 0 0' }}>
                  {serviceInfo[selectedAnimal].title}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5} style={{backgroundColor: '#84B0FB', borderRadius: '20px', padding: '4em'}}>
            <p><strong>Daily Rate:</strong> {serviceInfo[selectedAnimal].rate}</p>
            <p><strong>Includes:</strong> {serviceInfo[selectedAnimal].includes}</p>
            <p><strong>Additional Services:</strong> {serviceInfo[selectedAnimal].additional}</p>
          </Col>
        </Row>
      )}

    </Container>
  );
}