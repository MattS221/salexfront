import React from 'react'
import Head from 'next/head'

import { Container, MenuLateral } from '../styles/pages/Dashboard'

import { MeusAnuncios } from '../styles/pages/Anuncios'

import Trash from '../assets/icons/trash.png'
import Writter from '../assets/icons/writer.png'

import User from '../assets/testes/user.png'

const Anuncios: React.FC = () => {
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
      <MeusAnuncios>
        <h4>Meus Anuncios</h4>
        <table className="tabela">
          <thead>
            <tr>
              <th scope="col">ID Produto</th>
              <th scope="col">Nome Anuncio</th>
              <th scope="col">Postagem</th>
              <th scope="col">Status</th>
              <th scope="col">Opções</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">98745</th>
              <td>Playstation 4</td>
              <td>06/05/2021</td>
              <td className="sold">Vendido</td>
              <td className="icons">
                <img src={Trash}></img>
                <img src={Writter}></img>
              </td>
            </tr>
            <tr>
              <th scope="row">78841</th>
              <td>Jogo de Panelas</td>
              <td>02/10/2021</td>
              <td className="dispo">Disponível</td>
              <td className="icons">
                <img src={Trash}></img>
                <img src={Writter}></img>
              </td>
            </tr>
            <tr>
              <th scope="row">78413</th>
              <td>Jersey Boston Celtics</td>
              <td>19/11/2021</td>
              <td className="dispo">Disponível</td>
              <td className="icons">
                <img src={Trash}></img>
                <img src={Writter}></img>
              </td>
            </tr>
            <tr>
              <th scope="row">61432</th>
              <td>Macbook Air</td>
              <td>05/11/2021</td>
              <td className="send">Enviado</td>
              <td className="icons">
                <img src={Trash}></img>
                <img src={Writter}></img>
              </td>
            </tr>
            <tr>
              <th scope="row">21332</th>
              <td>Adidas Predator 20.3</td>
              <td>10/08/2021</td>
              <td className="sold">Vendido</td>
              <td className="icons">
                <img src={Trash}></img>
                <img src={Writter}></img>
              </td>
            </tr>
          </tbody>
        </table>
      </MeusAnuncios>
    </Container>
  )
}

export default Anuncios
