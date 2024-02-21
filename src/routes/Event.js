import { Outlet } from "react-router-dom";
import { Table, Button } from 'react-bootstrap';

const Event = () => {
    return(
      <div>
        <h4>Event List</h4>
          <Table style={{margin:"15px"}}>
          <thead>
            <tr>
              <th>.NO</th>
              <th>이벤트명</th>
              <th>작성자</th>
              <th>날짜</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>첫 이벤트</td>
              <td>운영자</td>
              <td>2024.02.01</td>
            </tr>
          </tbody>
        </Table> 
        <Outlet />
      </div>
    )
}

export default Event;