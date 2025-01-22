// app/skills/page.js
import React, { useEffect } from "react";
// import { MagicCard } from "@/components/MagicCard"; // Adjust the import path as needed
import { fadeLeft } from "@/utils"; // Adjust the import path as needed
import Image from "next/image";
import { MagicCard } from "./MagicCard";

const Skills = () => {
  useEffect(() => {
    fadeLeft("fade-left", 1000, 1200);
    fadeLeft("fade-left-1400", 1000, 1400);
    fadeLeft("fade-left-1600", 1000, 1600);
    fadeLeft("fade-left-1800", 1000, 1800);
    fadeLeft("fade-left-2000", 1000, 2000);
  }, []);

  return (
    <div className="p-1 relative">
      <div className="w-full p-1">
        <h1 className="font-bold text-3xl inline-block heading ms-5 md:ms-20">
          Skills
        </h1>

        <div className="md:flex gap-4 justify-center flex-wrap">
          {/* Frontend Section */}
          <div className="relative z-10 flex flex-col justify-start items-start overflow-hidden md:w-3/6 lg:w-5/12 mt-10 p-[2px]">
            <div className="absolute w-[120%] h-28 -left-20 animate-spin-slow origin-center -z-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hidden lg:block"></div>
            <MagicCard>
              <h1 className="font-semibold text-xl border-b inline-block">
                Frontend
              </h1>
              <p className="py-2 text-gray-300">
                Skilled in creating modern, responsive interfaces with
                technologies like React, Tailwind CSS, and Bootstrap, ensuring
                engaging and intuitive user experiences.
              </p>
              <div className="flex flex-wrap justify-evenly items-center gap-4">
                <div className="bg-slate-900 shadow-2xl w-20 h-20 my-2 text-center flex flex-col items-center justify-center fade-left">
                  <Image src="/images/react.png" alt="React Logo" width={40} height={40} />
                  ReactJS
                </div>
                <div className="bg-slate-900 shadow-2xl w-20 h-20 my-2 text-center flex flex-col items-center justify-center fade-left-1400">
                  <Image src="/images/js.png" alt="JavaScript Logo" width={40} height={40} />
                  JavaScript
                </div>
                <div className="bg-slate-900 shadow-2xl w-20 h-20 my-2 text-center flex flex-col items-center justify-center fade-left-1600">
                  <Image src="/images/tailwindcss.png" alt="Tailwind CSS Logo" width={40} height={40} />
                  Tailwindcss
                </div>
                <div className="bg-slate-900 shadow-2xl w-20 h-20 my-2 text-center flex flex-col items-center justify-center fade-left-1800">
                  <Image src="/images/bootstrap.png" alt="Bootstrap Logo" width={40} height={40} />
                  Bootstrap
                </div>
                <div className="bg-slate-900 shadow-2xl w-20 h-20 my-2 text-center flex flex-col items-center justify-center fade-left-2000">
                  <Image src="/images/htmlcss.png" alt="HTML-CSS Logo" width={40} height={40} />
                  HTML-CSS
                </div>
              </div>
            </MagicCard>
          </div>

          {/* Backend Section */}
          <div className="relative z-10 flex flex-col justify-start items-start overflow-hidden md:w-3/6 lg:w-5/12 mt-10 p-[2px] shadow-2xl">
            <div className="absolute w-[120%] h-28 -left-20 animate-spin-slow origin-center -z-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hidden lg:block"></div>
            <MagicCard>
              <h1 className="font-semibold text-xl border-b inline-block">
                Backend
              </h1>
              <p className="py-2 text-gray-300">
                Experienced in building scalable backend services using Node.js
                and Express, with a strong focus on secure API development and
                performance optimization.
              </p>
              <div className="flex flex-wrap justify-evenly items-center gap-4">
                <div className="bg-slate-900 shadow-2xl w-20 h-20 my-2 text-center flex flex-col items-center justify-center fade-left">
                  <Image src="/images/nodejs.png" alt="Node.js Logo" width={40} height={40} />
                  NodeJS
                </div>
                <div className="bg-slate-900 shadow-2xl w-20 h-20 my-2 text-center flex flex-col items-center justify-center fade-left-1400">
                  <Image src="/images/expressjs.png" alt="Express.js Logo" width={40} height={40} />
                  ExpressJS
                </div>
                <div className="bg-slate-900 shadow-2xl w-20 h-20 my-2 text-center flex flex-col items-center justify-center fade-left-1600">
                  <Image src="/images/nextjs.png" alt="Next.js Logo" width={40} height={40} />
                  NextJS
                </div>
                <div className="bg-slate-900 shadow-2xl w-20 h-20 my-2 text-center flex flex-col items-center justify-center fade-left-1800">
                  <Image src="/images/go.png" alt="Go Logo" width={40} height={40} />
                  Go
                </div>
              </div>
            </MagicCard>
          </div>

          {/* Databases Section */}
          <div className="relative z-10 flex flex-col justify-start items-start overflow-hidden md:w-3/6 lg:w-5/12 mt-10 p-[2px]">
            <div className="absolute w-[120%] h-28 -left-20 animate-spin-slow origin-center -z-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hidden lg:block"></div>
            <MagicCard>
              <h1 className="font-semibold text-xl border-b inline-block">
                Databases
              </h1>
              <p className="py-2 text-gray-300">
                Proficient in data management with MongoDB, MySQL, and Oracle,
                ensuring efficient storage solutions and smooth data handling
                across applications.
              </p>
              <div className="flex flex-wrap justify-evenly items-center gap-4">
                <div className="bg-slate-900 shadow-2xl w-20 h-20 my-2 text-center flex flex-col items-center justify-center fade-left">
                  <Image src="/images/mongodb.png" alt="MongoDB Logo" width={40} height={40} />
                  MongoDB
                </div>
                <div className="bg-slate-900 shadow-2xl w-20 h-20 my-2 text-center flex flex-col items-center justify-center fade-left-1400">
                  <Image src="/images/mysql.png" alt="MySQL Logo" width={40} height={40} />
                  MySQL
                </div>
                <div className="bg-slate-900 shadow-2xl w-20 h-20 my-2 text-center flex flex-col items-center justify-center fade-left-1600">
                  <Image src="/images/oracle.png" alt="Oracle Logo" width={40} height={40} />
                  Oracle
                </div>
                <div className="bg-slate-900 shadow-2xl w-20 h-20 my-2 text-center flex flex-col items-center justify-center fade-left-1800">
                  <Image src="/images/postresql.png" alt="PostgreSQL Logo" width={40} height={40} />
                  PostgreSQL
                </div>
              </div>
            </MagicCard>
          </div>

          {/* Tools and Technologies Section */}
          <div className="relative z-10 flex flex-col justify-start items-center overflow-hidden md:w-3/6 lg:w-5/12 mt-10 p-[2px]">
            <div className="absolute w-[120%] h-28 -left-20 animate-spin-slow origin-center -z-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hidden lg:block"></div>
            <MagicCard>
              <h1 className="font-semibold text-xl border-b inline-block">
                Tools and Technologies
              </h1>
              <p className="py-2 text-gray-300">
                Versatile in using tools like Git, GitHub, Postman, Figma, and
                Photoshop, supporting seamless development, collaboration, and
                design workflows.
              </p>
              <br />
              <div className="flex flex-wrap justify-evenly items-center gap-4">
                <div className="bg-slate-900 shadow-2xl w-20 h-20 my-2 text-center flex flex-col items-center justify-center fade-left">
                  <Image src="/images/postman.png" alt="Postman Logo" width={40} height={40} />
                  Postman
                </div>
                <div className="bg-slate-900 shadow-2xl w-20 h-20 my-2 text-center flex flex-col items-center justify-center fade-left-1400">
                  <Image src="/images/github.png" alt="GitHub Logo" width={40} height={40} />
                  GitHub
                </div>
                <div className="bg-slate-900 shadow-2xl w-20 h-20 my-2 text-center flex flex-col items-center justify-center fade-left-1600">
                  <Image src="/images/figma.png" alt="Figma Logo" width={40} height={40} />
                  Figma
                </div>
                <div className="bg-slate-900 shadow-2xl w-20 h-20 my-2 text-center flex flex-col items-center justify-center fade-left-1800">
                  <Image src="/images/photoshop.png" alt="Photoshop Logo" width={40} height={40} />
                  Photoshop
                </div>
              </div>
            </MagicCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;