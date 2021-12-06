import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgb(31, 31, 31);
  background: linear-gradient(
    90deg,
    rgba(31, 31, 31, 1) 0%,
    rgba(50, 50, 56, 1) 4%,
    rgba(69, 69, 71, 1) 10%,
    rgba(25, 25, 25, 1) 100%
  );

  h3 {
    color: #fff;
    font-size: 40px;
  }

  p {
    color: #fff;
    font-size: 15px;
    font-weight: 800;
    margin-top: 10px;
  }

  img {
    margin-bottom: 20px;
  }

  input {
    width: 25rem;
    height: 3rem;

    margin-top: 15px;
    padding-left: 10px;
    border: none;
    border-radius: 10px;
    color: ${props => props.theme.colors.text};
    font-weight: 800;
  }

  input:focus,
  textarea:focus,
  select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    color: ${props => props.theme.colors.text};
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;

  margin-top: 20px;

  .button {
    width: 10rem;
    height: 2.5rem;
    border: none;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.15);
    color: #fff;
    font-weight: 600;
    font-family: Roboto;
    transition: opacity 6ms;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 1rem;
  }

  .button + .button {
    margin-left: 80px;
  }

  .button:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`

export const ButtonsSignUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 20px;

  button {
    width: 25rem;
    margin-top: 10px;
    height: 2.5rem;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    font-family: Roboto;
    transition: all 250ms linear 0s;
  }

  button:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  #registro {
    background: #fff;
    color: #000;
  }

  #google {
    background: #db4437;
    color: #fff;
  }

  #facebook {
    background: #4267b2;
    color: #fff;
  }
`
