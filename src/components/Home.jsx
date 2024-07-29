import React from "react";
import Social from "./Social";
import Info from "./Info";

function Home() {
  return (
    <div id="home" className="flex justify-center my-[4rem] py-5 font-mono h-full">
      <div className="w-[20%] hidden">
        <Social />
      </div>
      <div className="w-[80%]">
        <Info />
      </div>
    </div>
  );
}

export default Home;
