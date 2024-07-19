import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LuBrainCog } from "react-icons/lu";
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { PiCode } from "react-icons/pi";
import { LuActivity } from "react-icons/lu";
import { TbCloudComputing } from "react-icons/tb";
import { GiServerRack } from "react-icons/gi";
// import { ChevronDownIcon } from '@radix-ui/react-icons';

function Skills() {
  return (
    <div id="skill" className="h-[100vh]">
      <h1 className="font-bold text-4xl my-2">Skills</h1>
      <p className="text-gray-700">My Technical and Miscellanous Skills</p>
      <div className="text-[#6e57e0] my-10 flex justify-between w-[100%]">
        <Accordion
          type="single"
          collapsible
          className=" w-[90%] p-4 border-none  "
        >
          <AccordionItem value="item-1" className=" no-underline">
            <AccordionTrigger className="text-3xl flex justify-between font-bold font-mono">
              <div className="flex align-middle gap-4 justify-center">
                <LuBrainCog size={40} />
                <p className="text-black">AI & Data Science</p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex justify-center">
            <ul className="text-2xl text-start text-black w-[80%]">
                <li className="hover:text-3xl">Machine Learning</li>
                <li className="hover:text-3xl">Deep Learning</li>
                <li className="hover:text-3xl">EDA</li>
                <li className="hover:text-3xl">Feature Engineering</li>
                <li className="hover:text-3xl">Natural Language Processing</li>
                <li className="hover:text-3xl">Data Analytics & Visualization</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="">
            <AccordionTrigger className="text-3xl font-bold font-mono">
              <div className="flex align-middle gap-4 justify-center">
                <MdOutlineScreenshotMonitor size={40} />
                <p className="text-black">Frontend</p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex justify-center">
            <ul className="text-2xl text-start text-black w-[80%]">
                <li className="hover:text-3xl">HTML</li>
                <li className="hover:text-3xl">CSS</li>
                <li className="hover:text-3xl">JavaScript</li>
                <li className="hover:text-3xl">ReactJS</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="">
            <AccordionTrigger className="text-3xl font-bold font-mono">
              <div className="flex align-middle gap-4 justify-center">
                <PiCode size={40} />
                <p className="text-black">Programming</p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex justify-center">
            <ul className="text-2xl text-start text-black w-[80%]">
                <li className="hover:text-3xl">Python</li>
                <li className="hover:text-3xl">JavaScript</li>
                <li className="hover:text-3xl">SQL</li>
                <li className="hover:text-3xl">C++</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible className=" w-[90%] p-4">
          <AccordionItem value="item-4" className="">
            <AccordionTrigger className="text-3xl font-bold font-mono">
              <div className="flex align-middle gap-4 justify-center">
                <GiServerRack />
                <p className="text-black">Backend</p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex justify-center">
            <ul className="text-2xl text-start text-black w-[80%]">
                <li className="hover:text-3xl">NodeJS, ExpressJS</li>
                <li className="hover:text-3xl">Django</li>
                <li className="hover:text-3xl">FastAPI</li>
                <li className="hover:text-3xl">Flask</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="">
            <AccordionTrigger className="text-3xl font-bold font-mono">
              <div className="flex align-middle gap-4 justify-center">
                <TbCloudComputing size={40} />
                <p className="text-black">Computing</p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex justify-center">
            <ul className="text-2xl text-start text-black w-[80%]">
                <li className="hover:text-3xl">Amazon Web Service</li>
                <li className="hover:text-3xl">Google Cloud Platform</li>
                <li className="hover:text-3xl">Azure</li>
                <li className="hover:text-3xl">Docker</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6" className="">
            <AccordionTrigger className="text-3xl font-bold font-mono">
              <div className="flex align-middle gap-4 justify-center">
                <LuActivity size={40} />
                <p className="text-black"> Misc</p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex justify-center">
            <ul className="text-2xl text-start text-black w-[80%]">
                <li className="hover:text-3xl"></li>
                <li className="hover:text-3xl">Git,GitHub</li>
                <li className="hover:text-3xl">VScode</li>
                <li className="hover:text-3xl">Agile Development Model</li>
                <li className="hover:text-3xl"></li>
                <li className="hover:text-3xl"></li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default Skills;
