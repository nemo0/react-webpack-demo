import React from "react";
import testImage from "./images/img.jpg";

const App = () => {
  return (
    <div>
      <p>React + Webpack</p>
      <img src={testImage} alt="Optimized image" width={500} />
    </div>
  );
};

export default App;
