import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = ({ name, description, price, img }) => {
  return (
    <>
      <Card style={{ width: '22rem' }}>
        <Card.Img variant="top" src={img}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <div className="d-grid gap-2">
            <Button variant="primary">
              Ver
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default Product