import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

// Navigation
const Navigation = () => {
    let navigate = useNavigate();
    return(
      <div>
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand href="/">ShoseMall</Navbar.Brand>
            <Nav className="me-auto nav-menu">
            <Nav.Link onClick={()=>{ navigate('/product') }}>Product</Nav.Link>
              <Nav.Link onClick={()=>{ navigate('/cart') }}>Cart</Nav.Link>
              <Nav.Link onClick={()=> { navigate('/event') }}>Event</Nav.Link>
            </Nav>
            <Nav className='me-auto ft-s'>
            </Nav>
          </Container>
        </Navbar>
      </div>
    )
  }

  export default Navigation