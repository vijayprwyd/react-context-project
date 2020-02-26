import React, { useContext } from "react";
import "./toolbar.css";
import  { UserContext } from "../../context/context";

export function Toolbar() {

    const { user, handleLogout } = useContext(UserContext);

    return (
        <div className = "toolbarContainer">
            <h3>{ `${( user || {}).userName}'s Mail` }</h3>
            <button className = "logoutButton" onClick = {handleLogout} >Log Out</button>
        </div>
    );
}