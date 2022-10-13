import * as React from "react";

import type { NextPage } from "next";
import { useTheme } from "next-themes";

const CloseNav: NextPage = () => {
  const { systemTheme, theme } = useTheme();
  const getCurrentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div className="flex items-center justify-center">
      <a
        href="/"
        className="w-[46px] h-[46px] rounded-full bg-[#ede9e9] dark:bg-transparent dark:border dark:border-[#30363d] flex items-center justify-center"
      >
        {getCurrentTheme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11.644"
            height="11.385"
            viewBox="0 0 11.644 11.385"
          >
            <g
              id="Group_40"
              data-name="Group 40"
              transform="translate(-954.372 -59.349)"
            >
              <g
                id="Group_39"
                data-name="Group 39"
                transform="translate(-6035.801 -1683.588)"
              >
                <line
                  id="Line_6"
                  data-name="Line 6"
                  y2="12.101"
                  transform="translate(7000.403 1744.351) rotate(45)"
                  fill="none"
                  stroke="white"
                  strokeLinecap ="round"
                  strokeWidth="2"
                ></line>
                <line
                  id="Line_7"
                  data-name="Line 7"
                  y2="12.101"
                  transform="translate(7000.144 1752.908) rotate(135)"
                  fill="none"
                  stroke="white"
                  strokeLinecap ="round"
                  strokeWidth="2"
                ></line>
              </g>
            </g>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11.644"
            height="11.385"
            viewBox="0 0 11.644 11.385"
          >
            <g
              id="Group_40"
              data-name="Group 40"
              transform="translate(-954.372 -59.349)"
            >
              <g
                id="Group_39"
                data-name="Group 39"
                transform="translate(-6035.801 -1683.588)"
              >
                <line
                  id="Line_6"
                  data-name="Line 6"
                  y2="12.101"
                  transform="translate(7000.403 1744.351) rotate(45)"
                  fill="none"
                  stroke="gray"
                  strokeLinecap ="round"
                  strokeWidth="2"
                ></line>
                <line
                  id="Line_7"
                  data-name="Line 7"
                  y2="12.101"
                  transform="translate(7000.144 1752.908) rotate(135)"
                  fill="none"
                  stroke="gray"
                  strokeLinecap ="round"
                  strokeWidth="2"
                ></line>
              </g>
            </g>
          </svg>
        )}
      </a>
    </div>
  );
};

export default CloseNav;
