import React, { useState } from "react";

export const UserContext = React.createContext();

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

