import React, { useState } from "react";
import DigitalID from "./DigitalID";
import LoadingScreen from "./LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <DigitalID />
      )}
    </>
  );
}

export default App;
