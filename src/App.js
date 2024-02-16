/* eslint-disable */

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
      <Card product={productData} />
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
            <Nav.Link href="#cart">Cart</Nav.Link>
            <Nav.Link href="#event">Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

// Main page product
const Card = (props) => {
  return(
    <div>
      <Container>
        <Row>
          {
            props.product.map((product, i) =>{
              return(
                <Col sm={4}>
                  <img src={ product.img } width="100%" />
                  <h4>{ product.title }</h4>
                  <p>{ product.content }</p>
                  <p>Price : { product.price }</p>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </div>
  )
}

export default App;
