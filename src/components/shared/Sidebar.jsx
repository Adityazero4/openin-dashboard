import React from "react";
import {
  DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from "../../lib/constants/navigation";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

const Sidebar = () => {
  const baseLinkClass = "flex items-center px-7 py-3 cursor-pointer rounded-xl";
  const activeLinkClass = "hover:bg-white hover:bg-opacity-10";
  const inactiveLinkClass =
    "text-gray-300 hover:bg-gray-300 hover:bg-opacity-10";

  const pathname = useLocation().pathname;

  const isLinkActive = (linkPath) => {
    return pathname === linkPath;
  };

  const SidebarLink = ({ item }) => {
    const isActive = isLinkActive(item.path);

    return (
      <Link to={item.path} style={{ textDecoration: "none" }}>
        <div
          key={item.key}
          className={classNames(baseLinkClass, {
            [activeLinkClass]: isActive,
            [inactiveLinkClass]: !isActive,
          })}
          style={{
            color: isActive ? "#fff" : "",
          }}
        >
          <div className="mr-3">{item.icon}</div>
          <div>{item.label}</div>
        </div>
      </Link>
    );
  };

  return (
    <div
      className="flex flex-col w-60 p-3 text-white rounded-3xl ml-2 my-2 h-screen"
      style={{
        backgroundColor: "#4285F4",
      }}
    >
      <div className="flex items-center px-7 py-3">
        <span className="font-bold text-2xl">Board.</span>
      </div>
      <div className="flex-1 py-8 flex flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((link) => {
          return <SidebarLink key={link.key} item={link} />;
        })}
      </div>
      <div>
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => {
          return <SidebarLink key={link.key} item={link} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
