import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function SignupPage() {
  return (
    <div className="pt-[5rem] mx-[4rem] max-xl:mx-[1rem] md:flex justify-between p-6">
      <div className=" md:w-1/2">
        <div className="">
          <h1 className="text-3xl font-bold leading-8">
            Ready to dive into
            <span className="text-[#271555] leading-8">HABOT?</span>{" "}
          </h1>
        </div>
        <div className=" mt-6 py-4">
          <p className=" leading-8 md:text-center text-justify"> 
            Signing up with HABOT opens the door to a world of new opportunities
            and potential for business growth. Gain access to a vibrant
            community of like-minded individuals, unlock valuable resources, and
            take the first step towards realizing your entrepreneurial dreams.
          </p>
        </div>
        <div className=" bg-[#00732f] w-1/3 text-white text-center text-base flex justify-center items-center py-2 gap-5 mb-4  sm:rounded-md">
            <button className="">Sign up Today</button>
            <IoIosArrowRoundForward size={30}/>
        </div>
      </div>
      <div className=" grid grid-cols-2 items-center gap-5 sm:mt-4">
        <div className=" border border-[#e7760d] font-medium text-base place-items-center  text-center w-40 py-2 rounded-md">Abu Dhabi</div>
        <div className="border border-[#e7760d] font-medium text-base place-items-center  text-center w-40 py-2 rounded-md">Dubai</div>
        <div className="border border-[#e7760d] font-medium text-base place-items-center  text-center w-40 py-2 rounded-md">Sarjaha & Ajaman</div>
        <div className="border border-[#e7760d] font-medium text-base place-items-center  text-center w-40 py-2 rounded-md">Fujairah</div>
        <div className="border border-[#e7760d] font-medium text-base place-items-center  text-center w-40 py-2 rounded-md">Ras al khaimah</div>
        <div className="border border-[#e7760d] font-medium text-base place-items-center  text-center w-40 py-2 rounded-md">Umm al Quwain</div>
      </div>
    </div>
  );
}

export default SignupPage;
