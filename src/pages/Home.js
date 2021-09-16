import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home-page">
            <div id="home-page-text" >
                <h1>Welcome to "Om-nom-nom" kitchen!</h1>
                <h3>This is a mediterranean kitchen with all its deliciousness</h3>
                <h2>We are happy to serve you! Check our <Link to="/menu">Menu</Link></h2>
                <h3>Contact Info:</h3> 
                
            </div>
        </div>
    )
}

export default Home
