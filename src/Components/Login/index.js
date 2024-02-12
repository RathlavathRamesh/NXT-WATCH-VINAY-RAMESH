import { Component } from "react";
import {MainContainer,LoginCard,ChangeButton,LogoImage,InputField,Labellements,Labellements2} from  './styledComponent.js'
import ThemeContext from "../../context/ThemeContext.js";

class Login extends Component {
  state={username:"",password:"",Ispassword:true}  

  handleuserName=(event)=>{
    console.log(event.target.value);
    this.setState({username:event.target.value})
  }
  
  showPassword=()=>{
    this.setState((prev)=>({Ispassword:!prev.Ispassword}))
  }

  submitForm=(event)=>{
      event.preventDefault()
  }

  render() {
    const {username,password,Ispassword}=this.state;
    return (
      <ThemeContext.Consumer>
      {
       value=>{
         const {blacktheme,changeTheme}=value ;
         const onClickChangetheme=()=>{
          changeTheme();
         } 
         return (
           <MainContainer isBlack={blacktheme}>
            <form onSubmit={this.submitForm}>
            <LoginCard isBlack={blacktheme}>
              <div className="flex justify-center w-full">
              {blacktheme===true ?(<LogoImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png" alt="DarkTheme"/>)
               :(<LogoImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" alt="lightTheme"/>)}
              </div>
               <Labellements  htmlFor="username" isBlack={blacktheme}>USERNAME</Labellements>
              <InputField id="username" type="input" placeholder="Enter username" />
               <Labellements  htmlFor="password" isBlack={blacktheme} className="pt-4">PASSWORD</Labellements>
             {Ispassword===true ?( <InputField id="password" type="password" placeholder="Enter password"  />):( <InputField id="password" type="text" placeholder="Enter password"  />)}
             <div className="ml-5"> <input id="checkbox" type="checkbox" onChange={this.showPassword}/>
             <Labellements2  htmlFor="checkbox" isBlack={blacktheme}  className="ml-1">SHOW PASSWORD</Labellements2>
               </div>
             
              <ChangeButton onClick={onClickChangetheme} type="submit">Login</ChangeButton>
             </LoginCard>
            </form>
           </MainContainer>
         );
       }
      } 
     </ThemeContext.Consumer>
    )
   
  }
  }
  export default Login