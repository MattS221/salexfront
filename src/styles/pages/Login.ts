import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h3 {
    color: ${props => props.theme.colors.primary};
    font-size: 40px;
  }

  p {
    color: ${props => props.theme.colors.text};
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
    color: ${props => props.theme.colors.primary};
    font-weight: 800;
  }

  input:focus,
  textarea:focus,
  select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    color: ${props => props.theme.colors.primary};
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
    background: ${props => props.theme.colors.primary};
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
    transiition: opacity 6ms;
  }

  button:hover {
    opacity: 0.8;
    cursor: pointer;
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
