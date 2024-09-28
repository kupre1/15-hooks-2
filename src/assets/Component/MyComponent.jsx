import React, { useEffect } from "react";

const MyComponent = () => {
  useEffect(() => {
    console.log("komponenti daibada");

    return () => {
      console.log("komponenti mokvda");
    };
  }, []);
  return <div>MyComponents</div>;
};

export default MyComponent;
