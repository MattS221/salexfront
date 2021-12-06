import styled from 'styled-components'

export const ContainerFarois = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 3fr;

  background: rgb(236, 236, 236);
  background: radial-gradient(
    circle,
    rgba(236, 236, 236, 1) 0%,
    rgba(222, 222, 222, 1) 4%,
    rgba(255, 255, 255, 1) 10%,
    rgba(255, 255, 255, 1) 100%
  );
`

export const ResumoAnuncio = styled.div`
  width: 90%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  padding: 0 30px;

  .info-prod {
    display: flex;
    flex-direction: column;

    height: 90%;
    background-color: white;
    padding: 30px 0 0 20px;

    margin-right: 20px;
  }

  .info-prod span {
    font-size: 0.8rem;
    padding-top: 30px;
    padding-bottom: 30px;
    color: #9f9f9f;
  }

  .info-prod p {
    font-size: 1.2rem;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .info-prod .valor {
    font-size: 1.9rem;
    padding-top: 50px;
    font-weight: 600;
  }

  .info-vend .button-group {
    width: 100%;
    margin-top: 50px;
  }

  .info-vend .button-group .button {
    height: 50px;
    width: 90px;
    border: 3px solid #d2a7f0;
    color: #d2a7f0;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 25px;
    background-color: transparent;
  }

  .info-vend {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    height: 50%;
    width: 50%;
    background-color: white;
    margin-top: 20px;
    background-color: #d0d0d0;

    border-radius: 30px;
  }

  .info-vend p {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .info-vend span {
    font-size: 0.8rem;
  }

  .info-vend .chat {
    background-color: orange;
    height: 50px;
    width: 70%;
    font-size: 1.2rem;
    border-radius: 30px;
    border: 3px solid orange;
    color: white;
  }
`
