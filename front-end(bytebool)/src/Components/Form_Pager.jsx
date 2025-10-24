const Form_Pager = ({formslide}) => {
  return (
    <div className="bg-white/80 px-3 rounded-full mb-5">
        <div className="mb-10 border-b-2    border-[#8B52FF] flex justify-between w-[300px] md:w-[400px]">
        <span className={`border-2  border-[#8B52FF] outline-2 outline-white  font-semibold  size-9 rounded-full translate-y-[50%] grid place-items-center ${formslide === 'one' ? 'bg-[#8b52ff] text-white': 'bg-white text-[#8B52FF]' }`}>1</span>
        <span className={`border-2  border-[#8B52FF] outline-2 outline-white  font-semibold  size-9 rounded-full translate-y-[50%] grid place-items-center ${formslide === 'two' ? 'bg-[#8b52ff] text-white': 'bg-white text-[#8B52FF]' }`}>2</span>
        <span className={`border-2  border-[#8B52FF] outline-2 outline-white  font-semibold  size-9 rounded-full translate-y-[50%] grid place-items-center ${formslide === 'three' ? 'bg-[#8b52ff] text-white': 'bg-white text-[#8B52FF]' }`}>3</span>
    </div>
    </div>
  )
}
export default Form_Pager