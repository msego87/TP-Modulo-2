import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { getProduct } from '../products';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {

    const { productId } = useParams();
    const product = getProduct(Number(productId));

    return (
        <>
            <Container>
                <Row className="justify-content-center mt-4">
                    <Card style={{ width: '30rem' }}>
                        <Card.Img variant="top" src={product.img} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                            <div className="d-grid gap-2">
                                <Button variant="primary">
                                    Comprar
                                </Button>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <h5>${product.price}</h5>
                        </Card.Footer>
                    </Card>
                </Row>
            </Container>
        </>
    )
}

export default ProductDetail