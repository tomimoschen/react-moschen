import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo1 from "../assets/tshirt.png";

function NavBar() {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                <logo1></logo1>
                    <Navbar.Brand href="#home">Camisetas</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#features">Ligas Europeas</Nav.Link>
                        <Nav.Link href="#pricing">Selecciones</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
