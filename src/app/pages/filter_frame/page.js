"use client";
import { useState } from "react";
import React from "react";
import "./filter_frame.css";

function page() {
  const [selectedOption, setSelectedOption] = useState("RECOMMENDED");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE:HIGH TO LOW",
    "PRICE:LOW TO HIGH",
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div>
      <div className="frame1">
        <div className="items">
          <p>3425 ITEMS</p>
        </div>
        <div className="filter">
          <p>
            ❮<u> HIDE FILTER</u>
          </p>
        </div>
        {/* <div className='recom'>
        <select>
          <option value="option1" selected>RECOMMENDED </option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
        </select>
        </div> */}
        <div className="recom">
          <div
            className="custom-select"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="select-selected">{selectedOption}</div>
            {isDropdownOpen && (
              <div className="select-items">
                {options.map((option) => (
                  <div
                    key={option}
                    onClick={() => handleOptionClick(option)}
                    className={
                      selectedOption === option ? "same-as-selected" : ""
                    }
                  >
                    {selectedOption === option && (
                      <span className="tick">✔</span>
                    )}
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
