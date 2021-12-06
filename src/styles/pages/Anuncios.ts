import styled from 'styled-components'

export const MeusAnuncios = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h4 {
    width: 100%;
    text-aling: left;

    padding: 60px;

    color: white;
  }

  .tabela {
    width: 90%;
    height: auto;

    background-color: #b2b2b2;
  }

  .tabela thead {
    background-color: white;
  }

  .tabela th {
    height: 60px;
  }

  .sold {
    color: green;
    font-weight: 600;
  }

  .send {
    color: yellow;
    font-weight: 600;
  }

  .dispo {
    color: blue;
    font-weight: 600;
  }

  .icons img {
    padding: 10px;
  }
`
