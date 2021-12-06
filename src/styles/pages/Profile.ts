import styled from 'styled-components'

export const FormularioProfile = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .form-row {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 50px;
  }

  .form-row p {
    margin-right: 20px;
  }

  .form-row input {
    width: 400px;
    border: none;
    border-bottom: 3px black solid;
    background-color: transparent;
    font-size: 1.2rem;
    padding: 10px;
  }

  .row-buttons {
    margin-top: 50px;
  }

  .row-buttons button {
    height: 50px;
    width: 150px;
    margin-right: 50px;
    font-size: 1.2rem;
    font-weight: 600;
    border: none;
    border-radius: 25px;
  }

  .img-alt {
    display: block;
    margin-left: auto;
    margin-right: auto;

    margin-top: 50px;
    margin-bottom: 20px;

    border 2px solid green;
    border-radius: 60px;
  }
`
