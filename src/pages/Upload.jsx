import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ImSpinner8 } from "react-icons/im";
import { LuUpload } from "react-icons/lu";
import Papa from "papaparse";
import "./upload.css";
import excel_logo from "../assets/images/excel_logo.png";

const Upload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [filename, setFilename] = useState("");
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [fileData, setFileData] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleRemoveFile = (e) => {
    e.preventDefault();
    setFilename("");
    setIsUploading(false);
    setIsFileUploaded(false);
    setIsButtonDisabled(true);
    setIsInputDisabled(true);
    setFileData([]);
    setSelectedTags([]);
  };

  const parseCSV = (file) => {
    Papa.parse(file, {
      complete: function (results) {
        setFileData(results.data);
      },
      header: true,
      skipEmptyLines: true,
    });
  };

  const handleRemoveTag = (rowIndex, tagIndex) => {
    setSelectedTags((prevTags) => {
      const updatedTags = [...prevTags];
      updatedTags[rowIndex] = updatedTags[rowIndex].filter(
        (_, index) => index !== tagIndex
      );
      return updatedTags;
    });
  };

  const onDrop = useCallback((acceptedFiles) => {
    setIsUploading(true);
    setIsButtonDisabled(false);
    setIsInputDisabled(false);

    acceptedFiles.forEach((file) => {
      setFilename(file.name);
      setTimeout(() => {
        parseCSV(file);
      }, 5000);
    });
    setTimeout(() => {
      setIsUploading(false);
      setIsFileUploaded(true);
      setIsButtonDisabled(true);
      setIsInputDisabled(true);
    }, 5000);
  }, []);

  const handleTagChange = (rowIndex, event) => {
    const selectedOptions = Array.from(event.target.selectedOptions).map(
      (option) => option.value
    );
    setSelectedTags((prevTags) => {
      const updatedTags = [...prevTags];
      if (!updatedTags[rowIndex]) {
        updatedTags[rowIndex] = [];
      }
      updatedTags[rowIndex] = [...updatedTags[rowIndex], ...selectedOptions];
      return updatedTags;
    });
  };

  const generateOptions = (tagsString, selectedIndex) => {
    const options = tagsString.split(",").map((tag) => tag.trim());
    if (selectedIndex !== undefined) {
      return options.filter((_, index) => index !== selectedIndex);
    }
    return options;
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".csv",
    maxFiles: 1,
    multiple: false,
    disabled: isInputDisabled,
  });

  return (
    <div className="flex flex-col justify-center md:items-center gap-8">
      <h1
        className="text-2xl font-bold self-start md:hidden
      block "
      >
        Upload CSV
      </h1>
      <div className="flex flex-col items-center justify-center bg-[#FFFFFF] rounded-lg p-4 gap-5 md:w-[596px] md:h-[367px] w-[328px] h-[352px] md:mt-10 md:ml-8 ml-6">
        <div
          className={`flex flex-col items-center justify-center bg-[#FFFFFF] border-2 border-dashed rounded-lg md:p-4 gap-5 w-[296px] h-[258px] md:w-[565px] md:h-[350px] cursor-pointer ${
            isInputDisabled ? "pointer-events-none" : ""
          }`}
          {...getRootProps()}
        >
          <input {...getInputProps()} disabled={isInputDisabled} />
          {isUploading ? (
            <div className="flex flex-col items-center justify-center gap-3">
              <p>upload-{filename}</p>
              <button className="text-[#ff0000]" onClick={handleRemoveFile}>
                Remove
              </button>
            </div>
          ) : (
            <div className="flex justify-center items-center flex-col">
              <img
                src={excel_logo}
                alt="excel_logo"
                className="w-[100px] h-[100px]"
              />
              <p className="hidden md:block">
                Drop your excel sheet here or{" "}
                <span className="text-[#605BFF]">Browse</span>
              </p>
              <p className="md:hidden">
                Upload your excel sheet{" "}
                <span className="text-[#605BFF]">here</span>
              </p>
            </div>
          )}
        </div>
        <div>
          <button
            className={`relative rounded-lg md:p-4 w-[296px] h-[46px]  md:w-[564px] md:h-[56px] bg-[#605BFF] text-white text-base font-medium text-center ${
              isButtonDisabled ? "opacity-70 pointer-events-none" : ""
            }`}
            disabled={isButtonDisabled}
          >
            {isUploading ? (
              <ImSpinner8
                className="animate-spin absolute top-1/3  left-1/2"
                size={"20px"}
              />
            ) : (
              <div className="flex justify-center items-center gap-4">
                <LuUpload size={"20px"} />
                <span>Upload</span>
              </div>
            )}
          </button>
        </div>
      </div>
      {isFileUploaded && (
        <div className="flex justify-center items-start w-[1065px] h-auto flex-col gap-[3.5rem]">
          <h1 className="text-2xl font-bold">Upload</h1>
          <div className="flex bg-[#F5F5F5] border-2 border-solid h-[419px] overflow-y-scroll rounded-lg w-full text-[#000] px-5 py-3">
            <table>
              <thead>
                <tr className="">
                  <th>SI No.</th>
                  <th>Links</th>
                  <th>Prefix</th>
                  <th>Add Tags</th>
                  <th>Selected Tags</th>
                </tr>
              </thead>
              <tbody>
                {fileData.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <a>{data.links}</a>
                      </td>
                      <td>{data.prefix}</td>
                      {/* <td>{data["select tags"]}</td> */}
                      <td>
                        <select
                          value={
                            selectedTags[index[selectedTags.length - 1]]
                              ? selectedTags[index[selectedTags.length - 1]]
                              : ""
                          }
                          className="w-full p-2 border-2 border-solid border-gray-300 rounded-lg text-center"
                          onChange={(event) => handleTagChange(index, event)}
                        >
                          <option value="">Select Tag</option>
                          {generateOptions(
                            data["select tags"],
                            selectedTags[index]
                          ).map((tag, index) => (
                            <option key={index} value={tag}>
                              {tag}
                            </option>
                          ))}
                        </select>
                      </td>
                      {/* user selected tags */}
                      <td>
                        {" "}
                        {selectedTags[index]?.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="tag bg-[#605BFF] p-2 text-white rounded-lg mx-2"
                          >
                            {tag}
                            <button
                              onClick={() => handleRemoveTag(index, tagIndex)}
                              className="ml-2"
                            >
                              X
                            </button>
                          </span>
                        ))}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Upload;
