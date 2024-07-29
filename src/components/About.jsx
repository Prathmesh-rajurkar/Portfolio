// import React from 'react'
// import dp from '../assets/Profilepic.jpg'
// function About() {
//   return (
//     <div id='about' className='h-[100vh]'>
//         <h1 className='font-bold text-4xl my-2'>About</h1>
//         <p className='text-gray-700'>My Introduction</p>

//         <div className='flex sm:flex-col justify-between items-center h-[70%]'>
//             <div className='overflow-hidden size-96 rounded-lg '>
//               <img src={dp} alt="" />
//             </div>
//             <div className='w-[40%]'>
//               <p className='text-lg text-start text-gray-600'>
//               I'm a passionate & proactive human with strong expertise & experience of 3+ years in Machine/Deep Learning, Software Development, Computer Vision, Natural Language Processing, & Full-Stack Web Development. I am currently leading the Machine Learning team at BrainSightAI to build an AI-based Neuroinformatics and Personalized Human Brain Mapping platform. Self-motivation, attention to detail, innovative problem solving, strong analytical skills, articulate communication & creativity are the things that drive me to achieve great results. If you're looking to hire, collaborate, or require any assistance, leave me an email
//               </p>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default About


import React from 'react';
import dp from '../assets/Profilepic.jpg';

function About() {
  return (
    <div id="about" className="h-full flex flex-col items-center my-[4rem]">
      <h1 className="font-bold text-3xl sm:text-4xl my-2">About</h1>
      <p className="text-gray-700 text-center sm:text-left">My Introduction</p>

      <div className="flex flex-col sm:flex-row justify-center items-center  w-full h-full">
        <div className=" rounded-lg w-full sm:w-fit">
          <img src={dp} alt="" className="w-[80%] h-[80%] m-auto sm:m-0 " />
        </div>
        <div className="w-full sm:w-1/2 p-4 text-center sm:text-left">
          <p className="text-lg text-gray-600">
            I'm a passionate & proactive human with strong expertise & experience of 3+ years in Machine/Deep Learning, Software Development, Computer Vision, Natural Language Processing, & Full-Stack Web Development. I am currently leading the Machine Learning team at BrainSightAI to build an AI-based Neuroinformatics and Personalized Human Brain Mapping platform. Self-motivation, attention to detail, innovative problem solving, strong analytical skills, articulate communication & creativity are the things that drive me to achieve great results. If you're looking to hire, collaborate, or require any assistance, leave me an email
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
