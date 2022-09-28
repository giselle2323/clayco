import * as React from "react";

import type { NextPage } from "next";
import CloseNav from "../../components/navigation/CloseNav";
import Webscouthome from "../../public/images/webscout-home.png";
import WebscoutForm from "../../public/images/webscout-form.png";
import WebscoutDash from "../../public/images/webscout-dash.png";

const Webscout: NextPage = () => {
  return (
    <div className="container mx-auto p-8 text-black dark:text-[#f0f2f8] font-cabinet">
      <CloseNav />
      <div className="py-20 max-w-[700px] mx-auto">
        <div className="flex flex-col md:flex-row gap-2 md:items-center justify-between">
          <h2 className="font-bold text-3xl md:text-5xl text-black dark:text-[#f0f2f8]">
            Webscout
          </h2>
          <a className="underline block" href="https://webscout.vercel.app">
            Visit Webscout
          </a>
        </div>
        <h3 className="text-2xl font-medium text-black dark:text-[#f0f2f8] py-6">
          A collection of free resources for web development.
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
          Webscout was a web application developed during the hacktoberfest
          season 2021. A small startup in india Fueler wanted to build a
          collection of free web development resources. I decided to contribut
          to the project by building this web applications to showcase the
          resources.
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
          Webstack Explanation
        </h3>

        <p className="text-lg text-black dark:text-[#f0f2f8] py-8">
          I chose NextJS for this explanation because the developer experience
          was smooth and there were more advantages as to using the
          create-react-app package. Better data fetching methods, hot reload and
          many more made it my go to choice. React hooks, context was used to
          manage state. vercel was used as choice of deployment becuase of
          reliabilty and speed.
        </p>

        <h3 className="text-2xl font-bold text-black dark:text-[#f0f2f8] pt-6">
          Problems and Thought Process.
        </h3>

        <p className="text-lg text-black dark:text-[#f0f2f8] py-8">
          To start developing this application, I used pen an paper to break the
          application into smaller features e.g
          <ul className="px-4 list-disc">
            <li>Landing page development</li>
            <li>Add a resource feature</li>
            <li>Filter by category feature</li>
          </ul>
          Persisting data in NextJS for component sharing the same layout and
          querying the database while applying certain filters using the
          Airtable's API.
        </p>

        <h3 className="text-2xl font-bold text-black dark:text-[#f0f2f8] pt-6">
          Lessons Learned.
        </h3>

        <p className="text-lg text-black dark:text-[#f0f2f8] py-8">
          Developing Webscout has made me more effective at using Typescript to
          build applications with clean code. I also learnt to use resuable
          components throughout the project. Using standard accessiblity rules
          was something I put into use in this project.
        </p>

        <h3 className="text-2xl font-bold text-black dark:text-[#f0f2f8] pt-6">
          Next Steps.
        </h3>

        <p className="text-lg text-black dark:text-[#f0f2f8] py-8">
          Webscout is currently open-sourced, so I'm looking forward to see
          contributions from other engineers all over the world.
        </p>
      </div>
    </div>
  );
};

export default Webscout;
