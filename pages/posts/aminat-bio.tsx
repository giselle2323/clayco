import * as React from "react";
import type { NextPage } from "next";

import CloseNav from "../../components/navigation/CloseNav";
const TechCareer: NextPage = () => {
  return (
    <div className="container mx-auto p-8 font-cabinet">
      <CloseNav />
      <div className="py-20 max-w-[700px] mx-auto">
        <h2 className="font-bold text-4xl text-black dark:text-[#f0f2f8] py-6 text-center">
          Aminat's Bio
        </h2>
        <p className="text-lg text-black dark:text-[#f0f2f8] py-8">
          My name is Aminat, I currently live in Nigeria and I work at{" "}
          <a
            href="https://mosol.co/"
            target="_blank"
            className="underline text-gray-600"
          >
            Mosol Agency
          </a>
          , a web development agency based in Mexico focused on creating and
          developing beautiful digital web experiences. My real programming journey started in 2018 when I was in the final year of studying at
          the University. I learnt programming by training myself and attending
          a 3 months bootcamp in 2018. I further intensified my learning through
          open-source contributions, documentations, and blog posts.
        </p>
        <h3 className="text-2xl font-bold text-black dark:text-[#f0f2f8] py-4">
          Work
        </h3>
        <p className="text-lg text-black dark:text-[#f0f2f8] py-4">
          My formal work experience started in February, 2019 where I got an
          intern position at a health startup in Nigeria.
          <ol className="text-lg text-black dark:text-[#f0f2f8] py-4 list-disc px-6">
            <li>RelianceHMO - February, 2019 - May, 2022</li>
            <li>Norm Thormas Agency - May, 2022 - August, 2022</li>
            <li>Mosol Agency - May, 2022 - present.</li>
          </ol>
        </p>
        <h3 className="text-2xl font-bold text-black dark:text-[#f0f2f8] py-4">
          My Stack
        </h3>
        <p className="text-lg text-black dark:text-[#f0f2f8] py-4">
          Over the past 3 years, I have focused on building web experiences
          using HTML, CSS, JavaScript. I'm experienced with Javascript
          frameworks such has React, NextJS, React Native. I also use typed
          languaages like TypeScript to achieve clean code. I'm also experienced
          with managing states in Web Applications using libraries like Redux,
          Redux-Saga.
        </p>

        <h3 className="text-2xl font-bold text-black dark:text-[#f0f2f8] py-4">
          My Core Values
        </h3>
        <ul className="text-lg text-black dark:text-[#f0f2f8] py-4 list-disc px-6">
          <li>Transparency</li>
          <li>Innovation</li>
          <li>Discipline</li>
          <li>Love</li>
        </ul>

        <h3 className="text-2xl font-bold text-black dark:text-[#f0f2f8] py-4">
          Outside Work
        </h3>
        <p className="text-lg text-black dark:text-[#f0f2f8] py-4">
          When it comes to offline activities, I hugely enjoy knitting,
          listening to good music . Besides that, I would love to explore
          traveling, and I'm looking forward to visit several places in the
          future.
        </p>

        <p className="text-lg text-black dark:text-[#f0f2f8] py-4">
          You can find me on <a  className="underline text-gray-600" href="https://twitter.com/yakubu_jumoke" target="_blank">Twitter</a>, <a  className="underline text-gray-600" href="https://github.com/giselle2323" target="_blank">Github</a>, and <a  className="underline text-gray-600" href="https://www.linkedin.com/in/aminat/">LinkedIn</a>.
          My email address is <a  className="underline text-gray-600" href="mailto:yakubuaminat94@gmail.com">yakubuaminat94@gmail.com</a>

        </p>
      </div>
    </div>
  );
};

export default TechCareer;
