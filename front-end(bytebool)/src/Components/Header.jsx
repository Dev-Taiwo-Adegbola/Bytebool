import { Link } from "react-router";
import bytebool_logo from "../../public/bytebool.png";
import { useState } from "react";

const Header = () => {
  const [mobileMenuIsOpened, setMobileMenuIsOpened ] = useState(false)
  return (
    <header className="bg-[#231046]  px-10 md:px-20 py-3 flex justify-between items-center  ">
      <Link to={'/'}><div className=" flex items-center gap-2">
        <img src={bytebool_logo} alt="bytebool_logo" className="w-[40px]" />
        <p className="text-white font-semibold text-lg workSans ">Byteb<span className="text-[#8B52FF]">oo</span>l</p>
      </div></Link>

      <div className={` fixed ${mobileMenuIsOpened ? 'max-lg:translate-x-0': 'max-lg:translate-x-[120%]'}  z-9 inset-0 max-lg:bg-amber-50/40  backdrop-blur-2xl lg:static max-lg:flex max-lg:flex-col  lg:flex-row  items-center gap-2 text-white max-lg:text-lg  max-lg:text-black/80 transition-all duration-500`}>
        <ul className="flex flex-col max-lg:size-full justify-center max-lg:gap-10 lg:flex-row gap-4 items-center">
          <li>
            <Link onClick={()=> setMobileMenuIsOpened(false)} to={""}>Home</Link>
          </li>
          <li>
            <Link onClick={()=> setMobileMenuIsOpened(false)} to={""}>About</Link>
          </li>
          <li>
            <Link onClick={()=> setMobileMenuIsOpened(false)} to={""}>Service</Link>
          </li>
          <li>
            <Link onClick={()=> setMobileMenuIsOpened(false)} to={""}>Learn Code</Link>
          </li>
          <li className="reg-contact w-[90px] max-lg:w-[130px] max-lg:h-10">
            <Link onClick={()=> setMobileMenuIsOpened(false)} to={""}>Contact</Link>
          </li>
          
        </ul>
      </div>
      <button onClick={()=> setMobileMenuIsOpened(!mobileMenuIsOpened)} className={` ${mobileMenuIsOpened ? 'fixed right-20': 'static' } z-10 flex flex-col gap-2 lg:hidden cursor-pointer`}>
        <span className={`inline-block ${mobileMenuIsOpened ?'animate-rotate' : 'animate-rotateR'} bg-[#FEFFFD] w-[45px] h-1`}></span>
        <span className={`inline-block ${mobileMenuIsOpened ?'animate-rotatetwo' : 'animate-rotatetwoR'} bg-[#FEFFFD] w-[35px] h-1`}></span>
      </button>
    </header>
  );
};
export default Header;
