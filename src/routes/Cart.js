import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changName, changAge } from './../store.js';

const Cart = () => {

  let state = useSelector((state)=> state)
  let dispatch = useDispatch();

  return(
    <div>
      <h4>Cart List</h4>

      { state.user.name }({ state.user.age })'s Cart List
      <Button onClick={()=>{
        dispatch(changAge());
      }}>버튼</Button>

      <Table style={{margin:"15px"}}>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
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
                    dispatch(changName())
                  }}>
                    변경하기
                  </Button>
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