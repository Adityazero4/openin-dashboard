// ResponsiveSidebar.js
import React from "react";
import {
  DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from "../../lib/constants/navigation";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { HiOutlineX } from "react-icons/hi";

const ResponsiveSidebar = ({ onClose }) => {
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
          className={classNames("px-4 py-2", {
            "text-white hover:bg-gray-300 hover:bg-opacity-10": isActive,
            "text-gray-300 hover:bg-gray-300 hover:bg-opacity-10": !isActive,
          })}
        >
          <div className="mr-3">{item.icon}</div>
          <div>{item.label}</div>
        </div>
      </Link>
    );
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
      <div className="flex flex-col h-full w-60 p-3 text-white rounded-r-lg">
        <div className="flex items-center justify-between px-4 py-2">
          <span className="font-bold text-2xl">Board.</span>
          <button onClick={onClose} className="text-gray-300">
            <HiOutlineX className="h-6 w-6" />
          </button>
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
    </div>
  );
};

export default ResponsiveSidebar;
