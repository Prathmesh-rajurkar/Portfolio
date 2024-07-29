// import React from 'react'
// import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
// const style = {
//   color: "hsl( 250 , 69%, 61%)",
// }
// function Social() {
//   return (
//     <div className='flex flex-col justify-center  items-center h-[70%]'>
//       <div className='flex flex-col items-center justify-around h-[50%]'>
//         <a href="https://www.linkedin.com/in/prathmesh-rajurkar-3493b91aa/"><FaLinkedinIn style={style} size={25}/></a>
//         <a href="https://x.com/prathmsh1909"><FaTwitter style={style} size={25}/></a>
//         <a href="https://github.com/Prathmesh-rajurkar"><FaGithub style={style} size={25}/></a>
//       </div>
//     </div>
//   )
// }

// export default Social


import React from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Social() {
  return (
    <div className='flex flex-col sm:flex-col justify-center items-center h-full sm:h-auto'>
      <a href="https://www.linkedin.com/in/prathmesh-rajurkar-3493b91aa/"><FaLinkedinIn className="mr-4 sm:mr-0" size={25}/></a>
      <a href="https://x.com/prathmsh1909"><FaTwitter className="mr-4 sm:mr-0" size={25}/></a>
      <a href="https://github.com/Prathmesh-rajurkar"><FaGithub size={25}/></a>
    </div>
  )
}

export default Social
