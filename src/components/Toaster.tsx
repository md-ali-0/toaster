import React, { useEffect, useState } from "react";
import toast from "../toast";
import { Toast, ToasterProps } from "../types";
import {
    DefaultIcon,
    ErrorIcon,
    InfoIcon,
    LoadingIcon,
    SuccessIcon,
    WarningIcon,
} from "./Icons";
import styles from "./Toast.module.css";

const toastIcons = {
    default: <DefaultIcon />,
    success: <SuccessIcon />,
    error: <ErrorIcon />,
    warning: <WarningIcon />,
    info: <InfoIcon />,
    loading: <LoadingIcon />,
};

const Toaster: React.FC<ToasterProps> = ({
    position = "bottom-right",
    duration = 3000,
    pausedOnHover = false,
}) => {
    const [toasts, setToasts] = useState<Toast[]>([]);
    toast.setDefaultDuration(duration);

    useEffect(() => {
        const unsubscribe = toast.subscribe(setToasts);
        return () => unsubscribe();
    }, []);

    const getPositionStyle = () => {
        switch (position) {
            case "top-left":
                return styles["toaster-top-left"];
            case "top-right":
                return styles["toaster-top-right"];
            case "bottom-left":
                return styles["toaster-bottom-left"];
            case "bottom-right":
                return styles["toaster-bottom-right"];
            default:
                return styles["toaster-bottom-right"];
        }
    };
    const handleMouseEnter = (id: number) => {
        if (pausedOnHover) {
            toast.pauseToast(id);
        }
    };

    const handleMouseLeave = (id: number) => {
        if (pausedOnHover) {
            toast.resumeToast(id);
        }
    };

    return (
        <div className={`${styles.toaster} ${getPositionStyle()}`}>
            {toasts.map((toast, index) => (
                <div
                    key={index}
                    className={`${styles.toast} ${
                        styles[`toast-${toast.type}`]
                    }`}
                    onMouseEnter={() => handleMouseEnter(toast.id)}
                    onMouseLeave={() => handleMouseLeave(toast.id)}
                >
                    <div className={styles["toast-icon"]}>
                        {toastIcons[toast.type]}
                    </div>
                    <span className={styles["toast-message"]}>
                        {toast.message}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Toaster;
