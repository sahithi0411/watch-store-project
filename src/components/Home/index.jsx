import { Link, Navigate } from "react-router";
import Header from "../Header";
import './index.css'

const Home = () => {
    const storedUser = localStorage.getItem('userDetails')
    if(storedUser === null){
        return <Navigate to="/login" replace />
    }


    return (
        <div className="bg-card">
            <Header />
            <div className="home-card">
                <div className="home-container">
                    <h1 className="home-heading">Permium Watches That Define Your Style</h1>
                    <img 
                        src="https://i.pinimg.com/236x/cc/37/bd/cc37bd5ffd782bc7770a667036d5477d.jpg"
                        alt="permium-Watches"
                        className="home-watch-img"
                    />
                    <p className="home-description">
                        Discover luxury, smart, and classic watches designed to match your personality. From modern digital styles to timeless elgent  designs, find the perfect watch for every moment.
                        Wherther you want a bold modern look or a timeless professional style, our collection delivers comfort, precision, and unmatched quality. Upgrade your wrist game with watches that truly reflect your personality and confidence.
                    </p>
                    <Link to="/products">
                        <button type="button" className="explore-now-button">
                            Explore Watches
                        </button>
                    </Link>
                </div>
                    <img 
                        src="https://i.pinimg.com/236x/cc/37/bd/cc37bd5ffd782bc7770a667036d5477d.jpg"
                        alt="permium-Watches"
                        className="home-watche-img"
                    />
            </div>
        </div>
    )
}
export default Home