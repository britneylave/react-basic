import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faInfo, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import './nav.scss'

class Nav extends Component{

    state = {
        currTime: this.setDateTimeFormat(),
        openDropdown: false,
    }

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.setDateTimeInterval()
    }

    setDateTimeInterval(){
        setInterval(() => {
            this.setState({
                currTime: this.setDateTimeFormat()
            })
        }, 1000)
    }

    setDateTimeFormat(){
        let months = ["January", "February", "March","April", "May", "June", "July", "August", 
                            "September", "October", "November", "December"];
        let date = new Date();
        let time = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', 
                    second: 'numeric', hour12: true })
        return months[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear() + ", " + time
    }

    toggleDropdown(){
        this.setState({
            openDropdown: !this.state.openDropdown
        })
    }

    render(){
        return(
            <div className="container">
                <div className="logo-container">
                    <h1>Bimoy</h1>
                </div>
                <div className="action-container">
                    <div className="inner-container">
                        <p className= "action-component pointer-hover"><FontAwesomeIcon icon={faBars}/></p>
                        <p className= "action-component most-right-component">
                            Server Time: {this.state.currTime}</p>
                    </div>
                    <div className="inner-container pointer-hover">
                        <p className= "action-component"><FontAwesomeIcon icon={faInfo}
                            className="info-icon"/></p>
                            <p><FontAwesomeIcon icon={faCaretDown} className="down-icon"></FontAwesomeIcon></p>
                        <div className="nav-dropdown" onClick={() => this.toggleDropdown()}>
                            <p className= "action-component">Clarissa Angelia</p>
                            <p><FontAwesomeIcon icon={faCaretDown} className="down-icon"></FontAwesomeIcon></p>
                        </div>
                        <p className= "action-component most-right-component">
                            <FontAwesomeIcon icon={faSearch}/></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav