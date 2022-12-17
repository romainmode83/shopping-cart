
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import { LinkContainer } from 'react-router-bootstrap'

const MainNav = () => {


  return (
    <Navbar bg='dark' expand="sm"  >
      <Col xxl={10}>
        <Navbar.Brand className="ms-3 text-white" href="#home"> CatSaver</Navbar.Brand>
      </Col>
      <Col>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer  end to="/" 
              className={({ isActive }) =>
                isActive ? 'isActive' : undefined
              }
            >
              <Nav.Link className="text-white mx-3" href="#home">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer end to="/shop" exact={true}
              className={({ isActive }) =>
                isActive ? 'isActive' : undefined
              }
              >
              <Nav.Link className="text-white mx-3 " href="#shop">Shop</Nav.Link>
            </LinkContainer>
            <Nav.Link className="text-white mx-3" href="/link">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Col>
    </Navbar>
  )
}

export default MainNav;
