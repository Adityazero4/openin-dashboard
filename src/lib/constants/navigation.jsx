import { BiSolidDashboard } from "react-icons/bi";
import { FaFileCsv } from "react-icons/fa6";
import { FaFileInvoice } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "Dashboard",
    label: "Dashboard",
    path: "dashboard",
    icon: <BiSolidDashboard />,
  },
  {
    key: "Upload",
    label: "Upload",
    path: "upload",
    icon: <FaFileCsv />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "Invoice",
    label: "Invoice",
    path: "invoice",
    icon: <FaFileInvoice />,
  },
  {
    key: "Schedule",
    label: "Schedule",
    path: "schedule",
    icon: <FaFileLines />,
  },
  {
    key: "Calendar",
    label: "Calendar",
    path: "calendar",
    icon: <FaCalendarAlt />,
  },
  {
    key: "Notification",
    label: "Notification",
    path: "notification",
    icon: <IoNotifications />,
  },
  {
    key: "Settings",
    label: "Settings",
    path: "settings",
    icon: <IoMdSettings />,
  },
];
