import React from "react";
import logo from "../assets/Pfp-removebg-preview.png";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
function Info() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[60%]">
        <div className="my-5">
          <h1 className="text-5xl font-semibold text-start">
            Hi,I'm Prathmesh
          </h1>
          <h2 className="text-2xl text-gray-500 my-2 font-semibold text-start">
            Machine Learning Engineer
          </h2>
          <p className="text-start text-gray-500">
            19 | Artificial Intelligence | Data Science | Software
            Development | Full-Stack |
          </p>
        </div>

        <div className="bg-[#6e57e0] w-fit p-4 rounded-xl flex flex-row items-center justify-center gap-2 hover:gap-4 text-lg text-white font-bold my-10">
          <button>Contact</button>
          <FaRegArrowAltCircleRight/>
        </div>
      </div>

      <div>
        <div className="bg-[#6e57e0] h-[450px] w-[]  overflow-hidden rounded-full box-content">
          <img className=" h-[100%] " src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Info;
