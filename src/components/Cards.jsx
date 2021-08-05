import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Dê uma olhada nessas maravilhas em duas rodas!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src="images/a4.jpg" text="A rainha das BigTrails, conheça a máquina mais preparada para qualquer viagem!" label="BMW 1200GS" path='/services'></CardItem>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
