import {Card, Button, Form, Row, Col} from 'react-bootstrap';

function ProductCard(props){
    // props.product is the product being sold 
    const product = props.product;
    return(
        <Card>
            <Card.Img variant="top" src="myshop\public\image1.png" />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button variant="primary">Add To Cart</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard;