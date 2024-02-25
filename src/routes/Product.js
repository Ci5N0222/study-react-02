/* eslint-disable */

import React, { useContext, useEffect, useState } from "react";
import {Nav, Container, Row} from 'react-bootstrap';
import Card from './../component/Card';

// data
import productData from './../Test-Data.js';

const Product = (props) => {

    let [shoes, setShoes] = useState(productData);

    return(
        <div>
            <Nav className="justify-content-center" activeKey="/product">
                <Nav.Item>
                    <Nav.Link href="#">BEST</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Men</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Women</Nav.Link>
                </Nav.Item>
            </Nav>
            <Container>
                <Row>
                  {
                    shoes.map((a, i)=> {
                      return( <Card shoes={shoes[i]} i={i} key={i}/> )
                    })
                  }
                </Row>
            </Container>
        </div>


    )
   
}

export default Product;