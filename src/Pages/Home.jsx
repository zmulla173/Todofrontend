import React from "react";
import Navbar from "../Components/Navbar";
import "./Home.css";
import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="home-page">
            <Navbar/>
            <div className="home-center">
                <h1 className="home-title">Modern Todo App</h1>
                <p className="home-subtitle">Clean Fast productive</p>
                <div className="home-cta">
                    <Link to = '/SignUp' className="home-cta-link home-primary">Get started</Link>
                    <Link to = '/login' className="home-cta-link home-secondary">Sign in</Link>


                </div>
            </div>
        </div>
    )
}

export default Home;