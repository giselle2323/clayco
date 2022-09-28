import * as React from "react";
import type { NextPage } from "next";
import CloseNav from "../../components/navigation/CloseNav";
import MinlinksHome from "../../public/images/minlinks-home.png";
import MinlinksDash from "../../public/images/minlinks-dash.png";
import MinlinksPost from "../../public/images/minlinks-post.png";
const Minlinks: NextPage = () => {
  return (
    <div className="container mx-auto p-8 text-black dark:text-[#f0f2f8] font-cabinet">
      <CloseNav />
      <div className="py-20 max-w-[700px] mx-auto">
        <div className="flex flex-col md:flex-row gap-2 md:items-center justify-between">
          <h2 className="font-bold text-3xl md:text-5xl text-black dark:text-[#f0f2f8]">
            Minlinks
          </h2>
          <a className="underline block" href="https://Minlinks.vercel.app/">
            Visit Minlinks
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
            <li className="border dark:border-[#30363d] rounded-[30px] text-black dark:text-[#f0f2f8] px-4 mr-4">
              Auth0
            </li>
          </ul>
        </div>
        <p className="text-lg text-black dark:text-[#f0f2f8] py-8">
          Minlinks was a web application developed during the Auth0 X Hashnode
          Hackathon. I surf the web a lot, this habit has led me to finding very
          cool things around the web. I wanted to have a public collection so I
          could share to a large audience, this resulted to me building
          Minlinks.
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 min-h-full">
            <img
              src={MinlinksHome.src}
              alt="minlinks-homepage"
              className="hover:scale-150  rounded-sm"
            />
          </div>
          <div className="flex flex-col flex-1 gap-2">
            <img
              src={MinlinksDash.src}
              alt="minlinks-homepage"
              className="hover:scale-150 rounded-sm"
            />
            <img
              src={MinlinksPost.src}
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
            <li>Authentication</li>
            <li>Comment Feature</li>
            <li>Like Feature</li>
          </ul>
          There was a challenge of syncing Auth0 logged in user to Supabase,
          Managing tables with the right priviledges on Supabase using SQL
          commands. Persisting data in NextJS for component sharing the same
          layout.
        </p>

        <h3 className="text-2xl font-bold text-black dark:text-[#f0f2f8] pt-6">
          Lessons Learned.
        </h3>

        <p className="text-lg text-black dark:text-[#f0f2f8] py-8">
          Learning how to handle authentication was a great experience for me,
          handling form state using formik was a cool experience as well.
          Learning how to handle data fetching effectively using methods like
          getServerSideProps was a cool experience as well.
        </p>
      </div>
    </div>
  );
};

export default Minlinks;
