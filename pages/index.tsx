import * as React from "react";

import type { NextPage } from "next";
import Head from "next/head";
import { useTheme } from "next-themes";
import { Responsive, WidthProvider } from "react-grid-layout";
import Memoji from "../public/images/memoji-1.png";

import NavBar from "../components/Nav";

const Home: NextPage = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const ResponsiveGridLayout = WidthProvider(Responsive);

  const layout = [
    { i: "blue-eyes-dragon", x: 0, y: 0, w: 3, h: 1, static: true },
    { i: "dark-magician", x: 0, y: 1, w: 1, h: 1, static: true},
    { i: "kuriboh", x: 1, y: 1, w: 1, h: 1, static: true },
    { i: "spell-caster", x: 2, y: 1, w: 1, h: 2, static: true },
    { i: "summoned-skull", x: 0, y: 2, w: 2, h: 1, static: true },
    { i: "f", x: 0, y: 3, w: 1, h: 2, static: true },
    { i: "g", x: 1, y: 3, w: 2, h: 1, static: true },
    { i: "h", x: 2, y: 4, w: 2, h: 1, static: true },
    { i: "i", x: 0, y: 5, w: 3, h: 1, static: true },
  ];
 
  const layouts = {
    lg: layout,
    md: layout,
    // sm: layout,
    // xs: layout,
    // xxs: layout
  }

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          className="w-10 h-10  text-black dark:text-white"
          role="button"
          onClick={() => setTheme("light")}
        >
          {" "}
          Light{" "}
        </button>
      );
    } else {
      return (
        <button
          className="w-10 h-10  text-black dark:text-white "
          role="button"
          onClick={() => setTheme("dark")}
        >
          {" "}
          Dark{" "}
        </button>
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
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            toggle
          </button>
           <div className="h-96">
            <ResponsiveGridLayout layouts={layouts} cols={{lg: 3, md: 3, sm: 3, xs: 1, xxs: 1}} rowHeight={300} margin={[20, 20]} breakpoints={{ lg: 1000, md: 996, sm: 768, xs: 480, xxs: 0 }}>
              <div key="blue-eyes-dragon" className="bg-white dark:bg-minLightBlack/30 rounded-md px-8 py-6">
                <img src={Memoji.src} alt="memoji" className=" h-[107px] my-6"/>
                <p className="max-w-[477px]">I'm Aminat, a Frontend Engineer focused on building web applications with React, React Native.</p>
              </div>
              <div key="dark-magician" className="bg-white dark:bg-minLightBlack/30 rounded-md flex items-center justify-center">b
              </div>
              <div key="kuriboh" className="bg-white dark:bg-minLightBlack/30 rounded-md flex items-center justify-center">c</div>
              <div key="spell-caster" className="bg-white dark:bg-minLightBlack/30 rounded-md flex items-center justify-center">D</div>
              <div key="summoned-skull" className="bg-white dark:bg-minLightBlack/30 rounded-md flex items-center justify-center">E</div>
              <div key="f" className="bg-white dark:bg-minLightBlack/30 rounded-md flex items-center justify-center">F</div>
              <div key="g" className="bg-white dark:bg-minLightBlack/30 rounded-md flex items-center justify-center">G</div>
              <div key="h" className="bg-white dark:bg-minLightBlack/30 rounded-md flex items-center justify-center">H</div>
              <div key="i" className="bg-white dark:bg-minLightBlack/30 rounded-md flex items-center justify-center">I</div>
            </ResponsiveGridLayout>
          </div>
        </main>
       
      </div>
    </div>
  );
};

export default Home;
