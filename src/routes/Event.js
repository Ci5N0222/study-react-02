import { Outlet } from "react-router-dom";

const Event = () => {
    return(
      <div>
        <h4>Event List</h4>
        <Outlet />
      </div>
    )
}

export default Event;