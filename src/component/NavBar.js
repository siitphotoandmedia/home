import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/home" style={{ fontSize: "150%" }}>
          <img
            alt=""
            src={require("../assets/logo/beta3_Final Colored Transparent.png")}
            width="50"
            height="50"
            className="d-inline-block align-middle"
          />{" "}
          SIIT Photo and Media Club
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            {/* Some problems in github pages related to Router (and also hash router), so use this url to prevent it */}
            <Nav.Link
              href="/home/#/gallery"
              style={{
                fontSize: "130%",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              Gallery
            </Nav.Link>
            {/* Add your navigation here */}
            {/* <Nav.Link
              href="/about"
              style={{
                fontSize: "130%",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              About
            </Nav.Link> */}
            {/* <Nav.Link
              href="/test"
              style={{
                fontSize: "130%",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              Test
            </Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
