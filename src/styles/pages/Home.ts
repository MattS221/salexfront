import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

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
  width: 100vw;
  height: 3rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  flex-direction: row;

  img {
    margin-right: 20px;
  }

  h3 {
    font-size: 15px;
    color: ${props => props.theme.colors.primary};
  }

  input {
    width: 15rem;
    height: 2rem;
    margin-left: 40px;
    border: none;
    border-radius: 8px;
    padding-left: 10px;
    margin-right: 30px;
    font-weight: 600;
  }

  input:focus,
  textarea:focus,
  select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    color: ${props => props.theme.colors.primary};
    font-weight: 600;
  }
`
