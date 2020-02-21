import React, { useContext } from "react";
import { UserContext } from "../context/UserContext/UserProvider";

export function UserMenu() {

    const { handleLogout } = useContext(UserContext);

    return (
        <div>
            <button onClick = {handleLogout}> Logout </button>
            User Menu Page
        </div>
    )
}