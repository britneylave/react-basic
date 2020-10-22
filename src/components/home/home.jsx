import React, { Component } from 'react'
import './home.scss'
import Nav from '../nav/nav.jsx'

class Home extends Component{
    render(){
        return (
            <div className="home-container">
                <Nav/>
            </div>
        )
    }
}

export default Home;