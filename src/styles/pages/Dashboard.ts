import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 3fr;

  background: rgb(31, 31, 31);
  background: linear-gradient(
    90deg,
    rgba(31, 31, 31, 1) 0%,
    rgba(50, 50, 56, 1) 4%,
    rgba(69, 69, 71, 1) 10%,
    rgba(25, 25, 25, 1) 100%
  );
`

export const MenuLateral = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  background: rgba(25, 25, 25, 1);

  .profile {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .profile img {
    display: block;
    margin-left: auto;
    margin-right: auto;

    margin-top: 50px;
    margin-bottom: 20px;

    border 2px solid green;
    border-radius: 50px;
  }

  .profile a {
    text-align: left;
    padding-left: 20px;
    text-decoration: none;
    font-size: 1.2rem;
    padding-top: 30px;
    padding-bottom: 30px;

    width: 100%;

    color: #fff;
  }

  .profile a:hover {
    opacity: 0.8;
    background-color: rgba(255, 255, 255, 0.15);
  }

  .user {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }

  .user p {
    color: #fff;
  }

  .logout {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .logout a {
    text-decoration: none;
    padding-bottom: 30px;
    color: #fff;
  }
`

export const DashboardMenu = styled.div`
  width: 100%;
  height: 100%;

  h4 {
    padding-left: 30px;
    margin-top: 20px;
  }

  .input-dash {
    width: 80%;
    margin-left: 60px;
    margin-top: 30px;
    height: 50px;
    font-size: 1.2rem;
    padding: 0 10px;
    background: rgba(255, 255, 255, 0.15);
    border: none;
  }
`

export const Anuncios = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;

  main {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  /*===============
  CARDS
  ==================*/

  .cards {
    width: 300px;
    margin: auto;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 10px;
  }

  .text--medium {
    font-size: 1.2rem;
    line-height: 2.6rem;
    font-weight: 400;
    color: #ecf0f1;
  }

  .text--medium a i {
    color: #fff;
    font-size: 2rem;
  }

  .card {
    display: flex;

    height: 300px;
    width: 250px;
    flex-direction: column;
    background-color: #2e2e2e;
    cursor: pointer;
    transition: all 0.3s ease 0s;
  }

  .card:hover {
    transform: translateY(-7px);
  }

  .image {
    width: 100%;
    padding-top: 56.25%; /* 16:9 */

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
    margin-bottom: 20px;
  }

  .info {
    display: flex;
    align-self: end;
    align-items: center;
  }

  .price {
    margin-left: auto;
    padding: 5px 20px;
    border-radius: 20px;
    background-color: #2e2e2e;
    filter: brightness(90%);
  }

  /*===============
  CARD VALORES
  ==================*/

  .cards-valores {
    width: 90%;
    max-width: 90px;
    margin: auto;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 100px;
  }

  .text--medium-valores {
    font-size: 2rem;
    line-height: 2.6rem;
    font-weight: 600;
    color: #ecf0f1;
  }

  .text--medium-valores a i {
    color: #fff;
    font-size: 2rem;
  }

  .card-valores {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #2e2e2e;
    cursor: pointer;
    transition: all 0.3s ease 0s;
  }

  .card-valores:hover {
    transform: translateY(-7px);
  }

  .image-valores {
    width: 100%;
    padding-top: 59.25%; /* 16:9 */
    overflow: hidden;
    position: relative;
  }

  .image-valores img {
    width: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .content-valores {
    margin: 20px;
  }

  .title-valores {
    margin-bottom: 20px;
  }

  .info {
    display: flex;
    align-self: end;
    align-items: center;
  }

  .price {
    margin-left: auto;
    padding: 5px 20px;
    border-radius: 20px;
    background-color: #2e2e2e;
    filter: brightness(90%);
  }
`
