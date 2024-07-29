// import React from "react";
// import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
// import { Link } from "react-scroll";
// const style = {
//   color: "white",
// };
// function Footer() {
//   return (
//     <div className="bg-[#6e57e0]  text-white h-[35vh] ">
//       <div className="flex justify-around items-center pt-11">
//         <div className="cursor-pointer">
//           <Link
//             activeClass="active"
//             to="home"
//             spy={true}
//             offset={-100}
//             duration={500}
//             smooth={true}
//           >
//             <h1 className="text-4xl">Prathmesh Rajurkar</h1>
//             <h3 className="text-2xl">Machine Learning Engineer</h3>
//           </Link>
          
//         </div>
//         <div>
//           <ul className="flex justify-between items-center w-[25rem] text-xl font-semibold ">
//             <li className="cursor-pointer">
//               <Link
//                 activeClass="active"
//                 to="about"
//                 spy={true}
//                 offset={-100}
//                 duration={500}
//                 smooth={true}
//               >
//                 About
//               </Link>
//             </li>
//             <li className="cursor-pointer">
//               <Link
//                 activeClass="active"
//                 to="projects"
//                 spy={true}
//                 offset={-100}
//                 duration={500}
//                 smooth={true}
//               >
//                 Projects
//               </Link>
//             </li>
//             <li className="cursor-pointer">
//               <Link
//                 activeClass="active"
//                 to="portfolio"
//                 spy={true}
//                 offset={-100}
//                 duration={500}
//                 smooth={true}
//               >
//                 Portfolio
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <ul className="flex justify-between items-center w-40">
//             <li>
//               <a href="https://www.linkedin.com/in/prathmesh-rajurkar-3493b91aa/">
//                 <FaLinkedinIn style={style} size={25} />
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/prathmsh1909">
//                 <FaTwitter style={style} size={25} />
//               </a>
//             </li>
//             <li>
//               <a href="https://github.com/Prathmesh-rajurkar">
//                 <FaGithub style={style} size={25} />
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;


import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";

function Footer() {
  return (
    <div className="bg-[#6e57e0] text-white h-[35vh] flex flex-col justify-center items-center">
      <div className="mb-5">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          offset={-100}
          duration={500}
          smooth={true}
        >
          <h1 className="text-4xl">Prathmesh Rajurkar</h1>
          <h3 className="text-2xl">Machine Learning Engineer</h3>
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center w-full sm:w-auto mb-5">
        <ul className="flex justify-between items-center w-full sm:w-auto text-xl font-semibold ">
          <li className="cursor-pointer">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              offset={-100}
              duration={500}
              smooth={true}
            >
              About
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              offset={-100}
              duration={500}
              smooth={true}
            >
              Projects
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              offset={-100}
              duration={500}
              smooth={true}
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-between items-center w-full sm:w-auto">
        <ul className="flex justify-between items-center w-auto">
          <li>
            <a href="https://www.linkedin.com/in/prathmesh-rajurkar-3493b91aa/">
              <FaLinkedinIn size={25} />
            </a>
          </li>
          <li>
            <a href="https://x.com/prathmsh1909">
              <FaTwitter size={25} />
            </a>
          </li>
          <li>
            <a href="https://github.com/Prathmesh-rajurkar">
              <FaGithub size={25} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
