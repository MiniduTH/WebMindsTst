import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

function Table() {
  const headers = ["Title", "Tags", "Date", " "];
  const data = [
    { Title: "Tree planting", Tags: "green and cleaner", Date: "12/03/23" },
    { Title: "Beach cleanup", Tags: "future generations", Date: "29/05/23" },
    {
      Title: "Educational events",
      Tags: ["courses ", "green initiatives"],
      Date: "06/06/23",
    },
    { Title: "Park cleaning", Tags: "day off cleaning", Date: "18/08/23" },
  ];

  const [clickedRow, setClickedRow] = useState(null); // State to track which row is clicked

  // Toggle click state for the specific row
  const handleClick = (index) => {
    setClickedRow(index === clickedRow ? null : index); // Toggle the clicked state
  };

  return (
    <div>
      <div className="flex justify-between items-center bg-gray-50 p-8 shadow-md">
        {/* Left Section */}
        <div className="text-4xl font-normal text-gray-800 w-11/12">
          Our initiatives for 2023
        </div>

        {/* Right Section */}
        <div className=" text-sm text-gray-900 w-3/12">
          Find out what projects we are implementing to protect nature
        </div>
      </div>
      <div className="bg-gray-50 rounded-md w-full">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div>
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  {headers.map((header, index) => (
                    <th
                      key={index}
                      className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-normal text-gray-600 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, rowIndex) => (
                  <tr key={rowIndex} className="bg-gray-50 border-b">
                    {/* Title Column */}
                    <td className="px-5 py-5 text-gray-900 font-semibold whitespace-nowrap text-lg">
                      {row.Title}
                    </td>

                    {/* Tags Column */}
                    <td className="px-5 py-5 text-gray-700 text-sm whitespace-nowrap">
                      {Array.isArray(row.Tags) ? (
                        row.Tags.map((tag, index) => (
                          <span
                            key={index}
                            className={`mr-2 py-1 px-2 rounded-full ${
                              clickedRow === rowIndex
                                ? "bg-yellow-200 "
                                : "  border border-gray-200  "
                            } bg-white`}
                          >
                            {tag}
                          </span>
                        ))
                      ) : (
                        <span
                          className={`mr-2 py-1 px-2 rounded-full ${
                            clickedRow === rowIndex
                              ? " bg-yellow-200 "
                              : " border border-gray-200 "
                          } bg-white`}
                        >
                          {row.Tags}
                        </span>
                      )}
                    </td>

                    {/* Date Column */}
                    <td className="px-5 py-5 text-gray-900  font-semibold  text-lg whitespace-nowrap">
                      {row.Date}
                    </td>

                    {/* Action Column with Clickable Circle */}
                    <td className="px-5 py-5 text-sm whitespace-nowrap">
                      <div
                        className={`h-12 w-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                          clickedRow === rowIndex
                            ? "border-dotted border-gray-400  border-2"
                            : " "
                        } bg-white`}
                        onClick={() => handleClick(rowIndex)} // Pass row index to handleClick
                      >
                        <span
                          className={`transform transition-transform duration-300 ${
                            clickedRow === rowIndex ? "-rotate-45" : "rotate-0"
                          }`}
                        >
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
