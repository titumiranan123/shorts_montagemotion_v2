"use client";
import Accordion from "@/components/Accordion";
import Bestoption from "@/components/Bestoption";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import Shortvideo from "@/components/Shortvideo";
import State from "@/components/State";
import Successstory from "@/components/Successstroy";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex  flex-col lg:gap-[120px]   gap-[0px]">
      <Header />
      <span className="lg:w-[1440px] w-full opacity-20 mx-auto h-[1px] bg-[#effe] lg:mt-[60px] md:mt-[80px] mt-[40px]"></span>
      <Shortvideo />
      <State />
      <Bestoption />
      <Successstory />
      <Accordion />
      <Pricing />
      <Footer />
      <div className="poppins max-w-[1240px] px-4 mx-auto text-white flex justify-center  lg:justify-between lg:flex-nowrap flex-wrap items-center md:text-[18px] gap-2 pb-4 leading-[25.6px] text-center text-[14px] mt-[120px]">
        <div className="flex gap-4 lg:flex-nowrap flex-wrap">
          <Link
            className="hover:underline"
            target="_blank"
            href={"/privacy-policy"}
          >
            Privacy Policy
          </Link>
          <Link
            className="hover:underline"
            target="_blank"
            href={"/terms-and-conditions"}
          >
            Terms & Conditions
          </Link>

          <Link
            className="hover:underline"
            target="_blank"
            href={"/refund-policy"}
          >
            Refund Policy
          </Link>
        </div>
        <p>&copy; 2024 Motion Montage. All Rights Reserved.</p>
      </div>
    </div>
  );
}
