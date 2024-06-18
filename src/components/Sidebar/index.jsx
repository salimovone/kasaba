import { HiOutlineUserGroup } from "react-icons/hi";
import React from "react";
import routes from "../../routes/routes";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;
  const smallSidebar = useSelector(state => state.setting.smallSidebar)
  return (
    <div className={`bg-background max-w-60 top-4 w-full h-3/4 rounded-2xl overflow-y-auto overflow-x-hidden fixed left-4 ${smallSidebar?"max-[1300px]:-left-80":"max-[1300px]:left-4"}`}>
      <div className="text-primary flex justify-center items-center w-full py-5 text-[1.2rem] gap-2">
        <span>
          <HiOutlineUserGroup />
        </span>
        <span>Trade Union</span>
      </div>
      <hr className="rounded-[80%] w-[80%] m-auto mb-2" />
      <div className="w-full px-2 text-secondary">
        {routes.map((e) => (
          <Link
            to={e.route}
            className={
              `w-full flex items-center gap-2 mb-2 px-8 py-4 rounded-xl ${pathname===e.route&&"bg-[#11cdf033] font-bold text-primary"}`
            }
            key={e.key}
          >
            <span>{e.icon}</span>
            <span>{e.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
