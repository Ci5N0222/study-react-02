/* eslint-disable */

import './App.css';
import { useEffect, useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { Routes, Route } from "react-router-dom";

import axios from 'axios';
import { useQuery } from 'react-query';

// routes
import Product from './routes/Product.js';
import Detail from './routes/Detail.js';
import Cart from './routes/Cart.js';
import Event from './routes/Event.js';

// component
import Card from './component/Card.js';
import Navigation from './component/Navigation.js';
import Footer from './component/Footer.js';

// data
import productData from './Test-Data.js';

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

export default App;
