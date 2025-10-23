import { Navbar, Container, Nav} from 'react-bootstrap';
import { Link, NavLink } from "react-router";

const Menu = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to={"/"} className='fs-2' href="#home">Crud Food con React</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <NavLink to={"/"} className={"nav-link"} >Home</NavLink>
            <NavLink to={"/login"} className={"nav-link"} >Login</NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Menu
