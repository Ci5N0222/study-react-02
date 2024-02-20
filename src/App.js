/* eslint-disable */

import './App.css';
import { useState } from 'react';
import { Container, Row, Col, Nav, Navbar, Button } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import productData from './Test-Data.js';
import Detail from './routes/Detail.js';
import Cart from './routes/Cart.js';
import Event from './routes/Event.js';

function App() {

  let [shoes] = useState(productData);

  return (
    <div className="App">

      <Navigation />

      <Routes>

        <Route  path="/" element={ <Home productData/> } />

        <Route  path="/detail" element={ <Detail /> } />

        {/* Nested route 
            - 여러 유사 페이지가 필요할 때 사용
          */}
        <Route path="/event" element={ <Event /> } >
          <Route path="detail" element={<div>Event Detail</div>} />
        </Route>

        <Route path="/cart" element={ <Cart /> } >
          <Route path="detail" element={<div>Cart Detail</div>} />
        </Route>

      </Routes>
      
      {/* <Footer /> */}

    </div>
    
  );
}

const Home = () => {
  return(
    <div>
      <div className="main-bg"></div>
      <Card product={productData} />  
    </div>
  )
}

// Navigation
const Navigation = () => {
  let navigate = useNavigate();
  return(
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">ShoseMall</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/cart') }}>Cart</Nav.Link>
            <Nav.Link onClick={()=> { navigate('/event') }}>Event</Nav.Link>
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

const Footer = () => {
  return(
    <div>
      <footer className='footer'>
        
      </footer>
    </div>
  )
}

export default App;
