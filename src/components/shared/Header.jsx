import React, { Fragment, useState } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { HiOutlineBell, HiMenu } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import NewSidebar from "./NewSidebar";
import { useLocation } from "react-router-dom";
import sidebar_logo from "../../assets/images/sidebar_logo.png";

const Header = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  let navTtitle = useLocation().pathname.split("/")[2];

  navTtitle =
    navTtitle.charAt(0).toUpperCase() + navTtitle.slice(1).toLowerCase();

  if (navTtitle === "Upload") {
    navTtitle = "Upload CSV";
  }

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="px-4 py-3 flex items-center justify-between md:px-6">
      <div className="flex items-center">
        <button
          className="block md:hidden text-gray-700"
          onClick={handleSidebarToggle}
        >
          <HiMenu className="h-6 w-6" />
        </button>
        <div className="flex items-center px-4 py-3">
          {" "}
          {/* Adjusted padding */}
          <img src={sidebar_logo} alt="logo" className="h-12 block md:hidden" />
          <span className="font-bold text-2xl text-black ml-2 block md:hidden">
            {" "}
            {/* Adjusted margin */}
            Base
          </span>
        </div>
        <div className="font-bold text-2xl md:mb-0 hidden md:block mb-2 ml-2">
          {navTtitle}
        </div>
      </div>
      <div className="md:ml-auto flex gap-1">
        {" "}
        {/* Reduced gap */}
        <div className="relative">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open && "bg-gray-100",
                    "group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100"
                  )}
                >
                  <HiOutlineBell fontSize={24} />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-80">
                    <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                      <strong className="text-gray-700 font-medium">
                        Notifications
                      </strong>
                      <div className="mt-2 py-1 text-sm">
                        This is the notification panel.
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
        <Menu as="div" className="relative">
          <div>
            <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
              <span className="sr-only">Open user menu</span>
              <div
                className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage:
                    'url("https://source.unsplash.com/80x80?face")',
                }}
              >
                <span className="sr-only">Marc Backes</span>
              </div>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <div
                    onClick={() => navigate("/profile")}
                    className={classNames(
                      active && "bg-gray-100",
                      "active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200"
                    )}
                  >
                    Your Profile
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div
                    onClick={() => navigate("/settings")}
                    className={classNames(
                      active && "bg-gray-100",
                      "active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200"
                    )}
                  >
                    Settings
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={classNames(
                      active && "bg-gray-100",
                      "active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200"
                    )}
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Sign out
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      {isSidebarOpen && <NewSidebar onClose={() => setIsSidebarOpen(false)} />}
    </div>
  );
};

export default Header;
