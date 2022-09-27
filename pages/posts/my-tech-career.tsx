import * as React from "react";
import type { NextPage } from "next";

import CloseNav from "../../components/navigation/CloseNav";
const TechCareer: NextPage = () => {
  
  return (
    <div className="container mx-auto p-8">
      <CloseNav />
      <div className="py-20 max-w-[700px] mx-auto">
        <h2 className="font-bold text-4xl text-black dark:text-[#f0f2f8] py-6 text-center">
          My Journey Into Tech
        </h2>
        <p className="text-lg text-black dark:text-[#f0f2f8] py-8">
          Growing up, I used computers for designing. I remember feeling
          overwhelmed, staring at the interface of a freshly-torrented copy of
          Photoshop CS4, and panic-clicking each tool in succession in a futile
          effort to acquaint myself with the software. At 13, with the internet
          as my guide, I gradually began to develop a multidisciplinary interest
          in digital design, evidenced by a growing collection of illegal design
          software on the family computer. I would enter logo contests on
          48hourslogo.com using Illustrator, design 3D intros for brands using
          Cinema 4D, create digital art for a budding YouTube channel using
          Photoshop, and edit video game montages using Sony Vegas and After
          Effects. It was an energising creative outlet that, a decade later,
          would lay the foundation for a career rooted in design.
        </p>
        <p className="text-lg text-black dark:text-[#f0f2f8] py-8">
          Growing up, I used computers for designing. I remember feeling
          overwhelmed, staring at the interface of a freshly-torrented copy of
          Photoshop CS4, and panic-clicking each tool in succession in a futile
          effort to acquaint myself with the software. At 13, with the internet
          as my guide, I gradually began to develop a multidisciplinary interest
          in digital design, evidenced by a growing collection of illegal design
          software on the family computer. I would enter logo contests on
          48hourslogo.com using Illustrator, design 3D intros for brands using
          Cinema 4D, create digital art for a budding YouTube channel using
          Photoshop, and edit video game montages using Sony Vegas and After
          Effects. It was an energising creative outlet that, a decade later,
          would lay the foundation for a career rooted in design.
        </p>
      </div>
    </div>
  );
};

export default TechCareer;
