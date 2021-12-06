import React from 'react'
import Head from 'next/head'

import { MenuLateral } from '../styles/pages/Dashboard'

import FaroisCarro from '../assets/products/farois.png'

import User from '../assets/testes/user.png'
import {
  ResumoAnuncio,
  ContainerFarois
} from '../styles/pages/ProdutosAnunciados'

const Farois: React.FC = () => {
  return (
    <ContainerFarois>
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
      <ResumoAnuncio>
        <div className="info-prod">
          <h4>Faróis Ônix 2020</h4>
          <span>Publicado em 15/04/2021 às 15:00 - cód. 62153</span>
          <img src={FaroisCarro} width="300px" height="300px" />
          <p className="valor">R$ 350</p>
          <p>Faróis de Ônix modelo 2020, todos novos prontos para entrega</p>
        </div>
        <div className="info-vend">
          <p>Maria Marta</p>
          <p className="light">(11) 98745-1236</p>
          <button className="chat">Chat</button>
          <span>Usuário desde: Janeiro de 2021.</span>
          <span>Mais de 500 produtos vendidos!</span>
        </div>
      </ResumoAnuncio>
    </ContainerFarois>
  )
}

export default Farois
