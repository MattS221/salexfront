import styled from 'styled-components'

import Mockup from '../../assets/mockup.jpg'

export const Container = styled.div`
  width: 100vw;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  background-color: #2e2e2e;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`

export const Navbar = styled.div`
  header {
    width: 100vw;
    height: auto;

    max-width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 1rem;
    flex-direction: row;

    background-color: #2e2e2e;
  }

  img {
    height: 5rem;
  }

  input {
    width: 20rem;
    height: 2rem;
    margin-left: 2rem;
    border: none;
    border-radius: 8px;
    padding-left: 0.5rem;
    margin-right: 10rem;
    font-weight: 600;
  }

  input {
    background: rgba(255, 255, 255, 0.15);
  }

  input:focus,
  textarea:focus,
  select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    color: #fff;
    font-weight: 600;
    z-index: 10;
  }

  nav {
    display: flex;
  }

  a {
    width: 10rem;
    font-size: 1rem;
    color: #fff;
    text-decoration: none;
    transition: all 250ms linear 0s;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a:hover {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 20px;
  }

  @media(max-width: 768px) {
    nav {
      display: none;
    }

    .one, .two, .three {
      background-color #fff;
      height: 5px;
      width: 100%
      margin 6px auto;
      transition-duration: 0.3s;
    }

    .menu-toggle {
      width: 40px;
      height: 30px;
      margin-right: 40px;
    }

      .menu-section.on {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: #2e2e2e;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .menu-section.on nav {
        display: block;
    }

    .menu-section.on .menu-toggle {
        position: absolute;
        right: 30px;
        top: 15;
    }

    .menu-section.on .menu-toggle .one {
        transform: rotate(45deg) translate(-1px, 0px);
    }

    .menu-section.on .menu-toggle .two {
        opacity: 0;
    }

    .menu-section.on .menu-toggle .three {
        transform: rotate(-45deg) translate(8px, -9px);
    }

    .menu-section.on nav ul {
        text-align: center;
        display: block;
    }

    .menu-section.on nav ul a {
        transition-duration: 0.5s;
        font-size: 3rem;
        line-height: 4rem;
        display: block;
    }
  }
`

export const LandingForPage = styled.div`
  height: 85vh;
  width: 95vw;
  margin: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .blur {
    background-image: url(${Mockup});
    -webkit-filter: blur(3px);
    -moz-filter: blur(3px);
    -o-filter: blur(3px);
    -ms-filter: blur(3px);
    filter: blur(3px);

    height: 85vh;
    width: 95vw;
    margin: 10px;
  }

  main {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
  }

  main h2 {
    font-size: 5rem;
    color: #000;
    font-weight: 800;
    letter-spacing: 2rem;
    text-align: center;
  }

  main p {
    text-align: center;
    line-height: 20px;
    font-weight: 500;
  }

  main .button-mock {
    text-decoration: none;
    height: 5rem;
    width: 15rem;
    background-color: #2e2e2e;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    border-radius: 30px;
    font-weight: 600;
    transition: all 250ms linear 0s;
  }

  main .button-mock:hover {
    background-color: #666666;

`

export const AnunciosRecentes = styled.div`
  width: 100%;

  padding: 0 1rem;

  margin-top: 1rem;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  .mostrar {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
  }

  .mostrar p {
    color: #fff;
    font-size: 0.8rem;
    padding-right: 50px;
  }

  main {
    display: flex;
    flex-direction: row;

    max-width: 100%;

    height: auto;

    padding-bottom: 1.2rem;
  }

  h4 {
    color: #fff;
    margin-bottom: 1.8rem;
  }

  .cards {
    width: 100%;
    max-width: 1300px;
    margin: 0 1.2rem;
    height: 20rem;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;

    background-color: rgba(255, 255, 255, 0.15);
  }

  .text--medium {
    font-size: 1.2rem;
    line-height: 1.2rem;
    font-weight: 400;
    padding-bottom: 10px;
    color: #ecf0f1;
  }

  .text--medium p {
    color: #fff;
    font-size: 1.2rem;
  }

  .card {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: all 0.3s ease 0s;
  }

  .card:hover {
    transform: translateY(-7px);
  }

  .image {
    width: 100%;
    padding-top: 56.25%;
    overflow: hidden;
    position: relative;
  }

  .image img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .content {
    margin: 20px;
  }

  .title {
    margin-bottom: 2rem;
  }

  .info {
    display: flex;
    align-self: start;
    align-items: start;
    flex-direction: column;
    padding: 0 1.2rem;
  }

  .price {
    margin-left: auto;
    padding: 5px 20px;
    border-radius: 20px;
    background-color: #2e2e2e;
    filter: brightness(90%);
  }
`
