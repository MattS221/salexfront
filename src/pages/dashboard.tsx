import React from 'react'
import Head from 'next/head'

import {
  Container,
  MenuLateral,
  DashboardMenu
} from '../styles/pages/Dashboard'

import { AnunciosRecentes } from '../styles/pages/Home'

import User from '../assets/testes/user.png'

import botina from '../assets/products/botina.jpg'
import faroisonix from '../assets/products/farois.png'
import cachorro from '../assets/products/pastor alemão.jpg'

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Sale EX</title>
      </Head>
      <MenuLateral>
        <div className="profile">
          <div className="user">
            <img src={User} alt="" width="100" height="100"></img>
            <p>Matheus Silva</p>
          </div>
          <a href="#">Meus anúncios</a>
          <a href="#">Configurações da conta</a>
          <a href="#">Cadastrar produtos</a>
        </div>
        <div className="logout">
          <a href="#">Sair →</a>
        </div>
      </MenuLateral>
      <DashboardMenu>
        <input className="input-dash" placeholder="Procure um produto " />
        <AnunciosRecentes>
          <h4>Anúncios Recentes</h4>
          <main>
            <section className="cards">
              <div className="card">
                <div className="image">
                  <img src={botina} alt="teste"></img>
                </div>
                <div className="content">
                  <p className="title text--medium">Botina Cartom</p>
                </div>
                <div className="info">
                  <p className="text--medium">R$ 70</p>
                  <p className="text--medium">
                    Anunciante: <i>João Souza</i>
                  </p>
                </div>
              </div>
            </section>
            <section className="cards">
              <div className="card">
                <div className="image">
                  <img src={faroisonix} alt="teste"></img>
                </div>
                <div className="content">
                  <p className="title text--medium">Faróis de ônix</p>
                </div>
                <div className="info">
                  <p className="text--medium">R$ 350</p>
                  <p className="text--medium">
                    Anunciante: <i>Maria Marta</i>
                  </p>
                </div>
              </div>
            </section>
            <section className="cards">
              <div className="card">
                <div className="image">
                  <img src={cachorro} alt="teste"></img>
                </div>
                <div className="content">
                  <p className="title text--medium">Pastor Alemão Filhote</p>
                </div>
                <div className="info">
                  <p className="text--medium">R$ 3.250</p>
                  <p className="text--medium">
                    Anunciante: <i>Carlos Silva</i>
                  </p>
                </div>
              </div>
            </section>
          </main>
          <div className="mostrar">
            <p>Mostrar mais</p>
          </div>
        </AnunciosRecentes>
      </DashboardMenu>
    </Container>
  )
}

export default Dashboard
