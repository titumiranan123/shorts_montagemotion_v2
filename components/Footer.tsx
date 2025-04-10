import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="max-w-[1240px] lg:px-0 px-4 mx-auto mt-20 pb-4 rounded-[10px] ">
      <div className="bg-[#0E141E] px-5 md:px-8 md:py-10 lg:px-[72px] rounded-[10px] flex justify-between items-center py-5  lg:w-[1200px] lg:h-[244px] lg:flex-nowrap flex-wrap md:gap-10 lg:gap-6 gap-6 ">
        <div className="flex flex-col lg:gap-4 gap-4">
          <h1 className="font-poppins font-[700] text-[26px]  leading-[28px] md:text-[48px] md:leading-[50px] text-white">
            Have a shorts to edit ?
          </h1>
          <p className="ptag md:mt-0 mt-1 text-white">
            We minimize your workload by editing your short-form video for
            yourself so <br className="lg:block hidden" /> that you can focus on
            your other works .
          </p>
        </div>
        <div>
          <Link
            href={"https://calendly.com/imonofficial2/30min?month=2024-07"}
            target="_blank"
            className="bg-[#25AAE1] py-4 px-6 text-white rounded-[16px] ptag"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
