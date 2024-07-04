import React from "react";
import imageChecked from "../assets/Group.png";
import group from "../assets/Group 33.png";
import layer from "../assets/Layer_x0020_1.png";
import suplier from "../assets/edit (1) 1.png";
import hath from "../assets/hath.png";
import contact from "../assets/quote-request 1.png";

function CardComp() {
  return (
    <div className="pt-20 mx-16">
      <div className="text-center">
        <h1 className="font-bold text-2xl leading-10">How It Works ?</h1>
        <p className="text-light leading-7 mt-4">
          Buyers post their needs and review top suppliers, while suppliers
          complete profiles, connect with
          <br /> potential buyers, and build successful business relationships,
          sharing valuable feedback.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        <div className="bg-[#e8fbff] py-10 flex justify-center items-center flex-col">
          <div>
            <img src={group} alt="Select Your Role and Sign Up" />
          </div>
          <div className="mt-5">
            <p className="font-medium text-xl leading-5 text-center">
              Select Your Role and Sign Up
            </p>
          </div>
        </div>
        <div className="bg-white py-10 flex justify-center items-center flex-col">
          <div>
            <img src={imageChecked} alt="Buyers Post Your Requirements" />
          </div>
          <div className="mt-5">
            <p className="font-medium text-xl leading-5 text-center">
              Buyers Post Your Requirements
            </p>
          </div>
        </div>
        <div className="bg-[#e8fbff] py-10 flex justify-center items-center flex-col">
          <div>
            <img src={layer} alt="Review, Select, and Contact the Best Suppliers" />
          </div>
          <div className="mt-5">
            <p className="font-medium text-xl leading-5 text-center">
              Review, Select, and Contact the Best Suppliers
            </p>
          </div>
        </div>
        <div className="bg-white py-10 flex justify-center items-center flex-col">
          <div>
            <img src={suplier} alt="Suppliers Complete your profile and get notified for opportunities" />
          </div>
          <div className="mt-5">
            <p className="font-medium text-xl leading-5 text-center">
              Suppliers Complete your profile and get notified for opportunities
            </p>
          </div>
        </div>
        <div className="bg-[#e8fbff] py-10 flex justify-center items-center flex-col">
          <div>
            <img src={contact} alt="Contact to Buyers and Share your Quote for the service" />
          </div>
          <div className="mt-5">
            <p className="font-medium text-xl leading-5 text-center">
              Contact to Buyers and Share your Quote for the service
            </p>
          </div>
        </div>
        <div className="bg-white py-10 flex justify-center items-center flex-col">
          <div>
            <img src={hath} alt="Both the Parties can Connect and Make Business Leave a Feedback" />
          </div>
          <div className="mt-5">
            <p className="font-medium text-xl leading-5 text-center">
              Both the Parties can Connect and Make Business Leave a Feedback
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComp;
