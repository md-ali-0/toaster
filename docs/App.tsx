import React from "react";
import ReactDOM from "react-dom/client";
import Toaster from "../src/components/Toaster";
import toast from "../src/toast";
import "./styles.css";

const App = () => {
    const defaultToast = () => {
        toast.default("This is a default toast", 2000);
    };
    return (
        <div className="flex flex-col justify-center items-center gap-5 h-screen">
            <h3 className="text-3xl font-bold">Toaster</h3>
            <div className="flex justify-center gap-5">
                <button
                    className="bg-white border rounded-md px-3.5 py-1.5"
                    onClick={defaultToast}
                >
                    Default
                </button>
                <button
                    className="bg-green-500 text-white rounded-md px-3.5 py-1.5"
                    onClick={() => toast.success("This is a success toast")}
                >
                    Success
                </button>
                <button
                    className="bg-blue-500 text-white rounded-md px-3.5 py-1.5"
                    onClick={() => toast.info("This is an info toast")}
                >
                    Info
                </button>
                <button
                    className="bg-red-600 text-white rounded-md px-3.5 py-1.5"
                    onClick={() => toast.error("This is an error toast")}
                >
                    Error
                </button>
                <button
                    className="bg-amber-600 text-white rounded-md px-3.5 py-1.5"
                    onClick={() => toast.warning("This is a warning toast")}
                >
                    Warning
                </button>
                <button
                    className="bg-black text-white rounded-md px-3.5 py-1.5"
                    onClick={() => toast.loading("This is a loading toast")}
                >
                    Loading
                </button>
            </div>
        </div>
    );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
        <Toaster />
    </React.StrictMode>
);
