import React, { useState } from "react";
import BarGraph from "./BarGraph";
import Piechart from "./PieChart";
import { GrAddCircle } from "react-icons/gr";
import Modal from "./Modal";
import { BsWhatsapp } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
// import "./Dashboard.css";
import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleAddProfileClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (data) => {
    setUserData(data);
    setIsModalOpen(false);
  };
  return (
    <div className="flex justify-between mt-6 gap-4 flex-wrap">
      <div
        className="flex w-[12rem] flex-col gap-2 p-4 rounded-2xl"
        style={{ backgroundColor: "#FFF" }}
      >
        <div
          className="icon-background rounded-full p-4"
          style={{ backgroundColor: "#4CAF50", width: "fit-content" }}
        >
          <img
            src="/revenue.svg"
            alt="google-icon"
            height={39.6}
            width={36}
            className="self-start text-lg"
          />
        </div>
        <div className="text-sm">Total Revenues</div>
        <div className="text-2xl font-bold font-OpenSans">$2,129,430</div>
      </div>
      <div
        className="flex w-[12rem] flex-col gap-2 p-4 rounded-2xl"
        style={{ backgroundColor: "#FFF" }}
      >
        <div
          className="icon-background rounded-full p-4"
          style={{ backgroundColor: "#FFC107", width: "fit-content" }}
        >
          <img
            src="/transcation-black.svg"
            alt="google-icon"
            height={39.6}
            width={31.185}
            className="self-start text-lg"
          />
        </div>
        <div className="text-sm">Total Transactions</div>
        <div className="text-2xl font-bold font-OpenSans">1,520</div>
      </div>
      <div
        className="flex w-[12rem] flex-col gap-2 p-4 rounded-2xl"
        style={{ backgroundColor: "#FFF" }}
      >
        <div
          className="icon-background rounded-full p-4"
          style={{ backgroundColor: "#E91E63", width: "fit-content" }}
        >
          <img
            src="/like.svg"
            alt="google-icon"
            height={36}
            width={34.95}
            className="self-start text-lg"
          />
        </div>
        <div className="text-sm">Total Likes</div>
        <div className="text-2xl font-bold font-OpenSans">9,721</div>
      </div>
      <div
        className="flex w-[12rem] flex-col gap-2 p-4 rounded-2xl "
        style={{ backgroundColor: "#FFF" }}
      >
        <div
          className="icon-background rounded-full p-4"
          style={{ backgroundColor: "#2196F3", width: "fit-content" }}
        >
          <img
            src="/users.svg"
            alt="google-icon"
            height={39.6}
            width={36}
            className="self-start text-lg"
          />
        </div>
        <div className="text-sm">Total Users</div>
        <div className="text-2xl font-bold font-OpenSans">892</div>
      </div>
      <div className="bg-white my-8 p-6 rounded-2xl w-full">
        <div className="text-lg font-bold font-Montserrat">Activities</div>
        <div className="flex md:flex-row flex-col justify-between">
          <div className="flex gap-2 text-sm text-[#858585] items-center font-Montserrat">
            May - June 2021
            <img src="/down-arrow.svg" alt="" width={8} height={5}></img>
          </div>
          <div className="flex gap-6">
            <div className="flex gap-2 items-center">
              <div className="h-3 w-3 bg-[#E9A0A0] rounded-full"></div>
              <div className="">Guest</div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="h-3 w-3 bg-[#9BDD7C] rounded-full"></div>
              <div className="">User</div>
            </div>
          </div>
        </div>
        <div className="h-56 w-full">
          <BarGraph />
        </div>
      </div>
      <div className="mt-8 flex xl:flex-row flex-col gap-8">
        <div className="bg-white p-8 rounded-2xl xl:w-auto w-full">
          <div className="flex justify-between">
            <div className="text-lg font-bold font-Montserrat">
              Total products
            </div>
            <div className="flex gap-2 text-sm text-[#858585] items-center font-Montserrat">
              May - June 2021
              <img src="/down-arrow.svg" alt="" width={8} height={5}></img>
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-center gap-24 mt-4 md:h-44">
            <Piechart />
          </div>
        </div>
        <div
          className="bg-white p-8 rounded-2xl xl:w-auto w-full flex-grow"
          style={{
            width: "480px",
          }}
        >
          {userData ? (
            <div>
              <div className="text-xl font-bold font-Montserrat mb-4">
                {userData.name}
              </div>
              <div className="mt-16">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center underline">
                    <BsWhatsapp
                      className="mr-2"
                      style={{
                        color: "#3CC952",
                      }}
                    />
                    {userData.phone}
                  </div>
                  <div className="flex items-center underline">
                    <AiOutlineMail
                      className="mr-2"
                      style={{
                        color: "#5C33CF",
                      }}
                    />
                    {userData.email}
                  </div>
                </div>
                <div className="flex justify-between items-center mb-2">
                  {userData.instagram && (
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        <AiOutlineInstagram
                          className="mr-2"
                          style={{
                            color: "#FF4E64",
                          }}
                        />
                      </div>
                      <div className="underline">{userData.instagram}</div>
                    </div>
                  )}
                  {userData.youtube && (
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        <AiOutlineYoutube
                          className="mr-2"
                          style={{
                            color: "#FF0000",
                          }}
                        />
                      </div>
                      <div className="underline">{userData.youtube}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <button
              className=" w-full h-full flex flex-col items-center justify-center"
              style={{ backgroundColor: "transparent", border: "none" }}
              onClick={handleAddProfileClick}
            >
              <div className="rounded-full bg-gray-200 p-4">
                <GrAdd size={40} color="#767778" />
              </div>
              <div className="mt-2 text-gray-700">Add Profile</div>
            </button>
          )}
        </div>
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          handleFormSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
};

export default Dashboard;
