import { Link } from "react-router"
import bytebool_logo from "../../public/bytebool.png";

const Footer = () => {
  return (
   <footer className="bg-[#231046]   px-10 md:px-20 py-3 flex  flex-col lg:flex-row gap-y-4 justify-between items-center  ">
      <div className=" flex items-center gap-2">
        <img src={bytebool_logo} alt="bytebool_logo" className="w-[40px]" />
        <p className="text-white font-semibold text-lg workSans ">Byteb<span className="text-[#8B52FF]">oo</span>l</p>
      </div>

      <div className={`flex flex-col items-center gap-10 text-white lg:text-lg text-sm `}>
        <ul className="flex  justify-center max-lg:gap-7 lg:flex-row gap-4 items-center">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={""}>About</Link>
          </li>
          <li>
            <Link to={""}>Service</Link>
          </li>
          <li>
            <Link to={""}>Learn Code</Link>
          </li>
          
        </ul>
        <p>copyright Bytebool &copy; {new Date().getFullYear()}</p>
      </div>
      
    </footer>
  )
}
export default Footer