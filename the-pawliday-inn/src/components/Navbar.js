import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DogHouse from '../assets/DogHouse.svg';

export default function CustomNavbar() {
    return(
        <Navbar expand="lg" fixed="top" style={{backgroundColor: 'white'}}>
            <Nav className="flex-row ms-auto gap-5">
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/services">Services</Nav.Link>
                <Nav.Link as={Link} to="/booking">Booking</Nav.Link>
                <Nav.Link as={Link} to="/">
                    <img src={DogHouse} alt="Home" width="30" height="30" />
                </Nav.Link>
            </Nav>
        </Navbar>
    );
}