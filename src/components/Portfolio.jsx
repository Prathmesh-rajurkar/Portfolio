import React from "react";

function Portfolio() {
  return (
    <div id="portfolio" className="h-[100vh]">
      <h1 className="font-bold text-4xl my-2">Portfolio</h1>
      <p className="text-gray-700">Download my Resume</p>
      <div className="flex justify-center mt-6">
        <a href="https://drive.google.com/file/d/1I-N3xo9A5YClHA3sc10bjA39t1kPjiy-/view?usp=sharing">
          <img className="" src="src\assets\image.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
