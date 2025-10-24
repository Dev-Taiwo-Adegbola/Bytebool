import html from "../assets/hero.png";
import {
  CSSIcon,
  GithubIcon,
  GlobeIcon,
  GlobeThinIcon,
  HTMLIcon,
  JSIcon,
} from "./icons";

const WhatYouGet = () => {
  return (
    <section className=" relative overflow-x-clip  bg-[#F0F1F3]  w-full flex flex-col items-center justify-center">
      <div className=" overflow-hidden w-[90%] lg:w-[80%]  -translate-y-50 bg-white rounded-3xl  shadow-custom p-3 pb-7 ">
        <div className=" flex flex-col gap-y-5  justify-between items-center p-10 ">
          {/* <img src={html} alt="" className='w-[40%]' /> */}
          <h2 className="font-semibold  text-2xl md:text-3xl text-center text-[#8B52Ff]">
            What You'll learn
          </h2>
          <div className="lg:w-[80%]  justify-center py-5  text-[14px] items-center text-center flex flex-wrap gap-5">
            <p className="bg-[#F0F1F3]/50 p-2 rounded-xl  border-[#8B52Ff]/50 border-l-2  w-[280px]">
              <span className="font-semibold">HTML & CSS</span>
              <br /> Build beautiful, responsive web pages using HTML and CSS.
              Master layouts, colors, and styling fundamentals.
            </p>
            <p className="bg-[#F0F1F3]/50 p-2 rounded-xl  border-[#8B52Ff]/50 border-l-2  w-[280px]">
              <span className="font-semibold">JAVASCRIPT</span>
              <br /> Bring your websites to life with interactivity and dynamic
              features using powerful JavaScript concepts.
            </p>
            <p className="bg-[#F0F1F3]/50 p-2 rounded-xl  border-[#8B52Ff]/50 border-l-2  w-[280px]">
              <span className="font-semibold">GIT & GITHUB</span>
              <br /> Learn how to track changes, collaborate with others, and
              manage your projects efficiently with Git and GitHub.
            </p>
            <p className="bg-[#F0F1F3]/50 p-2 rounded-xl  border-[#8B52Ff]/50 border-l-2  w-[280px]">
              <span className="font-semibold">HOSTING/DEPLOYMENT</span>
              <br /> Make your projects live! Discover how to host and deploy
              websites so anyone can access your work online.
            </p>
            <span className="absolute -top-4 -left-3 size-25 -rotate-40 fill-red-300 -z-1">
              <HTMLIcon />
            </span>
            <span className="absolute top-25 left-[80%] size-25 -rotate-40 fill-blue-300 -z-1">
              <CSSIcon />
            </span>
            <span className="absolute top-[60%] -left-3 size-25 -rotate-40 fill-yellow-200 -z-1">
              <JSIcon />
            </span>
            <span className="absolute -z-1 size-30 fill-[#8B52Ff]/60">
              <GithubIcon />
            </span>
            <span className="absolute top-[82%] left-[77%] size-25 -rotate-40 fill-blue-300 -z-1">
              <GlobeIcon />
            </span>
          </div>
        </div>
        <div className=""></div>
      </div>

      <div className="w-[78%] before lg:w-[60%] -translate-y-56 flex flex-col items-center gap-15">
        <h2 className="flex flex-col items-center text-lg md:text-xl  bg-[#231046] rounded-4xl p-2 min-w-[100%] text-center text-[#f0f1f3]">
          What you'll Get!
          <span className="inline-block absolute top-9 -translate-x-0.5 bg-[#231046] size-4 rounded-full"></span>
          <span className="inline-block absolute top-24.5 -translate-x-0.5 bg-[#231046] size-4 rounded-full"></span>
          <span className="inline-block absolute top-35 -translate-x-0.5 bg-[#231046] size-4 rounded-full"></span>
          <span className="inline-block absolute top-51.5 -translate-x-0.5 bg-[#231046] size-4 rounded-full"></span>
          <span className="inline-block absolute top-62.5 -translate-x-0.5 bg-[#231046] size-4 rounded-full"></span>
          <span className="inline-block absolute top-78.5 -translate-x-0.5 bg-[#231046] size-4 rounded-full"></span>
          <span className="inline-block absolute top-89.5 -translate-x-0.5 bg-[#231046] size-4 rounded-full"></span>
          <span className="inline-block absolute top-105.5 -translate-x-0.5 bg-[#231046] size-4 rounded-full"></span>
        </h2>
        <p className="border-[#231046] bg-[#f0f1f3] border-dotted border-4 rounded-4xl py-2 px-5 text-center text-[#231046]">
          Premium Course Materials
        </p>
        <p className="border-[#231046] bg-[#f0f1f3] border-dotted border-4 rounded-4xl py-2 px-5 text-center text-[#231046]">
          Live Class + Class recordings
        </p>
        <p className="border-[#231046] bg-[#f0f1f3] border-dotted border-4 rounded-4xl py-2 px-5 text-center text-[#231046]">
          one-on-one Support
        </p>
        <p className="border-[#231046] bg-[#f0f1f3] border-dotted border-4 rounded-4xl py-2 px-5 text-center text-[#231046]">
          Weekly Assignments & projects
        </p>
      </div>

      <span className="size-200 absolute  translate-y-80 rotate-45 fill-[#231046]/5 z-0 ">
        <GlobeThinIcon />
      </span>
    </section>
  );
};
export default WhatYouGet;
