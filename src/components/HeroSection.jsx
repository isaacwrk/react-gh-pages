import React from 'react'
import {Button} from './Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="videos/video-2.mp4" autoPlay loop muted/>
            <h1>A AVENTURA TE ESPERA</h1>
            <p>Conheça o mundo das BigTrails</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle='btn--outline' buttonSize="btn--large">VAMOS LÁ!</Button>
                <Button className="btns" buttonStyle='btn--primary' buttonSize="btn--large"><i className="far fa-play-circle"/>ASSISTA AGORA!</Button>
            </div>
        </div>
    )
}

export default HeroSection
