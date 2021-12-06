import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 2fr 1fr;

  background: rgb(31, 31, 31);
  background: linear-gradient(
    90deg,
    rgba(31, 31, 31, 1) 0%,
    rgba(50, 50, 56, 1) 4%,
    rgba(69, 69, 71, 1) 10%,
    rgba(25, 25, 25, 1) 100%
  );

  font-family: 'Poppins', sans-serif;
`

export const BoxImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  padding: 0 90px;

  h1 {
    color: #fff;
    font-size: 4.5rem;
    letter-spacing: 1rem;
  }

  p {
    margin-top: 50px;
    color: #fff;
    font-size: 1.2rem;
  }
`

export const BoxRegistration = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 30px;
  padding-left: 30px;
  flex-direction: column;
  border-radius: 30px 0px 0px 30px;

  background: rgb(193, 193, 193);
  background: linear-gradient(
    90deg,
    rgba(193, 193, 193, 1) 0%,
    rgba(252, 252, 252, 1) 4%,
    rgba(244, 244, 249, 1) 10%,
    rgba(255, 255, 255, 1) 100%
  );

  p {
    margin-top: 20px;
    font-size: 1rem;
  }

  h6 {
    margin-bottom: 20px;
    color: #262626;
    font-size: 1.5rem;
  }

  legend {
    font-size: 1.2rem;
    color: #919191;
    margin-top: 5px;
    font-weight: 800;
  }

  input {
    width: 25rem;
    margin-right: 15px;
    height: 1.5rem;
    margin-top: 20px;
    margin-bottom: 10px;
    border: none;
    background-color: rgba(255, 255, 255, 0);
    border-bottom: 2px solid #919191;
    opacity: 0.2;
  }

  .terms-row {
    display: flex;
    flex-direction: row;
    justify-content: cemter;
    align-items: center;
  }

  .terms-row input {
    width: 1rem;
    margin-right: 15px;
    margin-top: 20px;
    margin-bottom: 0px;
    opacity: 1;
  }

  .terms-row p {
    color: #919191;
  }

  .terms-row a {
    color: rgba(193, 193, 193, 1);
    text-decoration: none;
  }

  .terms-row a:hover {
    opacity: 0.8;
  }

  .buttons-row {
    width: 25rem;
    display: flex;
    justify-content: cemter;
    align-items: center;
  }

  .buttons-row button {
    margin-top: 30px;
    margin-right: 70px;
    height: 3rem;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    cursor: pointer;
  }

  .buttons-row button:hover {
    opacity: 0.8;
  }

  .login-button {
    background: transparent;
    color: #919191;
  }

  .registration-button {
    background: rgb(31, 31, 31);
    background: linear-gradient(
      90deg,
      rgba(31, 31, 31, 1) 0%,
      rgba(50, 50, 56, 1) 4%,
      rgba(69, 69, 71, 1) 10%,
      rgba(25, 25, 25, 1) 100%
    );

    width: 12rem;
    font-weight: 600;
    color: #fff;
  }
`
