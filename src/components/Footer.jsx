import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div class="footer-container">
                <section className="footer-subscription">
                    <p className="footer-subscription-heading">
                        Junte-se ao nosso Newsletter para receber nossos melhores conteúdos!
                    </p>
                    <p className="footer-subscription-text">
                        Inscreva-se quando quiser!
                    </p>
                    <div className="input-areas">
                        <form>
                            <input type="email" name="email" placeholder="Seu E-mail" className="footer-input" />
                            <Button buttonStyle="btn--outline">Subscribe</Button>
                        </form>
                    </div>
                </section>
                <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Termos de serviço</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contate-nos</h2>
            <Link to='/'>Contato</Link>
            <Link to='/'>Suporte</Link>
            <Link to='/'>Consultoria</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Envie seu video</Link>
            <Link to='/'>Embaixadores</Link>
            <Link to='/'>Agência</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              ADV
              <i class='fas fa-motorcycle' />
            </Link>
          </div>
          <small class='website-rights'>ADV © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
            </div>
        )
    }
}


