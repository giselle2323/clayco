import * as React from "react";

const NavBar = () => {
  return (
    <nav className="p-6 flex flex-col lg:flex  items-center mb-11 gap-6">
      <svg
        width="123"
        height="28"
        viewBox="0 0 123 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.88 27L6.8 19.52H18.52L21.44 27H25.28L14.48 0.199999H11L0.2 27H3.88ZM11.32 7.96L12.68 3.76L14 7.96L17.32 16.44H8L11.32 7.96ZM31.0419 27V16.04C31.0419 12.8 32.4019 10.2 35.3219 10.2C38.2419 10.2 39.5619 11.6 39.5619 14.44V27H43.0419V16.04C43.0419 12.8 44.4019 10.2 47.3619 10.2C50.2419 10.2 51.6019 11.6 51.6019 14.44V27H55.0419V13.6C55.0419 9.52 53.0819 7.24 49.2819 7.24C45.7619 7.24 43.7619 9.84 43.0019 12.92C42.8019 9.28 40.8419 7.24 37.2819 7.24C33.8019 7.24 31.8019 9.8 31.0419 12.76V7.64H27.5619V27H31.0419ZM63.6981 4.52V0.199999H60.2181V4.52H63.6981ZM63.6981 27V7.64H60.2181V27H63.6981ZM72.4091 27V16.04C72.4091 12.8 73.7691 10.2 77.4891 10.2C80.7691 10.2 81.7691 11.96 81.7691 14.48V27H85.2091V13.64C85.2091 9.52 82.8491 7.24 79.0491 7.24C75.2491 7.24 73.1691 9.8 72.4091 12.8V7.64H68.9291V27H72.4091ZM94.4525 27.4C98.4525 27.4 100.533 24.52 101.173 21.96V23.32C101.173 26.04 102.613 27 104.613 27H106.853V23.84H105.613C104.893 23.84 104.533 23.56 104.533 22.64V14.68C104.533 10.08 101.973 7.24 97.2125 7.24C92.8925 7.24 90.0125 9.68 88.8525 11.68L91.2125 14.12C92.2125 12 94.0525 10.4 96.8125 10.4C99.8525 10.4 100.933 12.08 101.053 14.36L94.0525 17.48C91.2925 18.72 89.3325 20.36 89.3325 22.96C89.3325 25.52 91.1725 27.4 94.4525 27.4ZM92.8525 22.4C92.8525 21.2 93.6925 20.4 95.5325 19.52L101.173 16.88V19.56C101.173 22.36 98.8525 24.52 95.5725 24.52C93.7725 24.52 92.8525 23.72 92.8525 22.4ZM116.815 27.44C119.495 27.44 121.335 26.2 122.175 24.88L121.015 21.44C120.495 22.64 119.295 24.08 117.575 24.08C116.055 24.08 114.895 23.48 114.895 21V10.36H121.255V7.64H114.895V2.6L111.415 5.16V7.64H108.295V10.36H111.415V22.04C111.415 25.36 113.655 27.44 116.815 27.44Z"
          fill="url(#paint0_linear_33_6)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_33_6"
            x1="61.5"
            y1="-53.5484"
            x2="61.5"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#B3AEF5" stop-opacity="0.02" />
            <stop offset="0.265625" stop-color="#D7CBE7" stop-opacity="0.2" />
            <stop offset="0.609375" stop-color="#E5C8C8" stop-opacity="0.31" />
            <stop offset="1" stop-color="#EAA879" stop-opacity="0.7" />
          </linearGradient>
        </defs>
      </svg>
      <div className="bg-white dark:bg-minLightBlack/30 mx-auto rounded-[23px] p-[5px]">
        <ul className="flex items-center no-underline gap-2">
          <li className="text-black dark:text-white hover:dark:bg-minBlack hover:bg-minLightBlack/30 rounded-[50px] px-4">Home</li>
          <li className="text-black dark:text-white hover:dark:bg-minBlack hover:bg-minLightBlack/30 rounded-[50px] px-4">Work</li>
          <li className="text-black dark:text-white hover:dark:bg-minBlack hover:bg-minLightBlack/30 rounded-[50px] px-4">About</li>
          {/* <li className="text-black dark:text-white hover:dark:bg-minBlack hover:bg-minLightBlack/30 rounded-[50px] px-4">Contact</li> */}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
