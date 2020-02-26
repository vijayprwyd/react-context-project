import React, { useState } from "react";
import { EmailContext } from "../../context/context";

export function EmailProvider(props) {

    const [currentEmail, setCurrentEmail] = useState(null);


    return (
        <EmailContext.Provider value = {{

            emails: [{
                id: 1,
                subject: 'Email 1',
                content: 'Yo, Just wanted to say hi 1'
            },  {
                id: 2,
                subject: 'Email 2',
                content: 'Yo, Just wanted to say hi 2'
            },  {
                id: 3,
                subject: 'Email 3',
                content: 'Yo, Just wanted to say hi 3'
            }],

            currentEmail,
            setCurrentEmail,
        }}>

            {props.children}

        </EmailContext.Provider>
    );
}