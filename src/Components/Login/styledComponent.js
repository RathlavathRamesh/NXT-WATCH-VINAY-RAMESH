import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  background-color: ${props => (props.theme===true ? "#424242" : "white")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const MainHeading=styled.h1`
    color:white;
    font-weight:bold;
    text-align:center;
`
export const LoginCard=styled.div`
   height:50vh;
   width:40vw;
   background-color:black;
   border-radius:10px;
`;
export const ChangeButton=styled.button`
      background-color:blue;
      height:6vh;
      margin-top:8px;
      padding:5px;
      border-radius:10px;
      color:white;
`;