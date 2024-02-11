import { Component } from "react";
import { BrowserRouter,Switch,Route,Redirect} from "react-router-dom";
import Home from './Components/Home/index.js'
import Login from './Components/Login/index.js'
import Trending from './Components/Trending/index.js'
import Gaming from './Components/Gaming/index.js'
import VideoItems from './Components/VideoItems/index.js'
import SavedVideos from './Components/SavedVideos/index.js'
import NotFound from './Components/NotFound/index.js'
class App extends Component{
  render(){
    return (
    <>
     <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Trending" component={Trending}/>
        <Route exact path="/Gaming" component={Gaming}/>
        <Route exact path="/VideoItems" component={VideoItems}/>
        <Route exact path="/SavedVideos" component={SavedVideos}/>
        <Route exact path="/NotFound" component={NotFound}/>
        <Redirect to="NotFound"/>

      </Switch>
     </BrowserRouter>
     </>
    )
  }
}
export default App;