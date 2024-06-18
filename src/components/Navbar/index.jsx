import { CgSearch } from "react-icons/cg"; 
import { AiOutlineMenu } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import React from "react";
import { useDispatch } from "react-redux";
import { minimizeSidebar } from "../../redux/setting/settingSlice";
import { useLocation } from "react-router-dom";
import { InpBox } from "./style";

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const dispatch = useDispatch();
  return (
    <div className="w-full bg-orange-500 mt-8 px-2 py-1 flex justify-between">
      <div className="w-full max-w-52 flex justify-between">
        <div className="">
          <span className="text-[#cff4fa] flex items-center gap-1">
            <AiFillHome /> / {pathname.slice(1)}
          </span>
          <span className="font-bold text-white">
            {pathname[1].toUpperCase()}
            {pathname.slice(2)}
          </span>
        </div>
        <button
          className="text-white max-[1300px]:hidden"
          onClick={() => dispatch(minimizeSidebar())}
        >
          <AiOutlineMenu />
        </button>
      </div>

      <div className="flex justify-between items-center text-white">
        <InpBox>
          <CgSearch />
          <input type="text" placeholder="Type here..." />
        </InpBox>
        <button
          className="min-[1300px]:hidden"
          onClick={() => dispatch(minimizeSidebar())}
        >
          <AiOutlineMenu />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
