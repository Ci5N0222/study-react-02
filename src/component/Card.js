import { Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Card = (props) => {
    return(
      <Col sm={4}>
        <Link to={`/product/${props.shoes.id}`}>
          <img src={ "https://codingapple1.github.io/shop/shoes"+(props.i+1)+".jpg" } width="100%" />
        </Link>
        <h4>{ props.shoes.title }</h4>
        <p>{ props.shoes.content }</p>
        <p>Price : { props.shoes.price }</p>
      </Col>
    )
  }

  export default Card;