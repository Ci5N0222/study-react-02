/* eslint-disable */

import React, { useContext, useEffect, useState } from "react";
import { Button, Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux"; 

import { addItem } from "./../store.js";

const Detail = (props) => {

    let dispatch = useDispatch();
    let [tab, setTab] = useState(0);
    let {id} = useParams();
    let findId = props.shoes.find((x)=> x.id == id );
    
    useEffect(()=>{
        if(!localStorage.getItem('watched')){
            localStorage.setItem('watched', JSON.stringify([]));
        }
        let watched = JSON.parse(localStorage.getItem('watched'));
        watched.push(findId.id);
        watched = new Set(watched);
        watched = Array.from(watched);
        localStorage.setItem('watched', JSON.stringify(watched));
    }, [])

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={ "https://codingapple1.github.io/shop/shoes"+ (findId.id+1) +".jpg" } width="100%"/>
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{ findId.title }</h4>
                    <p>{ findId.content }</p>
                    <p>{ findId.price }원</p>
                    <Button onClick={()=>{
                        dispatch(addItem({id: findId.id, name: findId.title, count : 1},))
                    }}>주문하기</Button>
                </div>
            </div>

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={()=>{ setTab(0) }} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{ setTab(1) }} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{ setTab(2) }} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
        
            <TabContent shoes={ findId } tab={ tab } />

        </div>
    )
   
}

const TabContent = ({tab}) => {
    
    // if(tab == 0){
    //     return (<div>내용0</div>)
    // } else if(tab == 1){
    //     return (<div>내용1</div>)
    // } else if(tab == 2) {
    //     return (<div>내용2</div>)
    // }

    let [fade, setFade] = useState('');

    useEffect(()=> {
        let timer = setTimeout(()=> {
            setFade("end");
        }, 100)
        return () => {
            clearTimeout(timer);
            setFade("");
        }
    }, [tab])

    return(
        <div className={"start " + fade}>
            {
               [ <div>내용0</div>, <div>내용1</div>, <div>내용2</div> ][tab]
            }
        </div>
    )
}


export default Detail;