import React from "react";
import { Toolbar } from "../Toolbar/Toolbar";
import { EmailSection } from "../EmailSection/EmailSection";
import "./dashboard.css";
import { EmailProvider } from "../../Providers/EmailProvider/EmailProvider";

export function Dashboard() {

    return (
        <div className = "dashboard">
            <Toolbar/>

            <EmailProvider>
                <EmailSection/>
            </EmailProvider>
        </div>
    )
}