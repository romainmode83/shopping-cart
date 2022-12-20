
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import { Link, useLocation } from 'react-router-dom';


const MainNav = () => {
  let pathname = useLocation().pathname;

  return (
    <Navbar bg='dark' expand="sm"  >
      <Col xxl={10}>
        <Navbar.Brand as={Link} to="/" className="ms-3 text-white" href="#home"> CatSaver</Navbar.Brand>
      </Col>
      <Col>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
              <Nav.Link 
              as={Link} 
              to="/" 
              className={`text-white mx-3 ${pathname === '/' && 'isActive'}`} >Home</Nav.Link>
            
            
              <Nav.Link 
              as={Link} 
              to="/shop" 
              className={`text-white mx-3 ${pathname === '/shop' && 'isActive'}`} >Shop</Nav.Link>
            
              <Nav.Link 
              as={Link} 
              to="/cart" 
              className={`text-white mx-3 ${pathname === '/cart' && 'isActive'}`}  >Cart</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Col>
    </Navbar>
  )
}

export default MainNav;
