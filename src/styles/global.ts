import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    out-line: 0;
  }

  html {
    font-size: 62.5%;
  }

  html,
  body {
    height: 100vh;
    text-rendering: optimizelegibility;
    -webkit-text-smoothing: antialiased;
    font: 400 16px Roboto, sans-serif;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0.15);
  }

  ::-webkit-scrollbar {
      height: 3px;
      width: 3px;
      background: rgba(255, 255, 255, 0.15);
  }

  ::-webkit-scrollbar-thumb {
      background: #fff;
  }

  body {
    font-size: 1.6rem;
  }
`
