import { ReactDOM } from "react";
import React from "react";
import Dashboard from "../components/Dashboard";
import Test from "../components/Test";
const Header=()=>{
    return(
        
        <div className="row headerbg">
            <div className="col-12 col-sm-8 col-md-8 col-lg-8">
                <h2>Dashboard</h2>
            </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-4">

            </div>
        </div>
    )
}

export default Header;