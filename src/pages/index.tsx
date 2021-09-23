import React from 'react'
import Head from 'next/head'

import { Container, Navbar } from '../styles/pages/Home'

import LogoSVG from '../assets/OIM.png'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>OIW</title>
      </Head>

      <Navbar>
        <img src={LogoSVG} height="25px" />
        <h3>OIM</h3>
        <input type="text" id="pesquisa" name="pesquisa" placeholder="Buscar" />
        <a href="#">Meus Anúncios</a>
        <a href="#">Chat</a>
        <a href="/login">Entrar</a>
      </Navbar>
      <p>MALANDRO VAI FICAR BONZÃO</p>
    </Container>
  )
}

export default Home
