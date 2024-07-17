// import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <>
      <div className="App flex flex-col justify-center items-center font-mono">
        <header className="w-full shadow-gray-300 shadow-md flex justify-center fixed bg-white top-0 z-10">
          <Navbar />
        </header>
        <div className="w-[85%] py-[6rem]">
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
