import React from 'react'
import Head from 'next/head'

import { Container, LandingForPage, Navbar } from '../styles/pages/Home'

import LogoSVG from '../assets/logoSALEEX.png'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Sale Ex</title>
      </Head>

      <Navbar>
        <header>
          <img src={LogoSVG} height="25px" />
          <input
            type="text"
            id="pesquisa"
            name="pesquisa"
            placeholder="Buscar"
          />
          <div className="menu-section">
            <div className="menu-toggle">
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
            </div>
            <nav>
              <a href="/">Inicio</a>
              <a href="#">Meus Anúncios</a>
              <a href="#">Chat</a>
              <a href="/login">Entrar</a>
            </nav>
          </div>
        </header>
      </Navbar>

      <LandingForPage>
        <section className="blur"></section>
        <main>
          <h2>Sale EX</h2>
          <p>Um dos maiores sites de vendas de usados do Brasil,</p>
          <p>se cadastre para poder comprar ou anunciar seus produtos.</p>
          <a className="button-mock" href="/register">
            Registrar-se
          </a>
        </main>
      </LandingForPage>
    </Container>
  )
}

export default Home
