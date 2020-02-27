import React, { useContext } from "react";
import "./email.css";
import { EmailContext } from "../../context/context";
import { Email } from "./Email";

export function EmailSection() {

    const { emails, currentEmail, setCurrentEmail } = useContext(EmailContext);

    if(currentEmail) {
        return (
            <div>
                <button onClick = {() => {setCurrentEmail(null)}}> Back </button>
                <div> Hi </div>
            </div>
        );
    }

    if(emails.length === 0) {
        return (
            <p> Email folder is empty </p>
        );
    }

    return (
        <ul className="emailSection">

            {
                emails.map((email) => <Email key = {email.id} onClick = {setCurrentEmail} email = {email}/>)
            }

        </ul>
    )
}