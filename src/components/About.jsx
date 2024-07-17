import React from 'react'
import dp from '../assets/Profilepic.jpg'
function About() {
  return (
    <div id='about' className='h-[100vh]'>
        <h1 className='font-bold text-4xl my-2'>About</h1>
        <p className='text-gray-700'>My Introduction</p>

        <div className='flex justify-around items-center mt-20'>
            <div className='overflow-hidden w-[40%] rounded-lg '>
              <img src={dp} alt="" />
            </div>
            <div className='w-[40%]'>
              <p className='text-lg text-start text-gray-600'>
              I'm a passionate & proactive human with strong expertise & experience of 3+ years in Machine/Deep Learning, Software Development, Computer Vision, Natural Language Processing, & Full-Stack Web Development. I am currently leading the Machine Learning team at BrainSightAI to build an AI-based Neuroinformatics and Personalized Human Brain Mapping platform. Self-motivation, attention to detail, innovative problem solving, strong analytical skills, articulate communication & creativity are the things that drive me to achieve great results. If you're looking to hire, collaborate, or require any assistance, leave me an email
              </p>
            </div>
        </div>
    </div>
  )
}

export default About