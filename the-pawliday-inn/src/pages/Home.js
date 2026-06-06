import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../assets/cat-dog-logo.png';

export default function Home() {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100" style={{height: '100vh'}}>
        <Row className="justify-content-center align-items-center vw-90">
            <Col>
                <h1>The Pawliday Inn</h1>
                <h2>Your pet's home away from home.</h2>
            </Col>
            <Col>
                <Image src={Logo} className="vw-50" alt="Illustration of cat and dog" fluid />
            </Col> 
        </Row>
        <Row>
            <Button as={Link} to="/booking" className="mx-2">
                Book your pet's stay now!
            </Button>
        </Row>
    </Container>
  );
}