import { useNavigate } from "react-router";
import Hero from "../assets/hero000.png";
import BackgroundGradient from "./BackgroundGradient";

const HeroSection = () => {
  const navigate = useNavigate()
  return (
    <section className=" relative overflow-x-hidden pt-15  pb-70 w-full px-10 md:px-20 flex flex-col items-center text-center lg:text-left justify-center gap-x-7 gap-y-15 lg:flex-row lg:justify-between">
      <div className=" flex flex-col gap-5 lg:w-[45%] ">
        <div className="flex flex-col items-center lg:items-start gap-3  " >
          <h1 className="workSans text-2xl md:text-4xl font-bold md:leading-[48px] leading-[38px]">
            Web Development BootCamp,{" "}
            <span className="text-[#8B52FF]">
              Become a Frontend developer in 8 weeks
            </span>
          </h1>
          <p>
            Learn to code, your Future starts Now. Start with beginner-friendly
            course in web Development. You'll learn HTML, CSS, JAVASCRIPT, GIT
            and GITHUB
          </p>
          <button onClick={()=> navigate('/register-for-bootcamp')} className="reg-contact w-[140px] md:w-[170px] h-12">
            Register
          </button>
        </div>
      </div>
      <img
        src={Hero}
        className="w-[95%] md:w-[75%] lg:w-[44%]  shadow-custom px-5   rounded-3xl "
      />
      <BackgroundGradient />
    </section>
  );
};
export default HeroSection;
