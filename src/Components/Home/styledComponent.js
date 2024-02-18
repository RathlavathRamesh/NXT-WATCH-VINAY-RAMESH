import styled from "styled-components";

export const ChangeButton = styled.button`
  background-color: blue;
  height: 6vh;
  margin-top: 8rm;
  padding: 5px;
  width: 90%;
  border-radius: 10px;
  color: white;
`;

export const BackgroundBanner = styled.div`
  height: 60vh;
  background-image: url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
  background-size: cover;
  width: 100%;
  padding: 5vh;

  @media (max-width: 640px) {
    height: 40vh;
    padding: 3vh; /* Adjust padding for smaller screens */
  }

  @media (min-width: 641px) and (max-width: 1024px) {
    height: 50vh;
    padding: 4vh; /* Adjust padding for medium screens */
  }

  @media (min-width: 1025px) {
    height: 60vh;
  }
`;

export const GetitNowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2rm;
  height: 4vh;
  padding: 15px;
  margin-top: 2px;
`;

export const LogoImage = styled.img`
  height: 6vh;
  margin-top: 3vh;
  width: 18vw;
  margin-bottom: 5vh;

  @media (max-width: 768px) {
    width: 50%;
  }
`;

export const Heading = styled.h1`
  font-size: 25px;
  font-weight: 600;
`;

export const PopupContainer = styled.div`

  position: fixed;

  top: 0;

  left: 0;

  width: 100%;

  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);

  display: flex;

  justify-content: center;

  align-items: center;

  visibility: hidden;

`;


export const PopupBox = styled.div`

  background-color: white;

  padding: 2rem;

  border-radius: 5px;

  display: flex;

  flex-direction: column;

  align-items: center;

  position: relative;


  &::before {

    content: '';

    position: absolute;

    top: -1rem;

    right: 1rem;

    width: 1.5rem;

    height: 1.5rem;

    background-color: white;

    border-left: 2px solid #ccc;

    border-bottom: 2px solid #ccc;

    transform: rotate(45deg);

  }

`;


export const PopupText = styled.p`

  font-size: 1.2rem;

  margin-bottom: 1rem;

`;


export const PopupButton = styled.button`

  background-color: #f2f2f2;

  padding: 0.5rem 1rem;

  border-radius: 5px;

  border: none;

  font-size: 1.2rem;

  cursor: pointer;

`;