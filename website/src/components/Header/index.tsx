import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="w-full p-4 h-20 bg-[#0f2349] flex items-center justify-center">
      <div className="max-w-6xl flex items-center justify-between w-full">
        <div className="max-w-xs">
          <Image
            src="/logo-pokemon-trader.png"
            width={150}
            height={100}
            alt="Pokemon Go Trader"
            className="mt-5"
          />
        </div>
        <ul className="flex items-center justify-start text-white text-sm gap-10">
          <li className="border-[0.1rem] border-transparent rounded-full px-4 py-2 hover:border-[#249476] cursor-pointer">
            HOME
          </li>
          <li className="border-[0.1rem] border-transparent rounded-full px-4 py-2 hover:border-[#249476] cursor-pointer">
            ABOUT
          </li>
          <li className="border-[0.1rem] border-transparent rounded-full px-4 py-2 hover:border-[#249476] cursor-pointer">
            MARKETPLACE
          </li>
        </ul>

        <div className="flex gap-5">
          <button className="border-[0.1rem] border-[#249476] hover:bg-white/5 text-white rounded-md px-4 py-1">
            Login
          </button>
          <button className="border-[0.1rem] border-[#249476] hover:bg-[#249476]/90 bg-[#249476] text-white rounded-md px-4 py-1">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
