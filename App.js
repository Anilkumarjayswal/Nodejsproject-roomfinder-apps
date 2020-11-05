import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Singleroom from './pages/Singleroom'
import Rooms from './pages/Rooms'
import Error from './pages/Error'
import Navbar from './components/Navbar'

class App extends React.Component {
  // componentDidMount(){
  //   this.props.fetchuser()

  // }
  render(){
  return (
    <div >
        <BrowserRouter>
        <Navbar/>
        <Switch>
        <Route exact path="/" component={Header}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/header" component={Header}/>
        <Route exact path="/rooms" component={Rooms}/>
        <Route exact path="/rooms/:slug" component={Singleroom}/>
        <Route component={Error}/>
        </Switch>
        </BrowserRouter>
    </div>
  );
  }
}

export default App;
