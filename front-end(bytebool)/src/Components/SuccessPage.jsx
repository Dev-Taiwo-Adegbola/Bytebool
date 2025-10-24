import { useNavigate } from "react-router";
import BackgroundGradient from "./BackgroundGradient";

const SuccessPage = ({User}) => {
    const navigate = useNavigate()
  return (
    <div className=" relative overflow-x-clip flex flex-col items-center pt-14 gap-5 mb-8">
      <h3 className="text-xl font-semibold text-[#8B52FF] text-center mb-4">
        Submission Successful 🎉🎉
      </h3>

      <div className="max-w-[400px] border border-[#8B52FF] flex items-center justify-center gap-3 md:gap-10 rounded-xl py-2 text-md bg-[#8B52FF]/10 p-4 text-center ">
        <p>
         Congratulations {User}, You have Successfully submitted a registration for the Bytebool Web
          Development BootCamp 1.0, Kindly Click the Button below to join the
          Community for more updates
        </p>
      </div>
        <button onClick={()=> window.location.href='https://chat.whatsapp.com/K0NJ3GkAxCA4jzIQ27TIID?mode=ems_wa_t'} className="rounded-xl bg-green-950 text-white px-6 py-2">
          Join Community
        </button>
         <BackgroundGradient />
    </div>
  );
};
export default SuccessPage;
