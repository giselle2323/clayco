import * as React from "react";

import type { NextPage } from "next";
import Head from "next/head";
import { useTheme } from "next-themes";
import { Responsive, WidthProvider } from "react-grid-layout";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Memoji from "../public/images/memoji-1.png";
import Asoebi from "../public/images/asoebi-frame.png";
import Moscolino from "../public/images/moscolino-frame.png";
import Webscout from "../public/images/webscout-frame.png";
import Twitter from "../public/images/twitter.svg";
import LinkedIn from "../public/images/linkedin.svg";
import Profile from "../public/images/profile.jpeg";
import Github from "../public/images/github.svg";
import Calendly from "../public/images/calendar.svg";

import NavBar from "../components/Nav";

const Home: NextPage = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const ResponsiveGridLayout = WidthProvider(Responsive);

  const layout = [
    { i: "box-a", x: 0, y: 0, w: 2, h: 1.5 },
    { i: "box-b", x: 2, y: 0, w: 1, h: 1 },
    { i: "box-c", x: 0, y: 1, w: 1, h: 1.5 },
    { i: "box-d", x: 1, y: 1, w: 1, h: 1 },
    { i: "box-e", x: 2, y: 1, w: 1, h: 1.5 },
    { i: "box-f", x: 0, y: 2, w: 1, h: 1 },
    { i: "box-g", x: 1, y: 2, w: 2, h: 1 },
    { i: "box-h", x: 0, y: 3, w: 1, h: 1.5 },
    { i: "box-i", x: 1, y: 3, w: 1, h: 1.5 },
    { i: "box-j", x: 2, y: 4, w: 1, h: 1 },
    { i: "box-k", x: 1, y: 4, w: 1, h: 0.45 },
    { i: "box-l", x: 2, y: 4, w: 1, h: 1 },
  ];

  const layouts = {
    lg: layout,
    md: layout,
    // sm: layout,
    // xs: layout,
    // xxs: layout
  };

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <DarkModeSwitch
          style={{ marginBottom: "2rem" }}
          checked={true}
          onChange={() => setTheme("light")}
          size={120}
        />
      );
    } else {
      return (
        <DarkModeSwitch
          style={{ marginBottom: "2rem" }}
          checked={false}
          onChange={() => setTheme("dark")}
          size={120}
        />
      );
    }
  };

  return (
    <div className="min-h-screen cabinet">
      <Head>
        <title>Portfolio Home Page </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-container">
        <NavBar />

        <main className="flex w-full flex-1 flex-col px-6 min-h-screen  text-black dark:text-white">
          <div className="h-96">
            <ResponsiveGridLayout
              layouts={layouts}
              cols={{ lg: 3, md: 3, sm: 3, xs: 1, xxs: 1 }}
              rowHeight={300}
              margin={[20, 20]}
              breakpoints={{ lg: 1000, md: 996, sm: 768, xs: 480, xxs: 0 }}
            >
              <div
                key="box-a"
                className="bg-white dark:bg-minLightBlack rounded-md px-8 py-6"
              >
                <img
                  src={Memoji.src}
                  alt="memoji"
                  className=" h-[107px] my-6"
                />
                <p className="max-w-[477px]">
                  I'm Aminat, a Frontend Engineer focused on building web
                  applications with React, React Native.
                </p>
              </div>
              <div
                key="box-b"
                className="bg-white dark:bg-minLightBlack rounded-md"
              >
                <img
                  src={Profile.src}
                  className="object-cover h-full w-full rounded-md"
                  alt="profile-picture"
                />
              </div>
              <div
                key="box-c"
                className="bg-white dark:bg-minLightBlack rounded-md"
              >
                <img
                  src={Moscolino.src}
                  className="object-cover h-full rounded-md"
                  alt="moscolino-project"
                />
              </div>
              <div
                key="box-d"
                className="bg-white dark:bg-minLightBlack rounded-md flex justify-center items-center"
                // style={{
                //   backgroundImage: `url(${Asoebi.src})`,
                //   backgroundSize: "cover",
                //   backgroundRepeat: "no-repeat",
                //   backgroundPosition: "center",

                // }}
              >
                <img
                  src={Twitter.src}
                  className="object-cover h-[100px] w-[110px]  rounded-md"
                  alt="twitter-logo"
                />
              </div>
              <div
                key="box-e"
                className=" bg-white dark:bg-minLightBlack  rounded-md flex justify-center items-center"
              >
                <img
                  src={Asoebi.src}
                  className="object-cover h-full rounded-md"
                  alt="asoebi-project"
                />
              </div>
              <div
                key="box-f"
                className="bg-white dark:bg-minLightBlack rounded-md flex justify-center items-center"
              >
                <img
                  src={LinkedIn.src}
                  className="object-cover h-[100px] w-[110px]  rounded-md"
                  alt="linkedin-logo"
                />
              </div>
              <div
                key="box-g"
                className="bg-white dark:bg-minLightBlack rounded-md flex justify-center items-center"
              >
                spotify
              </div>
              <div
                key="box-h"
                className="bg-white dark:bg-minLightBlack rounded-md flex items-center justify-center"
              >
                {/* <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  toggle
                </button> */}

                {/* <DarkModeSwitch
                  style={{ marginBottom: "2rem" }}
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                  size={120}
                /> */}
                {renderThemeChanger()}
              </div>
              <div
                key="box-i"
                className="bg-white dark:bg-minLightBlack rounded-md flex justify-center items-center"
              >
                <img
                  src={Webscout.src}
                  className="object-cover h-full w-full  rounded-md"
                  alt="webscout-project"
                />
              </div>
              <div
                key="box-j"
                className="bg-white dark:bg-minLightBlack rounded-md flex justify-center items-center"
              >
                <img
                  src={Github.src}
                  className="object-cover h-[100px] w-[110px]  rounded-md"
                  alt="github-logo"
                />
              </div>
              <div
                key="box-k"
                className="bg-white dark:bg-minLightBlack rounded-md flex justify-center items-center"
              >
                <img
                  src={Calendly.src}
                  className="object-cover h-[100px] w-[110px] w-full rounded-md"
                  alt="calendly-logo"
                />
              </div>
              <div
                key="box-l"
                className="bg-white dark:bg-minLightBlack rounded-md"
              >
                I
              </div>
            </ResponsiveGridLayout>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
