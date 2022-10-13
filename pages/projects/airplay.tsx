import * as React from "react";

import type { NextPage } from "next";
import CloseNav from "../../components/navigation/CloseNav";
import AirplayDash from "../../public/images/airplay-dash.png";
const Airplay: NextPage = () => {
  return (
    <div className="container mx-auto p-8 text-black dark:text-[#f0f2f8] font-cabinet">
      <CloseNav />
      <div className="py-20 max-w-[700px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
          <h2 className="font-bold text-3xl md:text-5xl text-black dark:text-[#f0f2f8]">
            Airplay
          </h2>
          <a className="underline block" href="https://airplayy.vercel.app/">
            Visit Airplay
          </a>
        </div>
        <h3 className="text-2xl font-medium text-black dark:text-[#f0f2f8] py-6">
          A web application for finding cool spotify plalists across diffrent
          music genres.
        </h3>

        <div className="">
          <ul className="flex flex-wrap gap-2 ">
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
            <li className="border dark:border-[#30363d] rounded-[30px] text-black dark:text-[#f0f2f8] px-4 mr-4">
              Airtable
            </li>
          </ul>
        </div>
        <p className="text-lg text-black dark:text-[#f0f2f8] py-8">
          I'm a music lover and I always enjoy exploring different genres of
          music. I wanted a place where I could explore different genres of
          music. I use spotify for recommendations but I wanted more diversity,
          so I decided to sought after playlists from different social media
          platoforms. I had a whole lot of new playlists and I wanted to share
          with music lovers like me, hence this web application was brought to
          life.
        </p>

        <div className="flex gap-2">
          <div className="flex-1 min-h-full">
            <img
              src={AirplayDash.src}
              alt="minlinks-homepage"
              className="hover:scale-150  rounded-sm"
            />
          </div>
          {/* <div className="flex flex-col flex-1 gap-2">
            <img src={AsoebiSectionA.src} alt="minlinks-homepage" className="hover:scale-150 rounded-sm"/>
            <img src={AsoebiSectionB.src} alt="minlinks-homepage" className="hover:scale-150 rounded-sm" />
          </div> */}
        </div>
        <p className="italic text-center text-gray-500 py-4">
          (Hover images to scale)
        </p>

        <h3 className="text-2xl font-bold text-black dark:text-[#f0f2f8] pt-6">
          Goal
        </h3>

        <div className="text-lg text-black dark:text-[#f0f2f8] py-8">
          This project was divided into two main development phases.
          <ul className="px-4 list-disc">
            <li>Developing a dashboard showing different playlists.</li>
            <li>
              Developing a feature that allows users to see playlist based on
              mood.
            </li>
          </ul>
        </div>

        <h3 className="text-2xl font-bold text-black dark:text-[#f0f2f8] pt-6">
          Problems and Thought Process.
        </h3>

        <p className="text-lg text-black dark:text-[#f0f2f8] py-8">
          Airplay development is currently in phase one, I initially stored the
          playlists collection into an airtable databse, Airtable has an API
          that can be used query data from the database and this is what is in
          use currently. While developing I had challenges with the project
          structure and layout, I experienced  few challenges with using standard
          types as the project was built in Typescript and also querying the database while applying certain filters using the Airtable's API.
        </p>

        <h3 className="text-2xl font-bold text-black dark:text-[#f0f2f8] pt-6">
          Lessons Learned.
        </h3>

        <p className="text-lg text-black dark:text-[#f0f2f8] py-8">
          Developing Airplay has made me more effective at using Typescript to
          build applications with clean code. I also learnt to use resuable
          components throughout the project. Using standard accessiblity rules
          was something I put into use in this project.
        </p>

        <h3 className="text-2xl font-bold text-black dark:text-[#f0f2f8] pt-6">
          Next Steps.
        </h3>

        <p className="text-lg text-black dark:text-[#f0f2f8] py-8">
          Airplay is currently going into phase two and would be opened sourced
          after phase two has been completed.
        </p>
      </div>
    </div>
  );
};

export default Airplay;
