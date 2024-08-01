import React from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Social() {
  return (
    <div className='flex flex-col md:flex-col justify-center items-center h-full md:h-auto'>
      <a href="https://www.linkedin.com/in/prathmesh-rajurkar-3493b91aa/"><FaLinkedinIn className="mr-4 md:mr-0" size={25}/></a>
      <a href="https://x.com/prathmsh1909"><FaTwitter className="mr-4 md:mr-0" size={25}/></a>
      <a href="https://github.com/Prathmesh-rajurkar"><FaGithub size={25}/></a>
    </div>
  )
}

export default Social
