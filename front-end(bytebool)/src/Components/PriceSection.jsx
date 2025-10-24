import { useNavigate } from "react-router"

const PriceSection = () => {
  const navigate = useNavigate()
  return (
    <section className="bg-[#231046] relative py-5 px-10 flex flex-col gap-y-7 justify-center items-center">
      <h2 className="w-[90%]  lg:w-[60%] font-semibold text-xl  md:text-3xl text-center text-[#F0F1F3]">
        Learn web development at a very Affordable Price
      </h2>

      <div className=" flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col justify-start items-start gap-4  rounded-xl bg-[#f0f1f3]/30 px-5 py-7 w-[300px] h-[300px]">
        <span className="bg-[#231046] text-[#f0f1f3] py-2 px-5 font-semibold  max-w-[70%] shadow-2xl shadow-fuchsia-900 rounded-4xl">Regular</span>

        <div className="text-[#f0f1f3]">
          
          <ul className="list  p-2">
            <li className="">
                 Cost No longer  &nbsp; <span className=" text-[23px] bg-[#231046]/80  rounded"><span className="line-through">N</span>100,000+
        </span>
        <span className="w-[120px] bg-red-700 h-0.5 relative -top-8.5 left-30 inline-block rotate-5"></span>
              </li>  
              <li className="">
                Regular cost Now: &nbsp;<br /><br />
          <span className="italic py-2 px-4 text-2xl bg-[#231046]  rounded-2xl"><span className="line-through">N</span>30,000
        
        </span>
              </li> 
          </ul>
        </div>
       
        </div>
        <div className="flex flex-col justify-start items-start gap-4 rounded-xl bg-[#f0f1f3]/30 px-5 py-7 w-[300px] h-[300px]">
        <span className="bg-[#231046] text-[#f0f1f3] py-2 px-5 font-semibold  max-w-[70%] shadow-2xl shadow-fuchsia-900 rounded-4xl">Early Bird</span>
        <div className="text-[#f0f1f3]">
          <ul className="list p-2">
            <li> Register on or before November 10, 2025 to enjoy the early-bird offer
          </li>
          <li>
             No longer &nbsp;  <span className=" text-2xl bg-[#231046]/80  rounded"><span className="line-through">N</span>30,000
        
        </span><span className="w-[100px] bg-red-700 h-0.5 relative -top-8.5 left-21 inline-block rotate-5"></span>
          </li>

           <li> 
            Now: &nbsp;
          <span className=" text-yellow-500 italic py-2 px-4 text-2xl bg-[#231046]  rounded-2xl"><span className="line-through">N</span>15,000
        
        </span>
          </li>
          </ul>
        </div>
        <p className="text-[#f0f1f3]">
        </p>
        </div>
      </div>
      <button onClick={()=> navigate('/register-for-bootcamp')} className="bg-[#8B52Ff] lg:self-end  w-[150px] text-[#F0F1F3] py-3 rounded-xl ">register now</button>
    </section>
  )
}
export default PriceSection