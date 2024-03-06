import React, { Suspense } from 'react';

// Define a component that will be lazily loaded
const LazyComponent = React.lazy(() => import('../useCallBack/Child'));

// Create a regular component that will be displayed while the lazy component is loading
const LoadingComponent = () => <div>Loading...</div>;

// Main component
const LazyLoading = () => {
  return (
    <div>
      <h1>Lazy Loading Example</h1>
      <Suspense fallback={<LoadingComponent />}>
        {/* LazyComponent will be loaded only when it's needed */}
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default LazyLoading;
