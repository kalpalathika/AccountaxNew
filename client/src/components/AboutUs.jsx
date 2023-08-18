import React from "react";
import finance from "../assets/finance.jpg";

const AboutUs = () => {
  return (
    <div id="aboutUs" className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={finance} alt="/" />
        <div className="flex flex-col justify-center">
          {/* <p className={`text-[${red-500}] font-bold`}>WE ARE A FINANCIAL PLANNING CENTER</p> */}
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold text-[#201630] py-2">
            We Are Leaders In Financial Planning
          </h1>
          <p className="pb-2">
            For over 50 years individuals and businesses have relied on
            Accountax International Inc. in Niagara Falls for all of their
            accounting needs. When it comes to you or your business's money, you
            want to make sure that it's in good hands. Even small errors in your
            books can add up, and that's why it's in your best interest to have
            a professional take care of your accounting.
          </p>
          <p className="pb-2 md:text-base sm:text-md">
            The experienced team at Accountax International Inc. includes
            chartered accountants who have extensive training in accounting.
            Over the four decades the firm has been serving the Niagara Region,
            it has earned an excellent reputation for being reliable, accurate
            and reputable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
