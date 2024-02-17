/* eslint-disable */

import './App.css';
import { useState } from 'react';
import { Container, Row, Col, Nav, Navbar, Button } from 'react-bootstrap';
import productData from "./TestData.js";
import { Routes, Route, Link } from "react-router-dom";

import Detail from './routes/Detail.js';

function App() {

  let [shoes] = useState(productData);

  return (
    <div className="App">

      <Navigation />

      <Routes>
        <Route  path="/" element={
          <div>
            <div className="main-bg"></div>
            <Card product={productData} />      
          </div>
        } />

        <Route  path="/detail" element={<Detail />} />
      </Routes>
      
      <Footer />

    </div>
    
  );
}

// Navigation
const Navigation = () => {
  return(
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">ShoseMall</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
            <Nav.Link href="#event">Event</Nav.Link>
          </Nav>
          <div>

          </div>
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

const Footer = () => {
  return(
    <div>
      <footer className='footer'>
        
      </footer>
    </div>
  )
}

export default App;
