import { GlobeThinIcon } from "./icons";

export const StartTech = () => {
  return (
    <section className="overflow-hidden relative text-center  bg-[#F0F1F3]  w-full flex flex-col items-center justify-center  px-20 md:px-40 py-3">
      <p className="workSans max-w-[600px] text-[#8B52FF] text-2xl md:text-4xl font-bold md:leading-[45px] leading-[35px]">
        Now is the time to start your tech Career, Not tomorrow!
      </p>
      <p className="text-sm max-w-[600px] lg:text md:leading-[43px] leading-[33px]">
        Bytebool is Offering you one in a life-time opportunity, with this
        affordable and flexibe course you will be setting yourself up for
        success. Learn the Basics of how web-apps are built. Enrol today, Start
        now{" "}
      </p>
      <span className="absolute translate-y-40 rotate-45 left-[50%] size-120 fill-[#231046]/10"><GlobeThinIcon /></span>
    </section>
  );
};
