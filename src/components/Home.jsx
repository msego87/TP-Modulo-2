import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { getProducts } from '../products';
import Product from './Product';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Home = () => {

    /* const [products, setProducts] = useState([]);
    useEffect(() => {
      
        fetch("https://api.mockfly.dev/mocks/07ec7444-6815-4c32-a469-084cf1dc0c06/allproducts")
        .then((res) => res.json())
        .then((data) => setProducts(data))

    }, []) */
    let products = getProducts();
    
  return (
    <>
        <section className='container mt-4'>
            
            <Row xs={1} md={3} className="g-4">
            {
                products.map((product) => (
                <Col key={product.id}>
                    <NavLink 
                        key={product.id}
                        to={`/product/${product.id}`}>
                        <Product key={product.id} {...product} />
                    </NavLink>
                </Col>  
                ))
            }
            </Row>
        </section>
    </>
  )
}

export default Home