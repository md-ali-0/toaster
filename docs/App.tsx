import React from "react";
import ReactDOM from "react-dom/client";
import Toaster from '../src/components/Toaster';
import toast from '../src/toast';

const App = () => {
    return (
        <div>
        <button onClick={() => toast.default('This is a default toast', 'info')}>Show Default Toast</button>
        <button onClick={() => toast.info('This is an info toast')}>Show Info Toast</button>
        <button onClick={() => toast.success('This is a success toast')}>Show Success Toast</button>
        <button onClick={() => toast.error('This is an error toast')}>Show Error Toast</button>
        <button onClick={() => toast.warning('This is a warning toast')}>Show Warning Toast</button>
        <button onClick={() => toast.loading('This is a loading toast')}>Show Loading Toast</button>
      </div>
    );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
        <Toaster duration={2000} pausedOnHover={true} position="bottom-right" />
    </React.StrictMode>
);
