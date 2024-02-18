import { Component } from "react"; 
import ThemeContext from "../../context/ThemeContext";
import {ChangeButton,BackgroundBanner,LogoImage,Heading,GetitNowButton,PopupContainer,PopupBox,PopupText,PopupButton} from './styledComponent'

class Home extends Component {
    render(){
        return (
          <ThemeContext.Consumer>
            {
            value=>{
                const {blacktheme,changeTheme}=value;
                const changeThemeFun=()=>{
                    console.log("Change theme funcion is clicked")
                    changeTheme();
                }
                console.log(blacktheme)
                return (
                    <>
                 <BackgroundBanner>
                 <LogoImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" alt="lightTheme"/>
                 <Heading>Buy Nxt Watch Premium prepaid plans with <br/> UPI </Heading>
                 <GetitNowButton>Get It Now</GetitNowButton>
                  </BackgroundBanner>
                   <ChangeButton onClick={changeThemeFun}>Change Theme</ChangeButton>
                   
                   </>
                )
            }
            }
          </ThemeContext.Consumer>
           
        )
    }
}
export default Home 