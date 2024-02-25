/* eslint-disable */

import React, { useContext, useEffect, useState } from "react";
import {Nav, Container, Row} from 'react-bootstrap';
import Card from './../component/Card';

// data
import { productData, bestProduct } from './../Test-Data.js';

const Product = (props) => {

    let [shoes, setShoes] = useState(productData);
    let [status, setStatus] = useState('All');

    useEffect(()=>{
    }, []);

    return(
        <div>
            <Nav className="justify-content-center" activeKey="/product">
                <Nav.Item>
                    <Nav.Link onClick={()=>{
                        setStatus('All');
                    }}>All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{
                        setStatus('BEST');
                    }}>Best</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{
                        setStatus('Men');
                    }}>Men</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{
                        setStatus('Women');
                    }}>Women</Nav.Link>
                </Nav.Item>
            </Nav>
            <Container>
                <p><h2>{ status } Product!</h2></p>
                <Row>
                    {
                        productStatus({status, shoes, setShoes})
                    }
                    {
                        shoes.map((a, i)=> {
                            return( 
                                <Card shoes={shoes[i]} i={i} key={i}/> 
                            )
                        })
                    }
                </Row>
            </Container>
        </div>

    )
}

const productStatus = ({status, shoes, setShoes}) => {

    let copy = [];
    let arr = [];

    switch(status){
        case 'Men':
        case 'Women' :
            copy = [...shoes];
            for (const id of copy) {
                if(id.class == status){
                    arr.push(id)
                }
            }
            setShoes(arr);
            break;
        default :
            break;
    }

}


export default Product;