import React, {useState, useEffect} from 'react'
import { Switch, Route } from 'react-router'
import Home from './pages/Home'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Menu from './pages/Menu'
import Shoppingcart from './pages/ShoppingCart'
import "./App.css"
import menuList from './components/Data'



const App = () => {
  const [menuData, setMenuData] = useState(menuList)
  const [image, setImage] = useState("")

  useEffect(() => {
    const url = "https://foodish-api.herokuapp.com/api/"
    fetch(url)
      .then(response => response.json())
      .then(response => setImage(response.image))
    // empty [] means it'll only render once:
  }, [])


  return(
    <div>
      <NavBar />
      
      <Switch>
        
        <Route exact path="/home">
          <Home image={image}/>
         </Route> 
          
        <Route path="/menu">
          <Menu menuData={menuData}/> 
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