import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Dê uma olhada em nosso conteúdo!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src="images/a4.jpg" text="A rainha das BigTrails, conheça a máquina mais preparada para qualquer viagem!" label="BMW 1200GS" path='/services'></CardItem>
                        <CardItem src="images/a1.jpg" text="Off Road ou On Road? Qual moto tem mais dominio nos terrenos?" label="Africa Twin 1100" path='/services'></CardItem>
                    </ul>
                    <ul className="cards__items">
                        <CardItem src="images/a8.jpg" text="Moto é terapia! Veja os beneficios de viajar de moto" label="KTM 1150 Adventure" path='/services'></CardItem>
                        <CardItem src="images/a7.jpg" text="Quais são os acessórios indispensáveis na hora de viajar?" label="BMW F800 GS" path='/services'></CardItem>
                        <CardItem src="images/a2.jpg" text="Sinta a adrenalina de enfrentar diferentes terrenos!" label="KTM Adventure" path='/services'></CardItem>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
