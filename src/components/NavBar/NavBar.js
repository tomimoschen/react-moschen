import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import CartWidget from "../NavBar/CartWidget"
import { lime } from '@mui/material/colors';

function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className="m-2" href="#home">Camisetas</Navbar.Brand>
                    <SportsSoccerIcon sx={{ fontSize: 35, color: lime["A200"]}} />
                    <Nav className="mx-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#features">Ligas Europeas</Nav.Link>
                        <Nav.Link href="#pricing">Selecciones</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>
            {/* <CartWidget /> */}
        </>
    );
}

export default NavBar;
