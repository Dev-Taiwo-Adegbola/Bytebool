import { useState } from "react";
import Form_Pager from "./Form_Pager";
import BackgroundGradient from "./BackgroundGradient";
import { useNavigate } from "react-router";

export const Form_section1 = ({
  fullname,
  gender,
  email,
  phoneNo,
  location,
  onSetFullname,
  onSetEmail,
  onSetPhoneNo,
  onSetGender,
  onSetLocation,
}) => {
  return (
    <div className=" mb-8">
      <h3 className="text-xl font-semibold text-[#8B52FF] text-center">
        Personal Details
      </h3>
      <div className=" flex flex-col gap-5 items-center pt-8">
        <input
          className=" outline-0 border rounded p-2 border-[#8B52FF]/80 min-w-[300px]"
          value={fullname}
          onChange={(e) => onSetFullname(e.target.value)}
          type="text"
          placeholder="Full Name"
        />
        <input
          className=" outline-0 border rounded p-2 border-[#8B52FF]/80 min-w-[300px]"
          value={email}
          onChange={(e) => onSetEmail(e.target.value)}
          type="email"
          placeholder="Email Address"
        />
        <input
          className=" outline-0 border rounded p-2 border-[#8B52FF]/80 min-w-[300px]"
          value={phoneNo}
          onChange={(e) => onSetPhoneNo(e.target.value)}
          type="tel"
          placeholder="WhatsApp Phone Number
"
        />
        <div className="  flex items-center justify-center gap-3 md:gap-10 rounded-xl py-2 text-lg bg-[#8B52FF]/10 p-2 text-center ">
          <input
            type="radio"
            name="gender"
            value="Male"
            id="Male"
            className="hidden"
            onChange={(e) => onSetGender(e.target.value)}
          />
          <input
            type="radio"
            name="gender"
            value="Female"
            id="Female"
            className="hidden"
            onChange={(e) => onSetGender(e.target.value)}
          />

          <label
            className={`${
              !gender
                ? "bg-[#8B52FF] text-[#f0f1f3] border border-[#8b52ff] "
                : " border border-[#8b52ff]/50"
            } px-3 py-1 rounded-2xl`}
          >
            Gender:
          </label>
          <label
            className={`${
              gender === "Male"
                ? "bg-[#8B52FF] text-[#f0f1f3] border border-[#8b52ff] "
                : " border border-[#8b52ff]/50"
            } w-[90px] px-2 py-1 rounded-2xl`}
            htmlFor="Male"
          >
            Male
          </label>
          <label
            className={`${
              gender === "Female"
                ? "bg-[#8B52FF] text-[#f0f1f3] border border-[#8b52ff] "
                : " border border-[#8b52ff]/50"
            } w-[90px] px-2 py-1 rounded-2xl`}
            htmlFor="Female"
          >
            Female
          </label>
        </div>
        <input
          className=" outline-0 border rounded p-2 border-[#8B52FF]/80 min-w-[300px]"
          value={location}
          onChange={(e) => onSetLocation(e.target.value)}
          type="text"
          placeholder="Location (City & State)"
        />
      </div>
    </div>
  );
};

export const Form_section2 = ({onSetIsExperienced, onSetComputerAccess, onSetWhyWeb, isExperienced, computerAccess, whyWeb,}) => {
  return (
    <div className=" mb-8">
      <h3 className="text-xl font-semibold text-[#8B52FF] text-center">
        Learning Background
      </h3>
      <div className=" flex flex-col gap-5 items-center pt-8">
        <label className="self-start -mb-2">
          Do you have experience before now?
        </label>
        <select onChange={(e)=> onSetIsExperienced(e.target.value)} value={isExperienced}
          id="experience"
          className=" outline-0 border rounded p-2 border-[#8B52FF]/80 min-w-[300px]"
        >
          <option value="">Select an option</option>
          <option value="Yes, I have basic experience">
            Yes, I have basic experience
          </option>
          <option value="No, I’m a complete beginner">
            No, I’m a complete beginner
          </option>
          <option value="A little, but I want to get better">
            A little, but I want to get better
          </option>
        </select>
        <label className="self-start -mb-2">
          Do you have Access to a Computer?
        </label>

        <select onChange={(e)=> onSetComputerAccess(e.target.value)} value={computerAccess} className=" outline-0 border rounded p-2 border-[#8B52FF]/80 min-w-[300px]">
          <option value="">Select an option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <label className="self-start -mb-2"></label>
        <textarea onChange={(e)=> onSetWhyWeb(e.target.value)} value={whyWeb}
          className="resize-none outline-0 border rounded p-2 border-[#8B52FF]/80 min-w-[300px] h-40"
          type="email"
          placeholder="Why do you want to learn web development?
"
        ></textarea>
      </div>
    </div>
  );
};

export const Form_section3 = () => {
  return (
    <div className=" mb-8">
      <h3 className="text-xl font-semibold text-[#8B52FF] text-center mb-4">
        Submit Registration Form
      </h3>

      <div className="max-w-[400px] border border-[#8B52FF] flex items-center justify-center gap-3 md:gap-10 rounded-xl py-2 text-md bg-[#8B52FF]/10 p-4 text-center ">
        <p>
          You are about to submit your registration, ensure all infomation are
          correct and all required feilds are not left empty
        </p>
      </div>
    </div>
  );
};

const Registration_Form = ({ onSetUser }) => {
  const [formslide, setFormslide] = useState("one");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [fullname, setFullname] = useState("");
  const [isExperienced, setIsExperienced] = useState("");
  const [computerAccess, setComputerAccess] = useState("");
  const [whyWeb, setWhyWeb] = useState("");
  const [err, setErr] = useState("");

  const navigate = useNavigate();
  const HandleSubmit = () => {
    let endpoint = "https://sheetdb.io/api/v1/r2154sq1y8hj4";
    const registerUserFunc = async () => {
      let userData = {
        fullname: fullname,
        email: email,
        phoneNo: phoneNo,
        gender: gender,
        location: location,
        isExperienced: isExperienced,
        computerAccess: computerAccess,
        whyWeb: whyWeb,
      };
      try {
        let response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
        let data = await response.json();
        console.log(data);
        navigate("/registration-successful");
      } catch (error) {
        console.log("There was an error.");
      } finally {
        setErr('')
        onSetUser(fullname.slice(0, fullname.indexOf(" ")));
        
      }
    };

    if (!email || !fullname || !phoneNo || !gender || !location) {
      setErr('please ensure all required fields are not empty')
    }else {setErr('')}
  };
  
  return (
    <div className=" relative overflow-x-clip p-10 flex flex-col items-center ">
      <h2 className="text-center text-[#8B52FF] mb-5 text-2xl font-semibold">
        BootCamp Registration Form
      </h2>
      <Form_Pager formslide={formslide} />
      <div>
        <p className="text-red-500 text-center">{err}</p>
        <form action="">
          {/* an iife */}
          {(() => {
            if (formslide === "one")
              return (
                <Form_section1
                  fullname={fullname}
                  email={email}
                  phoneNo={phoneNo}
                  gender={gender}
                  location={location}
                  onSetFullname={setFullname}
                  onSetEmail={setEmail}
                  onSetPhoneNo={setPhoneNo}
                  onSetGender={setGender}
                  onSetLocation={setLocation}
                />
              );
            else if (formslide === "two")
              return (
                <Form_section2
                  onSetIsExperienced={setIsExperienced}
                  onSetComputerAccess={setComputerAccess}
                  onSetWhyWeb={setWhyWeb}
                  isExperienced={isExperienced}
                  computerAccess={computerAccess}
                  whyWeb={whyWeb}
                />
              );
            else return <Form_section3 />;
          })()}
        </form>
        {formslide !== "one" ? (
          <button
            onClick={() => {
              if (formslide === "three") setFormslide("two");
              else if (formslide === "two") setFormslide("one");
            }}
            className="mr-5 bg-[#8B52FF] text-[#f0f1f3] border border-[#8b52ff] w-[90px] px-2 py-1 rounded-xl"
          >
            Back
          </button>
        ) : null}

        <button
          onClick={() => {
            if (formslide === "one") setFormslide("two");
            else if (formslide === "two") setFormslide("three");
            else HandleSubmit();
          }}
         
          className='bg-[#8B52FF] border-[#8b52ff]  text-[#f0f1f3] border  w-[90px] px-2 py-1 rounded-xl'
        >
          {formslide === "three" ? "Submit" : "Next"}
        </button>
      </div>
      <BackgroundGradient />
    </div>
  );
};
export default Registration_Form;
