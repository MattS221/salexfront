import styled from 'styled-components'

export const Formulario = styled.div`
  width: 100%;
  height: 100%;

  /*===============
FORM
==================*/
  #form {
    width: 100%;
    height: 100%;

    background: #2e2e2e;
    padding: 80px 0;
    margin: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  #form form {
    width: 90%;
    max-width: 980px;
    background: white;

    padding: 40px;

    box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.15),
      0px 10px 20px -10px rgba(0, 0, 0, 0.1);
  }

  #form h3 {
    margin-bottom: 30px;
  }

  #form form label {
    display: none;
  }

  .form-group {
    display: flex;
    flex-direction: row;
  }

  .form-group label.right-inline {
    text-align: right;
    padding-right: 8px;
    padding-left: 10px;
    width: auto;
  }

  .form-group .input-control {
    flex: 1 1;
    display: block;
    margin: -4px 8px 10px;
    padding: 12px;
    font-size: 1rem;
  }

  .form-group .id-produto {
    display: block;
    margin: -4px 9px 10px;
    padding: 12px;
    font-size: 1rem;
  }

  .form-group img {
    padding-bottom: 15px;
  }

  .form-group p {
    font-size: 1rem;
    padding-top: 10px;
  }

  #form .button {
    margin: 20px 8px 10px;
    height: 50px;
    width: 150px;
    border: none;
    border-radius: 25px;
    background-color: green;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
  }

  #form .button + .limpar {
    background-color: #2e2e2e;
  }

  #form .button + .alterar {
    background-color: white;
  }

  #form .button + .excluir {
    background-color: red;
  }
`
