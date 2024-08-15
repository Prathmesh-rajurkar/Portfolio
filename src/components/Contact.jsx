import React from "react";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

function Contact() {
  return (
    <div id="contact" className="flex flex-col items-center p-8 bg-white ">
      <h2 className="text-4xl font-bold mb-4">Contact</h2>
      <p className=" mb-8">Get in touch with me</p>

      <div className="flex flex-col items-start space-y-10 my-24">
        {/* Email Section */}
        <div className="flex items-center space-x-4 text-start">
          <CiMail size={30} />
          <div>
            <h4 className="text-3xl font-semibold">Email</h4>
            <p className="">prathmeshrajurkar199@gmail.com</p>
          </div>
        </div>

        {/* Location Section */}
        <div className="flex items-center space-x-4 text-start ">
          <IoLocationOutline size={30} />
          <div>
            <h4 className="text-3xl font-semibold">Location</h4>
            <p className="">Nagpur | Maharashtra | India</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
