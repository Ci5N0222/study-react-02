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
    let [alert, setAlert] = useState(true);
    let [num, setNum] = useState('');

    useEffect(()=> {

        let timer = setTimeout(()=>{
            setAlert(false)
        }, 2000);

        // clean up function
        // mount 시 실행 안됨, ummount시 실행
        return () => {
            // 기존 타이머 제거
            clearTimeout(timer);

            // 기존 데이터 요청 제거
        }
    }, []);

    let {id} = useParams();
    let findId = props.shoes.find((x)=> x.id == id );

    return(
        <div className="container">
            {
                alert == true?
                <div className="alert alert-warning">
                    2초이내 구매시 할인
                </div>
                : null
            }
            { count }
            <button onClick={()=>{ setCount(count+1) }}>버튼</button>
            <div className="row">
                <div className="col-md-6">
                    <img src={ findId.img } width="100%"/>
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