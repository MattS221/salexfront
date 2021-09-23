import React from 'react'
import Head from 'next/head'

import {
  Container,
  ButtonsContainer,
  ButtonsSignUp
} from '../styles/pages/Login'

import LogoSVG from '../assets/OIM.png'

const Login: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>OIW</title>
      </Head>
      <img src={LogoSVG} height="100px" />
      <h3>Entre com sua conta</h3>
      <p>Digite seu e-mail e senha para acessar o site</p>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="example@gmail.com"
      />
      <input type="password" id="senha" name="senha" placeholder="example32" />

      <ButtonsContainer>
        <a href="/" className="button">
          Voltar
        </a>
        <button className="button">Entrar</button>
      </ButtonsContainer>

      <ButtonsSignUp>
        <button id="google">Google</button>
        <button id="facebook">Facebook</button>
      </ButtonsSignUp>
    </Container>
  )
}

export default Login
