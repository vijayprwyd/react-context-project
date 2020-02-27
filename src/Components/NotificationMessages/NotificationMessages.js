import React, { useContext } from "react";
import "./notifications.css";
import { NotificationContext } from "../../context/context";

export function NotificationMessages() {


    const { notifications, removeNotification } = useContext(NotificationContext);

    return <div className="notifications">
        {
            notifications.map((notification) => (
                <div key = {notification.id} className="notification">
                    <div className = "notHeader">
                        <button onClick = { () => removeNotification(notification) } >X</button>
                    </div>
                    { notification.content }
                </div>
            ))
        }

    </div>
}