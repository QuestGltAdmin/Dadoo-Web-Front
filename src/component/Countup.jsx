import React, { useState, useEffect } from "react";

const Countup = ({ targetNumber, animationTime }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increase count by 1 in each interval until it reaches the targetNumber
      setCount((prevCount) => {
        if (prevCount < targetNumber) {
          return prevCount + 1;
        } else {
          // Clear the interval when the count reaches the targetNumber
          clearInterval(intervalId);
          return prevCount;
        }
      });
    }, animationTime);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [targetNumber]);

  return <>{count}</>;
};

export default Countup;
