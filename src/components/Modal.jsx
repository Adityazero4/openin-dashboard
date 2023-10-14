// Modal.js
import React, { useState } from "react";
import "./Modal.css"; // Import the CSS file for custom styling
import "tailwindcss/tailwind.css"; // Import Tailwind CSS

const Modal = ({ isOpen, onClose, handleFormSubmit }) => {
  const [activeTab, setActiveTab] = useState("basic");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleNext = () => {
    setActiveTab("social");
  };

  const handleBack = () => {
    setActiveTab("basic");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission based on the active tab (basic/social)
    // For simplicity, we'll log the form data to the console

    handleFormSubmit({
      name,
      email,
      phone,
      instagram,
      youtube,
    });

    // Close the modal after form submission
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header flex justify-between">
          <div className="font-bold text-xl">Add Profile</div>
          <button className="close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <div className="flex justify-between mb-4">
            <button
              onClick={() => handleTabChange("basic")}
              className={`tab-button ${
                activeTab === "basic" ? "active-tab" : ""
              }`}
            >
              Basic
            </button>
            <button
              onClick={() => handleTabChange("social")}
              className={`tab-button ${
                activeTab === "social" ? "active-tab" : ""
              }`}
            >
              Social
            </button>
          </div>
          <div className="tab-content ">
            {activeTab === "basic" && (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2">
                    Enter Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    placeholder="Eg. John Doe"
                    onChange={(e) => setName(e.target.value)}
                    className="w-full py-2 px-3 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2">
                    Enter Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Eg. John@xyz.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full py-2 px-3 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block mb-2">
                    Enter Phone*
                  </label>
                  <input
                    type="text"
                    id="phone"
                    value={phone}
                    placeholder="Eg. 9876543210"
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full py-2 px-3 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md "
                  >
                    Next
                  </button>
                </div>
              </form>
            )}
            {activeTab === "social" && (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="instagram" className="block mb-2">
                    Instagram Link
                    <span className="text-gray-400"> (Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="instagram"
                    value={instagram}
                    placeholder="Eg. ..instagram.com/username"
                    onChange={(e) => setInstagram(e.target.value)}
                    className="w-full py-2 px-3 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="youtube" className="block mb-2">
                    YouTube Link
                    <span className="text-gray-400"> (Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="youtube"
                    value={youtube}
                    placeholder="Eg. ..youtube.com/username"
                    onChange={(e) => setYoutube(e.target.value)}
                    className="w-full py-2 px-3 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleBack}
                    className=" text-black py-2 px-4 rounded-md mr-4 border-2 border-gray-400"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md"
                  >
                    Done
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
