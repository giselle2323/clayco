import * as React from "react";

import type { NextPage } from "next";
import CloseNav from "../../components/navigation/CloseNav";
import AsoebiHome from "../../public/images/asoebi-home.png";
import AsoebiSectionA from "../../public/images/asoebi-section1.png";
import AsoebiSectionB from "../../public/images/asoebi-section2.png";

const AsoebiQuarters: NextPage = () => {
  return (
    <div className="container mx-auto p-8 text-black dark:text-[#f0f2f8] font-cabinet">
      <CloseNav />
      <div className="py-20 max-w-[700px] mx-auto">
        <div className="flex flex-col md:flex-row gap-2 md:items-center justify-between">
          <h2 className="font-bold text-3xl md:text-5xl text-black dark:text-[#f0f2f8]">
            Asoebi Quarters
          </h2>
          <a className="underline block" href="https://asoebi-quarters.com">
            Visit Asoebi Quarters
          </a>
        </div>
        <h3 className="text-2xl font-medium text-black dark:text-[#f0f2f8] py-6">
          A website for an African Fabrics small business.
        </h3>

        <div className="">
          <ul className="flex items-center flex-wrap gap-2">
            <li className="border dark:border-[#30363d] rounded-[30px] text-black dark:text-[#f0f2f8] px-4 mr-4">
              HTML
            </li>
            <li className="border dark:border-[#30363d] rounded-[30px] text-black dark:text-[#f0f2f8] px-4 mr-4">
              CSS
            </li>
            <li className="border dark:border-[#30363d] rounded-[30px] text-black dark:text-[#f0f2f8] px-4 mr-4">
              JavaScript
            </li>
          </ul>
        </div>
        <p className="text-lg text-black dark:text-[#f0f2f8] py-8">
          Asoebi Quarters website project was aimed at bringing the business
          presence online. African fabrics are used all over the world, the
          business aimed to sell african fabrics worldwide hence a website was
          needed.
        </p>

        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex-1 min-h-full">
            <img
              src={AsoebiHome.src}
              alt="minlinks-homepage"
              className="hover:scale-150  rounded-sm"
            />
          </div>
          <div className="flex flex-col flex-1 gap-2">
            <img
              src={AsoebiSectionA.src}
              alt="minlinks-homepage"
              className="hover:scale-150 rounded-sm"
            />
            <img
              src={AsoebiSectionB.src}
              alt="minlinks-homepage"
              className="hover:scale-150 rounded-sm"
            />
          </div>
        </div>
        <p className="italic text-center text-gray-500 py-4">
          (Hover images to scale)
        </p>

        <h3 className="text-2xl font-bold text-black dark:text-[#f0f2f8] pt-6">
          Purpose and Goal.
        </h3>

        <div className="text-lg text-black dark:text-[#f0f2f8] py-8">
          This project was divided into two main phases.
          <ul className="px-4 list-disc">
            <li>The Design Phase</li>
            <li>The Development Phase</li>
          </ul>
        </div>

        <h3 className="text-2xl font-bold text-black dark:text-[#f0f2f8] pt-6">
          Problems and Thought Process.
        </h3>

        <p className="text-lg text-black dark:text-[#f0f2f8] py-8">
          Asoebi Quarters project had few challenges, ensuring the animations
          were of perfect timings was challenging. Adding SEO was a bit of challenge as I was new to it.
        </p>

        <h3 className="text-2xl font-bold text-black dark:text-[#f0f2f8] pt-6">
          Lessons Learned.
        </h3>

        <p className="text-lg text-black dark:text-[#f0f2f8] py-8">
          Standard web accessibility processes was something I learnt in great
          detail, I gained knowledge on how to add SEO to web pages and the
          importance of SEO in respect to search engines.
        </p>

        <h3 className="text-2xl font-bold text-black dark:text-[#f0f2f8] pt-6">
          Next Steps.
        </h3>

        <p className="text-lg text-black dark:text-[#f0f2f8] py-8">
          In the future, Asoebi Quarters would be enhanced to accomodate buying of fabrics directly from the website.
        </p>
      </div>
    </div>
  );
};

export default AsoebiQuarters;
