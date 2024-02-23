/* eslint-disable */

import './App.css';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Nav, Navbar, Button } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import axios from 'axios';
import { useQuery } from 'react-query';

import productData from './Test-Data.js';
import Product from './routes/Product.js';
import Detail from './routes/Detail.js';
import Cart from './routes/Cart.js';
import Event from './routes/Event.js';


function App() {

  let [shoes, setShoes] = useState(productData);
  let [count, setCount] = useState(2);

  useEffect(()=>{
    if(!localStorage.getItem('watched')){
      localStorage.setItem('watched', JSON.stringify([]));
    }
  }, [])
  
  return (
    <div className="App">

      <Navigation />
      <body className='main-container'>
        <Routes>
          <Route  path="/" element={ 
            <div>
              <div className="main-bg"></div>
              <Container>
                <Row>
                  <p className='main-product'>Best Product</p>
                  {
                    shoes.map((a, i)=> {
                      return( <Card shoes={shoes[i]} i={i} key={i}/> )
                    })
                  }
                </Row>
              </Container>
              {
              // 더보기 버튼
                count < 4 ? <PlusButton shoes={shoes} setShoes={setShoes} count={count} setCount={setCount}/> : null
              }
            </div>
          } />

          <Route path="/product" element={
            <Product />
          } />

          <Route  path="/product/:id" element={ 
              <Detail shoes={ shoes }/> 
          } />
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

      </body>

      <Footer className='footer' />
      

    </div>
    
  );
}

const PlusButton = (props) => {
  return(
    <Button onClick={()=> {
      // 로딩 시작
      axios.get("https://codingapple1.github.io/shop/data"+props.count+".json")
      .then((data)=>{
        let copy = [...props.shoes, ...data.data];
        props.setShoes(copy);
        props.setCount(props.count+1);
        // 로딩 종료
      })
      .catch(()=> {
        // 로딩 종료 및 오류
      })
    }}>더보기</Button>
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

// Main page product
const Card = (props) => {
  return(
    <Col sm={4}>
      <Link to={`/product/${props.shoes.id}`}>
        <img src={ "https://codingapple1.github.io/shop/shoes"+(props.i+1)+".jpg" } width="100%" />
      </Link>
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.content }</p>
      <p>Price : { props.shoes.price }</p>
    </Col>
  )
}

const Footer = () => {
  return(
    <div>
      <footer className='footer'>
        <div className='footer-left'>
          <p>ShoseMall</p>
          <span>개인정보처리방침</span>
          <span>이용약관</span>
          <p></p>
        </div>
        <div className='footer-center ft-s'>
          <p>(주)ShoseMall | 대표: 노시온 | 사업자번호: 100-10-10000</p>
          <p>Phone: 010-5122-4519 | 주소: 경기도 부천시 소사구 심곡로</p>
        </div>
      </footer>
    </div>
  )
}

export default App;
