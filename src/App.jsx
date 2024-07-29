// // import { useState } from "react";
// import "./App.css";
// import Navbar from "./components/Navbar.jsx";
// import Main from "./components/Main.jsx";
// import Footer from "./components/Footer";

// function App() {
//   // const [count, setCount] = useState(0);
//   return (
//     <>
//       <div className="App flex flex-col justify-center items-center font-mono">
//         <header className="w-full shadow-gray-300 shadow-md flex justify-center fixed bg-white top-0 z-10">
//           <Navbar />
//         </header>
//         <div className="w-[85%] py-[6rem]">
//           <Main />
//         </div>
//         <div className="w-[99vw]">
//           <Footer/>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;


import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App flex flex-col min-h-screen justify-between mx-auto my-0">
        <header className="w-full shadow-gray-300 shadow-md flex justify-center fixed bg-white top-0 left-0 z-10">
          <Navbar />
        </header>
        <main className="flex-grow w-full mx-auto">
          <Main />
        </main>
        <footer className="w-full bg-gray-200 py-4">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
