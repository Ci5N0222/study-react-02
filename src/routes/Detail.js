/* eslint-disable */

import React, { useEffect, useState } from "react";
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

    let [count, setCount] = useState(0);
    let [num, setNum] = useState('');

    useEffect(()=> {
        if(isNaN(num) == true){
            alert("숫자만 입력하세요.")
        }
    }, [num]);

    let {id} = useParams();
    let findId = props.shoes.find((x)=> x.id == id );

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={ "https://codingapple1.github.io/shop/shoes"+{id}+".jpg" } width="100%"/>
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{ findId.title }</h4>
                    <p>{ findId.content }</p>
                    <p>{ findId.price }원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}

export default Detail;