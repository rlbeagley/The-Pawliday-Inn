import { Container, Row, Col, Image } from 'react-bootstrap';
import Pets from '../assets/pets.svg';

export default function About() {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center text-center" style={{ minHeight: '100vh' }}>
      
      <Row className="justify-content-center align-items-center mb-4">
        <Col xs={12} md={6}>
          <Image src={Pets} alt="Illustration of cat and dog" fluid />
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <h1 className="mb-2">Our Mission</h1>
          <h5 className="mb-2 text-muted" style={{color: 'black'}}>Here at The Pawliday Inn, we want to make sure your pet has a home away from home.</h5>
          <p>We understand that you want the best possible care for your pets. We also understand that sometimes you might have to go away, and your pets can't always come with you. We are here for you during that time. We welcome all kinds of animals to The Pawliday Inn, and will always give them our best possible care. Our staff ensures that each animal is treated based on their own needs, wants, and personalities. So go out, travel, and rest assured that your pets are in good hands.</p>
          <p className="text-muted" style={{bottom: '20%'}}>Designed by Rebecca Beagley, 2026</p>
        </Col>
      </Row>

    </Container>
  );
}