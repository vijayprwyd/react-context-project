import React from "react";
import { Toolbar } from "../Toolbar/Toolbar";
import { EmailSection } from "../EmailSection/EmailSection";
import "./dashboard.css";
import { EmailProvider } from "../../Providers/EmailProvider/EmailProvider";
import { NotificationProvider } from "../../Providers/NotificationProvider/NotificationProvider";
import { NotificationMessages } from "../NotificationMessages/NotificationMessages";

export function Dashboard() {

    return (
        <div className = "dashboard">
            <Toolbar/>

            <NotificationProvider>
                <NotificationMessages/>
            </NotificationProvider>

            <EmailProvider>
                <EmailSection/>
            </EmailProvider>
        </div>
    )
}