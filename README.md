# Toaster

A simple toast notification library for React.

## Installation

You can install `toaster` via npm or yarn:

```bash
npm install ...
# or
yarn add ...
```

## Usage

To use toaster, you need to wrap your application with ToasterProvider at the root level to manage toast notifications:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { ToasterProvider } from 'toaster';

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
        <Toaster duration={2000} pausedOnHover={true} position="bottom-right" />
    </React.StrictMode>
);
```

## Showing Toasts

You can trigger toast notifications anywhere in your application using the toast object:

```jsx
import React from "react";
import { toast } from "toaster";

const ExampleComponent = () => {
    const handleClick = () => {
        toast.info("This is an info toast");
    };

    return (
        <div>
            <button onClick={handleClick}>Show Info Toast</button>
        </div>
    );
};

export default ExampleComponent;
```

## Customization

Toaster Options

You can customize the Toaster component's position, default duration, and behavior on hover pause:

```jsx
import React from "react";
import { Toaster } from "toaster";

const ExampleToaster = () => {
    return (
        <Toaster position="bottom-right" duration={3000} pauseOnHover={true} />
    );
};

export default ExampleToaster;
```

## API

```jsx
toast.info(message: string , duration?: number)
```

Shows an info toast with an optional duration.

```jsx
toast.success(message: string , duration?: number)
```

Shows a success toast with an optional duration.

```jsx
toast.error(message: string , duration?: number)
```

Shows an error toast with an optional duration.

```jsx
toast.warning(message: string , duration?: number)
```

Shows a warning toast with an optional duration.

```jsx
toast.default(message: string , duration?: number)
```

Shows a default toast With message

## License

This project is licensed under the MIT License - see the LICENSE file for details.

### Notes:

-   **Installation**: Provide instructions for installing your package via npm or yarn.
-   **Usage**: Explain how users can set up and use your library, including examples.
-   **Customization**: Detail any options or configurations users can customize.
-   **API**: Document the available methods and their parameters.
-   **License**: Specify the license under which your project is distributed.

Feel free to customize and expand this template based on additional features or details specific to your `toaster` library. This markdown file provides a structured approach to guide users on installation, usage, customization, and understanding the API effectively.
