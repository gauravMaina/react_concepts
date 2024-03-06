import React, { useState } from 'react';

function ErrorBoundary(props) {
  const [hasError, setHasError] = useState(false);

  const componentDidCatch = (error, errorInfo) => {
    // Log the error to an error reporting service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    setHasError(true);
  };

  if (hasError) {
    // You can render any custom fallback UI
    return <h1>Something went wrong. Please try again later.</h1>;
  }

  return props.children;
}

// Example usage of ErrorBoundary
function MyComponent() {
  if (Math.random() > 0.5) {
    throw new Error('Random error occurred');
  }
  return <h1>No error occurred!</h1>;
}

// Wrap MyComponent with ErrorBoundary
function ErrorBoundary1() {
  return (
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>
  );
}

export default ErrorBoundary1;
