import React from "react";
import Social from "./Social";
import Info from "./Info";

function Home() {
  return (
    <div id="home" className="flex justify-center  py-5 font-mono h-[100vh]">
      <div className="w-[20%]">
        <Social />
      </div>
      <div className="w-[80%]">
        <Info />
      </div>
    </div>
  );
}

export default Home;
