import React from "react";
import RequreIImage from "../assets/i8tgRHXx4oQ-SD 1.png";
import checked from "../assets/checked (2) 1.png";

function ReoquirementSection() {
  return (
    <div className="pt-16 mx-8 bg-[#072f57] mt-7">
      <div className="p-6 mx-8 md:flex justify-between items-start gap-10">
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img src={RequreIImage} alt="Requirement" className="w-full md:w-auto" />
        </div>
        <div className="md:w-1/2 flex justify-start items-center">
          <div>
            <div className="flex items-center gap-6 mb-6">
              <div className="text-[#eb7150] border-b-4 border-[#eb7150] font-bold text-xl">
                Buyer
              </div>
              <div className="font-bold text-white text-xl md:text-2xl">Supplier</div>
            </div>
            <div>
              <div className="flex gap-2 items-start flex-col">
                <div className="flex gap-2 items-center">
                  <img src={checked} alt="Checked" className="w-6 h-6" />
                  <div className="font-semibold text-lg md:text-xl text-white">
                    Post your requirements
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={checked} alt="Checked" className="w-6 h-6" />
                  <div className="font-semibold text-lg md:text-xl text-white">
                    Sit back for multiple suppliers to contact you.
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={checked} alt="Checked" className="w-6 h-6" />
                  <div className="font-semibold text-lg md:text-xl text-white">
                    Choose among the suppliers based on the ratings and reviews.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReoquirementSection;
