/* eslint-disable */

import React, { useContext, useEffect, useState } from "react";
import {Nav} from 'react-bootstrap';

import Card from 'App.js'

const Product = (props) => {

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
        </div>


    )
   
}

export default Product;