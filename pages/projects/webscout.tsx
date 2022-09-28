import * as React from "react";
import type { NextPage } from "next";
import CloseNav from "../../components/navigation/CloseNav";
import Webscouthome from "../../public/images/webscout-home.png";
import WebscoutForm from "../../public/images/webscout-form.png";
import WebscoutDash from "../../public/images/webscout-dash.png";

const Webscout: NextPage = () => {
  return (
    <div className="container mx-auto p-8 text-black dark:text-[#f0f2f8]">
      <CloseNav />
      <div className="py-20 max-w-[700px] mx-auto">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
          <h2 className="font-bold text-3xl md:text-5xl text-black dark:text-[#f0f2f8]">
            Webscout
          </h2>
          <a className="underline block" href="https://webscout.vercel.app">
            Visit Webscout
          </a>
        </div>
        <h3 className="text-2xl font-medium text-black dark:text-[#f0f2f8] py-6">
          A public bookmark for resources I have found across the web.
        </h3>

        <div>
          <ul className="flex items-center flex-wrap gap-2">
            <li className="border dark:border-[#30363d] rounded-[30px] text-black dark:text-[#f0f2f8] px-4 mr-4">
              Web Application
            </li>
            <li className="border dark:border-[#30363d] rounded-[30px] text-black dark:text-[#f0f2f8] px-4 mr-4">
              React
            </li>
            <li className="border dark:border-[#30363d] rounded-[30px] text-black dark:text-[#f0f2f8] px-4 mr-4">
              Typescript
            </li>
            <li className="border dark:border-[#30363d] rounded-[30px] text-black dark:text-[#f0f2f8] px-4 mr-4">
              TailwindCSS
            </li>
          </ul>
        </div>
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

        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex-1 min-h-full">
            <img
              src={Webscouthome.src}
              alt="minlinks-homepage"
              className="hover:scale-150  rounded-sm"
            />
          </div>
          <div className="flex flex-col flex-1 gap-2">
            <img
              src={WebscoutDash.src}
              alt="minlinks-homepage"
              className="hover:scale-150 rounded-sm"
            />
            <img
              src={WebscoutForm.src}
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

        <h3 className="text-2xl font-bold text-black dark:text-[#f0f2f8] pt-6">
          Problems and Thought Process.
        </h3>

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

        <h3 className="text-2xl font-bold text-black dark:text-[#f0f2f8] pt-6">
          Lessons Learned.
        </h3>

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

        <h3 className="text-2xl font-bold text-black dark:text-[#f0f2f8] pt-6">
          Next Steps.
        </h3>

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

export default Webscout;
