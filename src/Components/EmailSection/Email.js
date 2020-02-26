import React from "react";

export function Email({ email, onClick }) {

    return (
        <li className="email" onClick = {onClick}>
            <h4>{ email.subject }</h4>
            <p>{ email.content }</p>
        </li>
    );
}