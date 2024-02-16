import './App.css';
import { useState } from 'react';
import { Container, Row, Col, Nav, Navbar, Button } from 'react-bootstrap';
import productData from "./data.js";

function App() {

  let [shoes] = useState(productData);

  return (
    <div className="App">
      <Navigation />
      <div className="main-bg"></div>
      <Product product={productData}/>
    </div>
  );
}

// Navigation
const Navigation = () => {
  return(
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">ShoseMall</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

// Main page product
const Product = (props) => {
  return(
    <div>
      <Container>
        <Row>
          <Col sm={4}>
            <img src={ props.product[0].img } width="100%" />
            <h4>{ props.product[0].title }</h4>
            <p>{ props.product[0].content }</p>
          </Col>
          <Col sm={4}>
            <img src={ props.product[1].img } width="100%" />
            <h4>{ props.product[1].title }</h4>
            <p>{ props.product[1].content }</p>
          </Col>
          <Col sm={4}>
            <img src={ props.product[2].img } width="100%" />
            <h4>{ props.product[2].title }</h4>
            <p>{ props.product[2].content }</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App;
