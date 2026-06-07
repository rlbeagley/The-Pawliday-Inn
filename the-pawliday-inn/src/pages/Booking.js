import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { enCA } from 'date-fns/locale';
import pawImg from '../assets/paw.svg';

export default function Booking({ onNext }) {
  // to determine which booking step is shown...
  const [step, setStep] = useState(1);

  const [range, setRange] = useState([{
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
  }]);

  if (step === 1) {
    return (
      <Container className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh', paddingTop: '60px' }}>
        <Row className="align-items-center justify-content-between w-100">
          <Col md={5} className="pl-3">
            <h1 className="font-weight-bold" style={{fontSize: '4.5em'}}>Please Select <span style={{color: 'black'}}>Check-In</span> and <span  style={{color: 'black'}}>Check-Out</span> Dates:</h1>
          </Col>
          <Col md="auto">
            <DateRange
              ranges={range}
              onChange={item => setRange([item.selection])}
              locale={enCA}
              minDate={new Date()}
              rangeColors={['#0259DE']}
            />
            <Button className="custom-btn" style={{ padding: '0.5em 1em' }} onClick={() => setStep(2)}>
              Next
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="text-end p-3">
            
          </Col>
        </Row>  
      </Container>
    );
  } 
  
  else if (step === 2) {
    return ( 
      <Container fluid className="pt-4 d-flex flex-column" style={{ minHeight: '100vh' }}>
        <Row className="w-75 mx-auto justify-content-center">
          <Col md="auto">
            <Button onClick={() => setStep(1)}>Back</Button>
          </Col>
          <Col className="text-center">
            <h1 style={{fontSize: '5em'}}>Pet Information</h1>
          </Col>
          <Col md="auto">
            <Button onClick={() => setStep(3)}>Finish</Button>
          </Col>
       </Row>

        <Row className="justify-content-center">
          <Col md={8} style={{ backgroundColor: '#b8cef0', borderRadius: '15px', padding: '30px' }}>
            <Form>
              <Form.Group as={Row} className="mb-3 align-items-center">
                <Form.Label column md={3}>Name:</Form.Label>
                <Col><Form.Control type="text" /></Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3 align-items-center">
                <Form.Label column md={3}>Animal Type:</Form.Label>
                <Col className="d-flex gap-3">
                  {['Dog', 'Cat', 'Small Animal'].map(type => (
                    <Form.Check inline type="radio" name="animalType" label={type} value={type} key={type} /> ))}
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3 align-items-center">
                  <Form.Label column md={3}>Age:</Form.Label>
                  <Col><Form.Control type="number" /></Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3 align-items-center">
                <Form.Label column md={3}>Has Medication:</Form.Label>
                <Col className="d-flex gap-3">
                    {['Yes', 'No'].map(opt => (
                        <Form.Check inline type="radio" name="hasMedication" label={opt} value={opt} key={opt} />
                    ))}
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3 align-items-center">
                <Form.Label column md={3}>Medication Info:</Form.Label>
                <Col><Form.Control type="text" /></Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3 align-items-center">
                <Form.Label column md={3}>Tell us about your Furry Friend:</Form.Label>
                <Col><Form.Control as="textarea" rows={3} /></Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3 align-items-center">
                <Form.Label column md={3}>Your Phone Number:</Form.Label>
                <Col><Form.Control type="tel" /></Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>
    </Container>
    );

  } 
  
  else if (step === 3) {
      return(
        <Container className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh', position: 'relative' }}>
          <img src={pawImg} className="paw" style={{position: 'absolute', rotate: '-40deg', top: '0%', right: '0%'}} alt="paw svg" />
          <h1>Booking Confirmed!</h1>
          <h2>We look forward to seeing your furry friend soon.</h2>
          <Button as={Link} to="/" className="mx-2">Return to Home</Button>
          <img src={pawImg} className="paw" style={{position: 'absolute', bottom: '10%', left: '0%',}} alt="paw svg" />
          
        </Container>
      );

  }
  
}