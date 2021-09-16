import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './pages/Home'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Shoppingcart from './pages/ShoppingCart'
import "./App.css"


const App = () => {

  return(
    <div>
      <NavBar />
      
      <Switch>
        
        <Route exact path="/home">
          <Home/>
         </Route> 
          
        <Route path="/menu">
          <Menu /> 
        </Route>

        <Route path="/shoppingcart">
          <Shoppingcart />
        </Route>        

      </Switch> 

      <Footer /> 
    </div>
  )
}


export default App