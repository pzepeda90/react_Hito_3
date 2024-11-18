import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Header } from './Header';
import CardPizza from './CardPizza';
import { pizzas } from '../js/pizzas';

export const Home = () => {
    const cardsData = [
        {
            desc: pizzas[0].desc,
            id: pizzas[0].id,
            img: pizzas[0].img,
            ingredients: pizzas[0].ingredients,
            name: pizzas[0].name,
            price: pizzas[0].price
        },
        {
            desc: pizzas[1].desc,
            id: pizzas[1].id,
            img: pizzas[1].img,
            ingredients: pizzas[1].ingredients,
            name: pizzas[1].name,
            price: pizzas[1].price
        },
        {
            desc: pizzas[2].desc,
            id: pizzas[2].id,
            img: pizzas[2].img,
            ingredients: pizzas[2].ingredients,
            name: pizzas[2].name,
            price: pizzas[2].price
        },         
        {
            desc: pizzas[3].desc,
            id: pizzas[3].id,
            img: pizzas[3].img,
            ingredients: pizzas[3].ingredients,
            name: pizzas[3].name,
            price: pizzas[3].price
        },
        {
            desc: pizzas[4].desc,
            id: pizzas[4].id,
            img: pizzas[4].img,
            ingredients: pizzas[4].ingredients,
            name: pizzas[4].name,
            price: pizzas[4].price
        }, 
        {
            desc: pizzas[5].desc,
            id: pizzas[5].id,
            img: pizzas[5].img,
            ingredients: pizzas[5].ingredients,
            name: pizzas[5].name,
            price: pizzas[5].price
        }

    ];
    
    return (
        <>
            <Header />
            <Container className="my-5">
                <Row className="justify-content-center g-4">
                    {cardsData.map(card => (
                        <Col 
                            key={card.id} 
                            xs={12} 
                            md={6} 
                            lg={4}
                            className="d-flex justify-content-center"
                        >
                            <div className="w-100" style={{ maxWidth: '350px' }}>
                                <CardPizza 
                                    desc={card.desc}
                                    id={card.id}
                                    img={card.img}
                                    ingredients={card.ingredients}
                                    name={card.name}
                                    price={card.price}
                                />
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}
