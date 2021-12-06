import React from 'react'
import Head from 'next/head'

import { Container, MenuLateral } from '../styles/pages/Dashboard'

import { Formulario } from '../styles/pages/Produtos'

import User from '../assets/testes/user.png'

const Produtos: React.FC = () => {
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
      <Formulario>
        <section id="form">
          <form>
            <h3>Cadastrar produto</h3>
            <div className="form-group">
              <input
                className="input-control"
                id="nome"
                placeholder="Nome do produto"
              />

              <input
                type="text"
                id="Quantidade"
                className="input-control"
                placeholder="Quantidade"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="input-control"
                id="mensagem"
                placeholder="Valor"
              />
              <p>Imagem do produto:</p>
              <input
                type="file"
                id="Envie uma foto"
                className="input-control"
                placeholder="Quantidade"
              />
            </div>

            <div className="form-group">
              <select className="input-control" placeholder="Assunto">
                <option>Escolha uma tag</option>
                <option>Carros</option>
                <option>Jogos</option>
                <option>Roupas</option>
              </select>
            </div>

            <div className="form-group">
              <textarea
                className="input-control"
                id="mensagem"
                placeholder="Descrição breve"
              ></textarea>
            </div>

            <div className="form-group">
              <button type="submit" className="button">
                Cadastrar
              </button>
              <button type="submit" className="button limpar">
                Limpar
              </button>
            </div>
          </form>
        </section>
      </Formulario>
    </Container>
  )
}

export default Produtos
