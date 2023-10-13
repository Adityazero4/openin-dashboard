import { BsTags } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { TbCalendarTime } from "react-icons/tb";
import { PiUserSquareBold } from "react-icons/pi";
import { AiOutlineSetting } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { RiContactsFill } from "react-icons/ri";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "Dashboard",
    label: "Dashboard",
    path: "/home",
    icon: <AiOutlinePieChart />,
  },
  {
    key: "Transactions",
    label: "Transactions",
    path: "/transactions",
    icon: <BsTags />,
  },
  {
    key: "Schedule",
    label: "Schedule",
    path: "/schedule",
    icon: <TbCalendarTime />,
  },
  {
    key: "Users",
    label: "Users",
    path: "/users",
    icon: <PiUserSquareBold />,
  },
  {
    key: "Settings",
    label: "Settings",
    path: "/settings",
    icon: <AiOutlineSetting />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "Help",
    label: "Help",
    path: "/help",
    icon: <BiHelpCircle />,
  },
  {
    key: "contact",
    label: "contact",
    path: "/contact",
    icon: <RiContactsFill />,
  },
];
