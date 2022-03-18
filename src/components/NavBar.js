import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import classes from './NavBar.module.css';


const Cards = () => {
    const navigate = useNavigate();

return (
    <Navbar bg="light" expand="md">
        <Container className={`${ classes.containerMargin } d-flex`}>
            <Button variant="link" className={`${ classes.brandButton } ms-md-0 me-auto ms-auto`} onClick={() => navigate('/') } >iAmPierre</Button>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav>
                    <Button className={`${ classes.buttonStyle } me-md-3 mb-md-0 mb-2 mt-md-0 mt-2 align-self-center`} onClick={ () => navigate('/')}>Home</Button>
                    <Button className={`${ classes.buttonStyle } align-self-center`} onClick={ () => navigate('/tech')}>Tech</Button>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)
}

export default Cards;