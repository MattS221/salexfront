import React from 'react'
import Head from 'next/head'

import { Container, BoxRegistration, BoxImage } from '../styles/pages/Register'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Register: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Sale Ex</title>
      </Head>
      <BoxImage>
        <h1>SALE EX</h1>
        <p>
          Registre-se para poder cadastrar seus produtos e acessar os anúncios
          de outros clientes.
        </p>
      </BoxImage>
      <BoxRegistration>
        <h6>Cadastrar Usuário</h6>
        <legend>Nome</legend>
        <input type="text" name="nome"></input>
        <legend>E-mail</legend>
        <input type="email" name="email"></input>
        <legend>Telefone</legend>
        <input type="text" name="telefone"></input>
        <legend>Senha</legend>
        <input type="password" name="senha"></input>
        <legend>Confirmar Senha</legend>
        <input type="password" name="confirm"></input>
        <div className="terms-row">
          <input type="checkbox" />
          <p>
            Concordo com os <a href="#">Termos de uso</a>
          </p>
        </div>
        <div className="buttons-row">
          <button className="registration-button">Cadastrar</button>
          <button className="login-button">Login →</button>
        </div>
      </BoxRegistration>
    </Container>
  )
}

export default Register
