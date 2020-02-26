import React, { useState } from "react";
import { UserContext } from "../../context/context";

export function UserProvider(props) {

    const [user, setCurrentUser] = useState(null);

    const handleLogin = user => {
        setCurrentUser(user);
    }

    const handleLogout = () => {
        setCurrentUser(null);
    }

    return (
        <UserContext.Provider

            value = {
                {
                    user,
                    handleLogin,
                    handleLogout
                }
            }
        >

            {props.children}

        </UserContext.Provider>
    );
}