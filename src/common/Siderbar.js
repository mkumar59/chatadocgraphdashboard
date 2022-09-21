import React from "react";
import logo from '../img/logo.png'
import Menu from './Menu'
const Sidebar=()=>{
    return(
        <div className="row sidebarbg">
            <div className="col-lg-12">
                <img src={logo} alt="" />
            </div>
            <div className="col-lg-12">
                <Menu/>
            </div>
        </div>
    )
}


export default Sidebar