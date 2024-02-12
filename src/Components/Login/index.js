import { Component } from "react";
import {MainContainer,MainHeading,LoginCard,ChangeButton} from  './styledComponent.js'
class Login extends Component {
  state = {
    blacktheme: false
  };
  
  changeTheme = () => {
    console.log("Change theme button is Clicked");
    this.setState(prevState => ({
      blacktheme: !prevState.blacktheme // Update to blacktheme
    }));
  };

  render() {
    const { blacktheme } = this.state;
    console.log(blacktheme)
    return (
      <MainContainer theme={blacktheme}>
        <LoginCard>
          <MainHeading>Hello welcome</MainHeading>
        </LoginCard>
        <ChangeButton onClick={this.changeTheme}>Change theme</ChangeButton>
      </MainContainer>
    );
  }
  }
  export default Login