import React, { useContext } from "react";
import { UserContext } from "../../context/context";

export function Login() {

    const { handleLogin } = useContext(UserContext);

    return (
        <div>
            <label>Name</label>
            <input type = "text"></input>

            <label>Password</label>
            <input type = "password"></input>

            <button onClick={() => handleLogin({
                userName: "Vijay"
            })}>

                Login

            </button>
        </div>
    );
}