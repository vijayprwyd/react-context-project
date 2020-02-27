import React, { useEffect, useState, useRef } from "react";
import { NotificationContext } from "../../context/context";

export function NotificationProvider(props) {

    const [notifications, setNotifications] = useState(new Map());
    const temp = useRef(null);
    temp.current = notifications;

    function removeNotification(notification) {

        let newNotifications = new Map(notifications);
        newNotifications.delete(notification.id);
        setNotifications(newNotifications);
    }

    useEffect(() => {

        let count = 0;

        let interval = setInterval(() => {
            let date = new Date();
            let newNotifications = new Map(temp.current);

            newNotifications.set(
                date, {
                    id: date,
                    content: `Sample Notification ${count++}`
                }
            );

            if(count === 7) clearInterval(interval);

            setNotifications(newNotifications);

        }, 3000);
    }, []);

    return (
        <NotificationContext.Provider value = {{notifications: [...notifications.values()], removeNotification}}>

            { props.children }

        </NotificationContext.Provider>
    );
}