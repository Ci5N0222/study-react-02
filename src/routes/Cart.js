import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addCount, deleteItem } from './../store.js';
import { memo, useState } from 'react';

const Cart = () => {

  let state = useSelector((state)=> state)
  let dispatch = useDispatch();
  let [count, setCount] = useState(0);

  return(
    <div>
      <h4>Cart List</h4>

      { state.user.name }({ state.user.age })'s Cart List
      {/* <div>
        <Button onClick={()=>{
          dispatch(changAge(1));
        }}>age update button</Button>
      </div> */}
      <Table style={{margin:"15px"}}>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>추가</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {
            state.cart.map((a, i) =>
              <tr key={ i }>
                <td>{ state.cart[i].id }</td>
                <td>{ state.cart[i].name }</td>
                <td>{ state.cart[i].count }</td>
                <td>
                  <Button onClick={()=>{
                    dispatch(addCount(state.cart[i].id));
                  }}>+</Button>
                </td>
                <td>
                  <Button onClick={()=>{
                    dispatch(deleteItem(state.cart[i].id));
                  }}>-</Button>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table> 
    </div>
  )
}

export default Cart;