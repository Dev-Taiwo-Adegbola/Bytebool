const BackgroundGradient = () => {
  return (
    <div className="  -z-1 ">
        <div className="absolute  w-[300px]  h-[300px] bg-gradient-to-bl from-[#8B52FF] via-white to-red-400 rounded-full -top-10 -right-10  blur-3xl"></div>
        <div className="absolute w-[300px]  h-[300px] bg-gradient-to-bl from-[#2C9ADE] via-white to-black rounded-full top-120 -right-10  blur-3xl"></div>
        <div className="absolute w-[300px]  h-[300px] bg-gradient-to-bl from-[#8B52FF] via-white to-red-400 rounded-full top-60 -left-10  blur-3xl"></div>
      </div>
  )
}
export default BackgroundGradient