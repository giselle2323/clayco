import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useTheme } from "next-themes";
import NavBar from "../components/Nav";

const Home: NextPage = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

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
    <div className="min-h-screen">
      <Head>
        <title>Portfolio Home Page </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-container">
        <NavBar />

        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center  text-black dark:text-white">
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            toggle
          </button>
          <div>
            kfdjnds jksnisdjk ijsknsd kjnsd 
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
