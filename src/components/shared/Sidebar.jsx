import React, { useState } from "react";
import {
  DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from "../../lib/constants/navigation";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import sidebar_logo from "../../assets/images/sidebar_logo.png";

const Sidebar = () => {
  const baseLinkClass = "flex items-center px-7 py-3 cursor-pointer rounded-xl";
  const activeLinkClass =
    "hover:bg-white hover:bg-opacity-10 text-[#605BFF] font-medium";
  const inactiveLinkClass =
    "text-[#9A9AA9] hover:bg-gray-600 hover:bg-opacity-10 font-medium";

  const pathname = useLocation().pathname;

  const isLinkActive = (path) => {
    return pathname === `/home/${path}`;
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
        >
          <div className="mr-3">{item.icon}</div>
          <div>{item.label}</div>
        </div>
      </Link>
    );
  };

  return (
    <div
      className="flex flex-col w-60 p-3 h-screen"
      style={{
        backgroundColor: "#FFF",
      }}
    >
      <div className="flex items-center px-7 py-3">
        <img src={sidebar_logo} alt="logo" className="h-12" />
        <span className="font-bold text-2xl text-black ml-4">Base</span>
      </div>
      <div className="flex pb-8 pt-8 flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((link) => {
          return <SidebarLink key={link.key} item={link} />;
        })}
      </div>
      <div className="flex flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => {
          return <SidebarLink key={link.key} item={link} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
