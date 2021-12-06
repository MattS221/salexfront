import React from 'react'
import Head from 'next/head'

import { Container, MenuLateral } from '../styles/pages/Dashboard'

import { FormularioProfile } from '../styles/pages/Profile'

import User from '../assets/testes/user.png'

const Profile: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Sale EX</title>
      </Head>
      <MenuLateral>
        <div className="profile">
          <div className="user">
            <img src={User} alt="" width="100" height="100"></img>
            <p>Josúe Lacerda</p>
          </div>
          <a href="#">Meus anúncios</a>
          <a href="#">Configurações da conta</a>
          <a href="#">Cadastrar produtos</a>
        </div>
        <div className="logout">
          <a href="#">Sair →</a>
        </div>
      </MenuLateral>
      <FormularioProfile>
        <div className="img-alt">
          <img src={User} width="100" height="100" />
        </div>
        <section>
          <div className="form-row">
            <p>Nome: </p>
            <input type="text" placeholder="Josúe Lacerda" />
          </div>
          <div className="form-row">
            <p>Email: </p>
            <input type="text" placeholder="josuelac@gmail.com" />
          </div>
          <div className="form-row">
            <p>Telefone: </p>
            <input type="text" placeholder="(11) 945136-7465" />
          </div>
        </section>
        <div className="row-buttons">
          <button>Alterar</button>
          <button>Voltar</button>
        </div>
      </FormularioProfile>
    </Container>
  )
}

export default Profile
