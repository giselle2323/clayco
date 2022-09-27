import * as React from "react";

import type { NextPage } from "next";
import Head from "next/head";
import { useTheme } from "next-themes";
import { Responsive, WidthProvider } from "react-grid-layout";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Memoji from "../public/images/memoji.svg";
import Asoebi from "../public/images/asoebi-frame.png";
import Airplay from "../public/images/airplay-frame.png";
import Minlinks from "../public/images/minlinks-frame.png";
import Webscout from "../public/images/webscout-frame.png";
import Profile from "../public/images/profile.jpeg";
import Arrow from "../public/images/arrow.svg";

import NavBar from "../components/Nav";
import { Layout } from "../types/layout";

const Home: NextPage = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [currentNav, setCurrentNav] = React.useState("all");

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const getCurrentTheme = theme === "system" ? systemTheme : theme;

  const ResponsiveGridLayout = WidthProvider(Responsive);

  const allLayouts = {
    all: {
      layout: [
        { i: "box-intro", x: 0, y: 0, w: 2, h: 1 },
        { i: "box-img", x: 2, y: 0, w: 1, h: 1 },
        { i: "box-proj-a", x: 3, y: 0, w: 1, h: 2 },
        { i: "box-mode-toggle", x: 0, y: 1, w: 1, h: 1 },
        { i: "box-linkedin", x: 1, y: 1, w: 1, h: 1 },
        { i: "box-proj-b", x: 2, y: 1, w: 1, h: 2 },
        { i: "box-twitter", x: 3, y: 1, w: 1, h: 1 },
        { i: "box-proj-c", x: 0, y: 2, w: 2, h: 1 },
        { i: "box-note", x: 0, y: 3, w: 2, h: 1 },
        { i: "box-proj-d", x: 2, y: 3, w: 2, h: 1 },
      ],
      layoutxs: [
        { i: "box-intro", x: 0, y: 0, w: 2, h: 1 },
        { i: "box-img", x: 2, y: 0, w: 1, h: 1 },
        { i: "box-proj-a", x: 0, y: 0, w: 1, h: 2 },
        { i: "box-mode-toggle", x: 0, y: 1, w: 1, h: 1 },
        { i: "box-linkedin", x: 0, y: 2, w: 1, h: 1 },
        { i: "box-proj-b", x: 2, y: 1, w: 1, h: 2 },
        { i: "box-twitter", x: 3, y: 1, w: 1, h: 1 },
        { i: "box-proj-c", x: 0, y: 2, w: 2, h: 1 },
        { i: "box-note", x: 0, y: 3, w: 2, h: 1 },
        { i: "box-proj-d", x: 2, y: 3, w: 2, h: 1 },
      ],
    },
    work: {
      layout: [
        { i: "box-intro", x: 2, y: 3, w: 2, h: 1 },
        { i: "box-img", x: 2, y: 2, w: 1, h: 1 },
        { i: "box-proj-a", x: 3, y: 0, w: 1, h: 2 },
        { i: "box-mode-toggle", x: 0, y: 2, w: 1, h: 1 },
        { i: "box-linkedin", x: 1, y: 2, w: 1, h: 1 },
        { i: "box-proj-b", x: 2, y: 0, w: 1, h: 2 },
        { i: "box-twitter", x: 3, y: 1, w: 1, h: 1 },
        { i: "box-proj-c", x: 0, y: 1, w: 2, h: 1 },
        { i: "box-note", x: 0, y: 3, w: 2, h: 1 },
        { i: "box-proj-d", x: 0, y: 0, w: 2, h: 1 },
      ],
      layoutxs: [
        { i: "box-proj-a", x: 0, y: 0, w: 1, h: 2 },
        { i: "box-proj-b", x: 1, y: 0, w: 1, h: 2 },
        { i: "box-proj-c", x: 0, y: 1, w: 2, h: 1 },
        { i: "box-proj-d", x: 0, y: 3, w: 2, h: 1 },
        { i: "box-intro", x: 3, y: 4, w: 2, h: 1 },
        { i: "box-img", x: 2, y: 5, w: 1, h: 1 },
        { i: "box-mode-toggle", x: 0, y: 4, w: 1, h: 1 },
        { i: "box-linkedin", x: 0, y: 4, w: 1, h: 1 },
        { i: "box-twitter", x: 1, y: 4, w: 1, h: 1 },
        { i: "box-note", x: 0, y: 6, w: 2, h: 1 },
      ],
    },
    about: {
      layout: [
        { i: "box-intro", x: 0, y: 0, w: 2, h: 1 },
        { i: "box-img", x: 2, y: 0, w: 1, h: 1 },
        { i: "box-proj-a", x: 3, y: 0, w: 1, h: 2 },
        { i: "box-mode-toggle", x: 0, y: 1, w: 1, h: 1 },
        { i: "box-linkedin", x: 1, y: 1, w: 1, h: 1 },
        { i: "box-proj-b", x: 2, y: 1, w: 1, h: 2 },
        { i: "box-twitter", x: 3, y: 1, w: 1, h: 1 },
        { i: "box-proj-c", x: 0, y: 2, w: 2, h: 1 },
        { i: "box-note", x: 0, y: 3, w: 2, h: 1 },
        { i: "box-proj-d", x: 2, y: 3, w: 2, h: 1 },
      ],
      layoutxs: [
        { i: "box-intro", x: 0, y: 0, w: 2, h: 1 },
        { i: "box-img", x: 2, y: 0, w: 1, h: 1 },
        { i: "box-proj-a", x: 3, y: 0, w: 1, h: 2 },
        { i: "box-mode-toggle", x: 0, y: 1, w: 1, h: 1 },
        { i: "box-linkedin", x: 0, y: 1, w: 1, h: 1 },
        { i: "box-proj-b", x: 2, y: 1, w: 1, h: 1 },
        { i: "box-twitter", x: 0, y: 1, w: 1, h: 1 },
        { i: "box-proj-c", x: 0, y: 2, w: 2, h: 1 },
        { i: "box-note", x: 0, y: 2, w: 1, h: 1 },
        { i: "box-proj-d", x: 2, y: 3, w: 2, h: 1 },
      ],
    },
    contact: {
      layout: [
        { i: "box-intro", x: 0, y: 1, w: 2, h: 1 },
        { i: "box-img", x: 3, y: 3, w: 1, h: 1 },
        { i: "box-proj-a", x: 1, y: 4, w: 1, h: 2 },
        { i: "box-mode-toggle", x: 0, y: 3, w: 1, h: 1 },
        { i: "box-linkedin", x: 2, y: 0, w: 1, h: 1 },
        { i: "box-proj-b", x: 3, y: 3, w: 1, h: 2 },
        { i: "box-twitter", x: 4, y: 0, w: 1, h: 1 },
        { i: "box-proj-c", x: 0, y: 2, w: 2, h: 1 },
        { i: "box-note", x: 0, y: 0, w: 2, h: 1 },
        { i: "box-proj-d", x: 2, y: 3, w: 2, h: 1 },
      ],
      layoutxs: [
        { i: "box-intro", x: 0, y: 4, w: 2, h: 1 },
        { i: "box-img", x: 3, y: 3, w: 1, h: 1 },
        { i: "box-proj-a", x: 1, y: 4, w: 1, h: 2 },
        { i: "box-mode-toggle", x: 0, y: 3, w: 1, h: 1 },
        { i: "box-linkedin", x: 2, y: 0, w: 1, h: 1 },
        { i: "box-proj-b", x: 3, y: 3, w: 1, h: 2 },
        { i: "box-twitter", x: 0, y: 0, w: 1, h: 1 },
        { i: "box-proj-c", x: 0, y: 2, w: 2, h: 1 },
        { i: "box-note", x: 0, y: 1, w: 2, h: 1 },
        { i: "box-proj-d", x: 2, y: 3, w: 2, h: 1 },
      ],
    },
  };

  const getLayout = (nav: string) => {
    let layout: { layout: any; layoutxs: any };
    switch (nav) {
      case "all":
        layout = allLayouts.all;
        break;
      case "work":
        layout = allLayouts.work;
        break;
      case "about":
        layout = allLayouts.about;
        break;
      case "contact":
        layout = allLayouts.contact;
        break;
      default:
        layout = allLayouts.all;
    }
    return layout;
  };

  const layouts = {
    lg: getLayout(currentNav).layout,
    md: getLayout(currentNav).layout,
    // sm: layout,
    xs: getLayout(currentNav).layoutxs,
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
        <NavBar setCurrentNav={setCurrentNav} currentNav={currentNav} />

        <main className="flex w-full flex-1 flex-col min-h-screen md:px-6  text-black dark:text-white">
          {/* change height */}
          <div className="h-full">
            <ResponsiveGridLayout
              layouts={layouts}
              cols={{ lg: 4, md: 4, sm: 4, xs: 2, xxs: 1 }}
              rowHeight={300}
              margin={[20, 20]}
              breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
              useCSSTransforms
              isResizable={false}
            >
              <div
                key="box-intro"
                className={`bg-white dark:bg-minLightBlack/30 dark:border dark:border-[#21262c] rounded-[32px] px-8 py-6 ${
                  currentNav === "all" || currentNav === "about"
                    ? "opacity-100"
                    : "opacity-25"
                } `}
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
                key="box-img"
                className={`bg-white dark:bg-minLightBlack/30 dark:border dark:border-[#21262c] rounded-[32px] ${
                  currentNav === "all" || currentNav === "about"
                    ? "opacity-100"
                    : "opacity-25"
                } `}
              >
                <img
                  src={Profile.src}
                  className="object-cover h-full w-full rounded-[32px]"
                  alt="profile-picture"
                />
              </div>
              <div
                key="box-proj-a"
                className={`bg-[#f1c283] dark:bg-minLightBlack/30 dark:border dark:border-[#21262c] rounded-[32px] card relative flex justify-center items-center ${
                  currentNav === "all" || currentNav === "work"
                    ? "opacity-100"
                    : "opacity-25"
                }`}
              >
                <img
                  src={Minlinks.src}
                  className="rounded-md"
                  alt="asoebi-project"
                />

                <a
                  className="rounded-full h-10 w-auto absolute bottom-7 bg-white border border-white left-7 flex items-center justify-center p-4 arrow-link gap-2"
                  href="https://minlinks.vercel.app/"
                  target="_blank"
                >
                  <span className="text-black">Minlinks</span>
                  <img
                    src={Arrow.src}
                    className="rounded-md"
                    alt="asoebi-project"
                  />
                </a>
              </div>
              <div
                key="box-mode-toggle"
                className={`bg-white dark:bg-minLightBlack/30 dark:border dark:border-[#21262c] rounded-[32px] flex justify-center items-center ${
                  currentNav === "all" ? "opacity-100" : "opacity-25"
                }`}
              >
                {renderThemeChanger()}
              </div>
              <div
                key="box-linkedin"
                className={`bg-[#6886C5] dark:bg-minLightBlack/30 dark:border dark:border-[#21262c] relative card  rounded-[32px] flex justify-center items-center ${
                  currentNav === "all" || currentNav === "contact"
                    ? "opacity-100"
                    : "opacity-25"
                }`}
              >
                {getCurrentTheme === "dark" ? (
                  <svg
                    className="linkedin-icon h-[100px] w-[110px]"
                    width="75.121"
                    height="61.052"
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.98 2.5C4.98 3.881 3.87 5 2.5 5C1.13 5 0.02 3.881 0.02 2.5C0.02 1.12 1.13 0 2.5 0C3.87 0 4.98 1.12 4.98 2.5ZM5 7H0V23H5V7ZM12.982 7H8.014V23H12.983V14.601C12.983 9.931 19.012 9.549 19.012 14.601V23H24V12.869C24 4.989 15.078 5.276 12.982 9.155V7Z"
                      fill="white"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="linkedin-icon h-[100px] w-[110px]"
                    width="75.121"
                    height="61.052"
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.98 2.5C4.98 3.881 3.87 5 2.5 5C1.13 5 0.02 3.881 0.02 2.5C0.02 1.12 1.13 0 2.5 0C3.87 0 4.98 1.12 4.98 2.5ZM5 7H0V23H5V7ZM12.982 7H8.014V23H12.983V14.601C12.983 9.931 19.012 9.549 19.012 14.601V23H24V12.869C24 4.989 15.078 5.276 12.982 9.155V7Z"
                      fill="white"
                    ></path>
                  </svg>
                )}
                <a
                  className="rounded-full h-10 w-auto absolute bottom-7 left-7 bg-white flex items-center justify-center p-4 arrow-link gap-2"
                  href="https://www.linkedin.com/in/aminat/"
                  target="_blank"
                >
                  <img
                    src={Arrow.src}
                    className="rounded-md"
                    alt="asoebi-project"
                  />
                </a>
              </div>
              <div
                key="box-proj-b"
                className={`bg-[#6886c5] dark:bg-minLightBlack/30 dark:border dark:border-[#21262c] card rounded-[32px] flex justify-center items-center ${
                  currentNav === "all" || currentNav === "work"
                    ? "opacity-100"
                    : "opacity-25"
                }`}
              >
                <img
                  src={Airplay.src}
                  className="rounded-md"
                  alt="asoebi-project"
                />

                <a
                  className="rounded-full h-10 w-auto absolute bottom-7 left-7 bg-white flex items-center justify-center p-4 arrow-link gap-2"
                  href="https://airplayy.vercel.app/"
                  target="_blank"
                >
                  <span className="text-black">Airplay</span>
                  <img
                    src={Arrow.src}
                    className="rounded-md"
                    alt="asoebi-project"
                  />
                </a>
              </div>
              <div
                key="box-twitter"
                className={`bg-white dark:bg-minLightBlack/30 dark:border dark:border-[#21262c] card rounded-[32px] flex justify-center items-center ${
                  currentNav === "all" || currentNav === "contact"
                    ? "opacity-100"
                    : "opacity-25"
                }`}
              >
                {getCurrentTheme === "dark" ? (
                  <svg
                    viewBox="0 0 40 40"
                    fill="none"
                    className="h-[100px] w-[110px]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.72 13.328c.022.292.022.582.022.872 0 8.875-6.755 19.102-19.1 19.102a18.969 18.969 0 0 1-10.31-3.015c.54.061 1.06.083 1.622.083a13.45 13.45 0 0 0 8.335-2.868 6.727 6.727 0 0 1-6.279-4.655c.415.061.832.103 1.269.103.601 0 1.206-.083 1.768-.228a6.712 6.712 0 0 1-5.383-6.589v-.083c.895.498 1.933.81 3.033.852a6.704 6.704 0 0 1-2.993-5.59c0-1.247.331-2.39.913-3.387A19.096 19.096 0 0 0 19.46 14.95a7.623 7.623 0 0 1-.166-1.538 6.71 6.71 0 0 1 6.713-6.714c1.933 0 3.678.81 4.905 2.12a13.26 13.26 0 0 0 4.26-1.621 6.7 6.7 0 0 1-2.952 3.7 13.458 13.458 0 0 0 3.865-1.04 14.409 14.409 0 0 1-3.365 3.471Z"
                      fill="#ffffff"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 40 40"
                    fill="none"
                    className="h-[100px] w-[110px]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.72 13.328c.022.292.022.582.022.872 0 8.875-6.755 19.102-19.1 19.102a18.969 18.969 0 0 1-10.31-3.015c.54.061 1.06.083 1.622.083a13.45 13.45 0 0 0 8.335-2.868 6.727 6.727 0 0 1-6.279-4.655c.415.061.832.103 1.269.103.601 0 1.206-.083 1.768-.228a6.712 6.712 0 0 1-5.383-6.589v-.083c.895.498 1.933.81 3.033.852a6.704 6.704 0 0 1-2.993-5.59c0-1.247.331-2.39.913-3.387A19.096 19.096 0 0 0 19.46 14.95a7.623 7.623 0 0 1-.166-1.538 6.71 6.71 0 0 1 6.713-6.714c1.933 0 3.678.81 4.905 2.12a13.26 13.26 0 0 0 4.26-1.621 6.7 6.7 0 0 1-2.952 3.7 13.458 13.458 0 0 0 3.865-1.04 14.409 14.409 0 0 1-3.365 3.471Z"
                      fill="#000000"
                    ></path>
                  </svg>
                )}
                <a
                  className="rounded-full h-10 w-auto absolute bottom-7 left-7 flex bg-white border border-[#ededed] items-center justify-center p-4 arrow-link gap-2"
                  href="https://twitter.com/yakubu_jumoke"
                  target="_blank"
                >
                  <img
                    src={Arrow.src}
                    className="rounded-md"
                    alt="asoebi-project"
                  />
                </a>
              </div>
              <div
                key="box-proj-c"
                className={`bg-white dark:bg-minLightBlack/30 dark:border dark:border-[#21262c] card rounded-[32px] flex items-center justify-center ${
                  currentNav === "all" || currentNav === "work"
                    ? "opacity-100"
                    : "opacity-25"
                }`}
              >
                <img
                  src={Webscout.src}
                  className="object-cover h-full w-full rounded-md"
                  alt="webscout-project"
                />

                <a
                  className="rounded-full h-10 w-auto absolute bottom-7 left-7 flex items-center bg-white border border-[#ededed] justify-center p-4 arrow-link gap-2"
                  href="https://webscout.vercel.app/"
                  target="_blank"
                >
                  <span className="text-black">Webscout</span>
                  <img
                    src={Arrow.src}
                    className="rounded-md"
                    alt="asoebi-project"
                  />
                </a>
              </div>
              <div
                key="box-note"
                className={`bg-white dark:bg-minLightBlack/30 dark:border dark:border-[#21262c] card rounded-[32px] flex justify-center items-center ${
                  currentNav === "all" || currentNav === "contact"
                    ? "opacity-100"
                    : "opacity-25"
                }`}
              >
                {getCurrentTheme === "dark" ? (
                  <svg fill="#ffffff"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"  className="object-cover h-[100px] w-[110px]  rounded-md">
                      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/>
                  </svg>
                  
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="object-cover h-[100px] w-[110px]  rounded-md"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                      fill="#000000"
                    />
                  </svg>
                )}


                <a
                  className="rounded-full h-10 w-auto bg-white border border-[#ededed] absolute bottom-7 left-7 flex items-center justify-center p-4 arrow-link gap-2"
                  href="https://github.com/giselle2323"
                  target="_blank"
                >
                  <img
                    src={Arrow.src}
                    className="rounded-md"
                    alt="asoebi-project"
                  />
                </a>
              </div>
              <div
                key="box-proj-d"
                className={`bg-white dark:bg-minLightBlack/30 dark:border dark:border-[#21262c] card rounded-[32px] flex justify-center items-center ${
                  currentNav === "all" || currentNav === "work"
                    ? "opacity-100"
                    : "opacity-25"
                }`}
              >
                <img
                  src={Asoebi.src}
                  className="rounded-md object-cover h-full w-full"
                  alt="asoebi-project"
                />
                <a
                  className="rounded-full h-10 w-auto absolute bottom-7 left-7 flex bg-white border border-[#ededed] items-center justify-center p-4 arrow-link gap-2"
                  href="https://asoebi-quarters.com"
                  target="_blank"
                >
                  <span className="text-black">Asoebi</span>
                  <img
                    src={Arrow.src}
                    className="rounded-md"
                    alt="asoebi-project"
                  />
                </a>
              </div>
            </ResponsiveGridLayout>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
