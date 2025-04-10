import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Montage Motion",
  description: "Review our refund policy to learn about eligibility and procedures for requesting a refund on podcast-related purchases or subscriptions.",
};
const Refundpolicy = () => {
  
  return (
    <div className="max-w-[1240px] mx-auto px-2">
      <h1 className="mb-[60px] mt-[120px] text-center text-[36px] text-white ">
        Refund Policy
      </h1>
      <div className="openSans text-[#E4E8F7]">
        <div className="font-[400]  md:text-[16px] md:leading-[22.4px] text-[14px] leading-[20px] openSans">
          <p>Effective Date: 26 August, 2024</p>
          <p className="mt-4">
            At Montage Motion, we aim to deliver high-quality video editing
            services. However, if you&apos;re not satisfied with our services,
            here&apos;s how our refund policy works:
          </p>
        </div>
        <div className="flex flex-col gap-5 mt-5">
          <div>
            <h1 className="font-[700] md:text-[24px] md:leading-[33.6px]  premiumfont">
              1. Eligibility for Refunds
            </h1>
            <ul className="font-[400] md:text-[16px] md:leading-[22.4px] text-[14px] leading-[20px] list-disc openSans ms-6">
              <li>
                Request: Refund requests must be made within 3 days of the final
                product delivery.
              </li>
              <li>
                Conditions: Refunds are only available if the service was not
                delivered as agreed or does not meet the project specifications.
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-[700] md:text-[24px] md:leading-[33.6px]  premiumfont">
              2. Non-Refundable Services
            </h1>
            <p className="font-[400] md:text-[16px] md:leading-[22.4px] text-[14px] leading-[20px] openSans">
              {" "}
              Non-Refundable:Consultation fees, rush fees, and fully completed
              work are non-refundable.
            </p>
          </div>
          <div>
            <h1 className="font-[700] md:text-[24px] md:leading-[33.6px]  premiumfont">
              3. Partial Refunds
            </h1>
            <p className="font-[400] md:text-[16px] md:leading-[22.4px] text-[14px] leading-[20px] openSans">
              Partial Deliveries: If a project is only partially completed, a
              partial refund may be issued based on the work completed.
            </p>
          </div>
          <div>
            <h1 className="font-[700] md:text-[24px] md:leading-[33.6px]  premiumfont">
              4. Refund Process
            </h1>
            <p className="font-[400] md:text-[16px] md:leading-[22.4px] text-[14px] leading-[20px] openSans">
              Review: We will review your refund request and notify you of our
              decision within 7 business days.
            </p>
            <p className="font-[400] md:text-[16px] md:leading-[22.4px] text-[14px] leading-[20px] openSans">
              Issuance: Approved refunds will be processed to the original
              payment method.
            </p>
          </div>
          <div>
            <h1 className="font-[700] md:text-[24px] md:leading-[33.6px]  premiumfont">
              5. Contact Us
            </h1>
            <p className="font-[400] md:text-[16px] md:leading-[22.4px] text-[14px] leading-[20px] openSans">
              For refund requests or questions, contact us at:
            </p>
            <p className="font-[400] md:text-[16px] md:leading-[22.4px] text-[14px] leading-[20px] openSans mt-2">
              Montage Motion <br />
              Email: imonofficial@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refundpolicy;
