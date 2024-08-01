import React from "react";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

function Contact() {
  return (
    <div id="contact" className="h-[100vh] ">
      <h1 className="font-bold text-4xl my-2">Contact</h1>
      <p className="text-gray-700">Get in touch with me</p>
      <div className="flex flex-col justify-center items-center my-20 w-full mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center w-[40%] text-start my-10">
          <div className="flex justify-center gap-10 w-fit  items-center mr-5 md:mr-0">
            <CiMail size={40} />
          </div>
          <div className="flex-grow w-fit">
            <h1 className="text-3xl">Email</h1>
            <p>prathmeshrajurkar199@gmail.com</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center w-[40%] text-start my-10">
          <div className="flex justify-center items-center mr-5 md:mr-0">
            <IoLocationOutline size={40} />
          </div>
          <div className="flex-grow">
            <h1 className="text-3xl">Location</h1>
            <p>Nagpur | Maharashtra</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

