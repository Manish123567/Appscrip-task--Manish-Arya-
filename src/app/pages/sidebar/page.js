"use client";
import React, { useState } from "react";
import "./sidebar.css"; // Import your CSS file
import Card from "./../product_card/page";
import Footer from "./../footer/page";

const FilterSection = () => {
  const [isColorOpen, setIsColorOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSizeOpen, setIsSizeOpen] = useState(false);
  const [isFabricOpen, setIsFabricOpen] = useState(false);
  const [isSegmentOpen, setIsSegmentOpen] = useState(false);
  const [isSuitableOpen, setIsSuitableOpen] = useState(false);
  const [isMaterialOpen, setIsMaterialOpen] = useState(false);
  const [isPatternOpen, setIsPatternOpen] = useState(false);

  return (
    <div>
      <div className="head_content">
        <div className="main_content">
          <div className="filter-container">
            <div className="filter-section">
              <h3 className="filter-header">
                <span className="">
                  <span className="">
                    <span
                      className="square"
                      style={{ fontSize: "40px", marginRight: "10px" }}
                    >
                      □
                    </span>
                    CUSTOMISABLE
                  </span>
                </span>
              </h3>
            </div>

            <div className="filter-section">
              <h3 className="filter-header">
                <button
                  type="button"
                  className="filter-button"
                  onClick={() => setIsColorOpen(!isColorOpen)}
                >
                  <span className="filter_h">
                    <span className="filter-title">IDEAL FOR</span>
                    {!isColorOpen && <span className="filter_c">All</span>}
                  </span>
                  <span className="filter-icons">
                    {isColorOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                      >
                        <path d="m12 6.586-8.707 8.707 1.414 1.414L12 9.414l7.293 7.293 1.414-1.414L12 6.586z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                      >
                        <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
                      </svg>
                    )}
                  </span>
                </button>
              </h3>
              {isColorOpen && (
                <div className="filter-content">
                  <div className="filter-item">
                    <input
                      id="filter-mobile-color-0"
                      name="color[]"
                      value="white"
                      type="checkbox"
                      className="filter-checkbox"
                    />
                    <label
                      htmlFor="filter-mobile-color-0"
                      className="filter-label"
                    >
                      White
                    </label>
                  </div>
                  <div className="filter-item">
                    <input
                      id="filter-mobile-color-1"
                      name="color[]"
                      value="beige"
                      type="checkbox"
                      className="filter-checkbox"
                    />
                    <label
                      htmlFor="filter-mobile-color-1"
                      className="filter-label"
                    >
                      Beige
                    </label>
                  </div>
                  <div className="filter-item">
                    <input
                      id="filter-mobile-color-2"
                      name="color[]"
                      value="blue"
                      type="checkbox"
                      checked
                      className="filter-checkbox"
                    />
                    <label
                      htmlFor="filter-mobile-color-2"
                      className="filter-label"
                    >
                      Blue
                    </label>
                  </div>
                  {/* Add more color options here */}
                </div>
              )}
            </div>

            {/* Repeat for other sections */}
            <div className="filter-section">
              <h3 className="filter-header">
                <button
                  type="button"
                  className="filter-button"
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                >
                  <span className="filter_h">
                    <span className="filter-title">OCCASION</span>
                    {!isColorOpen && <span className="filter_c">All</span>}
                  </span>
                  <span className="filter-icons">
                    {isColorOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                      >
                        <path d="m12 6.586-8.707 8.707 1.414 1.414L12 9.414l7.293 7.293 1.414-1.414L12 6.586z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                      >
                        <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
                      </svg>
                    )}
                  </span>
                </button>
              </h3>
              {isCategoryOpen && (
                <div className="filter-content">
                  <div className="filter-item">
                    <input
                      id="filter-mobile-category-0"
                      name="category[]"
                      value="new-arrivals"
                      type="checkbox"
                      className="filter-checkbox"
                    />
                    <label
                      htmlFor="filter-mobile-category-0"
                      className="filter-label"
                    >
                      New Arrivals
                    </label>
                  </div>
                  <div className="filter-item">
                    <input
                      id="filter-mobile-category-1"
                      name="category[]"
                      value="sale"
                      type="checkbox"
                      className="filter-checkbox"
                    />
                    <label
                      htmlFor="filter-mobile-category-1"
                      className="filter-label"
                    >
                      Sale
                    </label>
                  </div>
                  {/* Add more category options here */}
                </div>
              )}
            </div>

            <div className="filter-section">
              <h3 className="filter-header">
                <button
                  type="button"
                  className="filter-button"
                  onClick={() => setIsSizeOpen(!isSizeOpen)}
                >
                  <span className="filter_h">
                    <span className="filter-title">WORK</span>
                    {!isColorOpen && <span className="filter_c">All</span>}
                  </span>
                  <span className="filter-icons">
                    {isColorOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                      >
                        <path d="m12 6.586-8.707 8.707 1.414 1.414L12 9.414l7.293 7.293 1.414-1.414L12 6.586z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                      >
                        <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
                      </svg>
                    )}
                  </span>
                </button>
              </h3>
              {isSizeOpen && (
                <div className="filter-content">
                  <div className="filter-item">
                    <input
                      id="filter-mobile-size-0"
                      name="size[]"
                      value="2l"
                      type="checkbox"
                      className="filter-checkbox"
                    />
                    <label
                      htmlFor="filter-mobile-size-0"
                      className="filter-label"
                    >
                      2L
                    </label>
                  </div>
                  <div className="filter-item">
                    <input
                      id="filter-mobile-size-1"
                      name="size[]"
                      value="6l"
                      type="checkbox"
                      className="filter-checkbox"
                    />
                    <label
                      htmlFor="filter-mobile-size-1"
                      className="filter-label"
                    >
                      6L
                    </label>
                  </div>
                  {/* Add more size options here */}
                </div>
              )}
            </div>

            <div className="filter-section">
              <h3 className="filter-header">
                <button
                  type="button"
                  className="filter-button"
                  onClick={() => setIsFabricOpen(!isFabricOpen)}
                >
                  <span className="filter_h">
                    <span className="filter-title">FABRIC</span>
                    {!isFabricOpen && <span className="filter_c">All</span>}
                  </span>
                  <span className="filter-icons">
                    {isFabricOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                      >
                        <path d="m12 6.586-8.707 8.707 1.414 1.414L12 9.414l7.293 7.293 1.414-1.414L12 6.586z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                      >
                        <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
                      </svg>
                    )}
                  </span>
                </button>
              </h3>
              {isFabricOpen && (
                <div className="filter-content">
                  <div className="filter-item">
                    <input
                      id="filter-mobile-color-0"
                      name="color[]"
                      value="white"
                      type="checkbox"
                      className="filter-checkbox"
                    />
                    <label
                      htmlFor="filter-mobile-color-0"
                      className="filter-label"
                    >
                      White
                    </label>
                  </div>
                  <div className="filter-item">
                    <input
                      id="filter-mobile-color-1"
                      name="color[]"
                      value="beige"
                      type="checkbox"
                      className="filter-checkbox"
                    />
                    <label
                      htmlFor="filter-mobile-color-1"
                      className="filter-label"
                    >
                      Beige
                    </label>
                  </div>
                  <div className="filter-item">
                    <input
                      id="filter-mobile-color-2"
                      name="color[]"
                      value="blue"
                      type="checkbox"
                      checked
                      className="filter-checkbox"
                    />
                    <label
                      htmlFor="filter-mobile-color-2"
                      className="filter-label"
                    >
                      Blue
                    </label>
                  </div>
                  {/* Add more color options here */}
                </div>
              )}
            </div>

            <div className="filter-section">
              <h3 className="filter-header">
                <button
                  type="button"
                  className="filter-button"
                  onClick={() => setIsSegmentOpen(!isSegmentOpen)}
                >
                  <span className="filter_h">
                    <span className="filter-title">SEGMENT</span>
                    {!isSegmentOpen && <span className="filter_c">All</span>}
                  </span>
                  <span className="filter-icons">
                    {isSegmentOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                      >
                        <path d="m12 6.586-8.707 8.707 1.414 1.414L12 9.414l7.293 7.293 1.414-1.414L12 6.586z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                      >
                        <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
                      </svg>
                    )}
                  </span>
                </button>
              </h3>
              {isSegmentOpen && (
                <div className="filter-content">
                  <div className="filter-item">
                    <input
                      id="filter-mobile-color-0"
                      name="color[]"
                      value="white"
                      type="checkbox"
                      className="filter-checkbox"
                    />
                    <label
                      htmlFor="filter-mobile-color-0"
                      className="filter-label"
                    >
                      White
                    </label>
                  </div>
                  <div className="filter-item">
                    <input
                      id="filter-mobile-color-1"
                      name="color[]"
                      value="beige"
                      type="checkbox"
                      className="filter-checkbox"
                    />
                    <label
                      htmlFor="filter-mobile-color-1"
                      className="filter-label"
                    >
                      Beige
                    </label>
                  </div>
                  <div className="filter-item">
                    <input
                      id="filter-mobile-color-2"
                      name="color[]"
                      value="blue"
                      type="checkbox"
                      checked
                      className="filter-checkbox"
                    />
                    <label
                      htmlFor="filter-mobile-color-2"
                      className="filter-label"
                    >
                      Blue
                    </label>
                  </div>
                  {/* Add more color options here */}
                </div>
              )}
            </div>

            <div className="filter-section">
              <h3 className="filter-header">
                <button
                  type="button"
                  className="filter-button"
                  onClick={() => setIsSuitableOpen(!isSuitableOpen)}
                >
                  <span className="filter_h">
                    <span className="filter-title">SUITABLE FOR</span>
                    {!isSuitableOpen && <span className="filter_c">All</span>}
                  </span>
                  <span className="filter-icons">
                    {isSuitableOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                      >
                        <path d="m12 6.586-8.707 8.707 1.414 1.414L12 9.414l7.293 7.293 1.414-1.414L12 6.586z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                      >
                        <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
                      </svg>
                    )}
                  </span>
                </button>
              </h3>
              {isSuitableOpen && (
                <div className="filter-content">
                  <div className="filter-item">
                    <input
                      id="filter-mobile-color-0"
                      name="color[]"
                      value="white"
                      type="checkbox"
                      className="filter-checkbox"
                    />
                    <label
                      htmlFor="filter-mobile-color-0"
                      className="filter-label"
                    >
                      White
                    </label>
                  </div>
                  <div className="filter-item">
                    <input
                      id="filter-mobile-color-1"
                      name="color[]"
                      value="beige"
                      type="checkbox"
                      className="filter-checkbox"
                    />
                    <label
                      htmlFor="filter-mobile-color-1"
                      className="filter-label"
                    >
                      Beige
                    </label>
                  </div>
                  <div className="filter-item">
                    <input
                      id="filter-mobile-color-2"
                      name="color[]"
                      value="blue"
                      type="checkbox"
                      checked
                      className="filter-checkbox"
                    />
                    <label
                      htmlFor="filter-mobile-color-2"
                      className="filter-label"
                    >
                      Blue
                    </label>
                  </div>
                  {/* Add more color options here */}
                </div>
              )}
            </div>

            <div className="filter-section">
              <h3 className="filter-header">
                <button
                  type="button"
                  className="filter-button"
                  onClick={() => setIsMaterialOpen(!isMaterialOpen)}
                >
                  <span className="filter_h">
                    <span className="filter-title">RAW MATERIALS</span>
                    {!isMaterialOpen && <span className="filter_c">All</span>}
                  </span>
                  <span className="filter-icons">
                    {isMaterialOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                      >
                        <path d="m12 6.586-8.707 8.707 1.414 1.414L12 9.414l7.293 7.293 1.414-1.414L12 6.586z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                      >
                        <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
                      </svg>
                    )}
                  </span>
                </button>
              </h3>
              {isMaterialOpen && (
                <div className="filter-content">
                  <div className="filter-item">
                    <input
                      id="filter-mobile-color-0"
                      name="color[]"
                      value="white"
                      type="checkbox"
                      className="filter-checkbox"
                    />
                    <label
                      htmlFor="filter-mobile-color-0"
                      className="filter-label"
                    >
                      White
                    </label>
                  </div>
                  <div className="filter-item">
                    <input
                      id="filter-mobile-color-1"
                      name="color[]"
                      value="beige"
                      type="checkbox"
                      className="filter-checkbox"
                    />
                    <label
                      htmlFor="filter-mobile-color-1"
                      className="filter-label"
                    >
                      Beige
                    </label>
                  </div>
                  <div className="filter-item">
                    <input
                      id="filter-mobile-color-2"
                      name="color[]"
                      value="blue"
                      type="checkbox"
                      checked
                      className="filter-checkbox"
                    />
                    <label
                      htmlFor="filter-mobile-color-2"
                      className="filter-label"
                    >
                      Blue
                    </label>
                  </div>
                  {/* Add more color options here */}
                </div>
              )}
            </div>

            <div className="filter-section">
              <h3 className="filter-header">
                <button
                  type="button"
                  className="filter-button"
                  onClick={() => setIsPatternOpen(!isPatternOpen)}
                >
                  <span className="filter_h">
                    <span className="filter-title">PATTERNS</span>
                    {!isPatternOpen && <span className="filter_c">All</span>}
                  </span>
                  <span className="filter-icons">
                    {isPatternOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                      >
                        <path d="m12 6.586-8.707 8.707 1.414 1.414L12 9.414l7.293 7.293 1.414-1.414L12 6.586z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                      >
                        <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
                      </svg>
                    )}
                  </span>
                </button>
              </h3>
              {isPatternOpen && (
                <div className="filter-content">
                  <div className="filter-item">
                    <input
                      id="filter-mobile-color-0"
                      name="color[]"
                      value="white"
                      type="checkbox"
                      className="filter-checkbox"
                    />
                    <label
                      htmlFor="filter-mobile-color-0"
                      className="filter-label"
                    >
                      White
                    </label>
                  </div>
                  <div className="filter-item">
                    <input
                      id="filter-mobile-color-1"
                      name="color[]"
                      value="beige"
                      type="checkbox"
                      className="filter-checkbox"
                    />
                    <label
                      htmlFor="filter-mobile-color-1"
                      className="filter-label"
                    >
                      Beige
                    </label>
                  </div>
                  <div className="filter-item">
                    <input
                      id="filter-mobile-color-2"
                      name="color[]"
                      value="blue"
                      type="checkbox"
                      checked
                      className="filter-checkbox"
                    />
                    <label
                      htmlFor="filter-mobile-color-2"
                      className="filter-label"
                    >
                      Blue
                    </label>
                  </div>
                  {/* Add more color options here */}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="product_card">
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FilterSection;
