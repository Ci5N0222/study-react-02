/* eslint-disable */

import React, { useContext, useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";

// 옛날 방식
// class Detail2 extends React.Component {
//     componentDidMount() {
//         // 컴포넌트 mount 시 여기 코드 실행
//     }
//     componentDidUpdate() {
//         // 컴포넌트 update 시 여기 코드 실행
//     }
//     componentWillUnmount() {
//         // 컴포넌트 unmount 시 여기 코드 실행
//     }
// }

/**
 * 컴포넌트의 Lifecycle (컴포넌트의 인생주기를 비유)
 * 페이지에 추가 : mount
 * 업데이트 : update
 * 페이지 제거 : unmount
 */ 

const Detail = (props) => {

    let [tab, setTab] = useState(0);

    let {id} = useParams();
    let findId = props.shoes.find((x)=> x.id == id );

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
                    <button className="btn btn-danger">주문하기</button>
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