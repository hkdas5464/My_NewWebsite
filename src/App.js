import React from 'react'
import Home from './Components/Home/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Switch,Route,Redirect } from 'react-router-dom';
import About from './Components/About/About';
import Service from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import NavBar from './Components/Navbar/NavBar';
import Footer from './Components/Footer/Footer'

const App=()=>{
  return(
    <>
    
    <NavBar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/Service" component={Service}/>
    <Route exact path="/Contact" component={Contact}/>
    <Redirect to="/"></Redirect>
    <Home/>
    </Switch>
    
  <Footer/>
    </>
  )
}
export default App;