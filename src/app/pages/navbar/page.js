import React from "react";
import "./navbar.css";
import Frame from "./../filter_frame/page";
import Sidebar from "./../sidebar/page";
import Image from "next/image";

export default function page() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="grey_strip">
        <div className="grey">
          <div className="frame34">
            <div className="element-container">
              <span className="element1"></span>
              <p>
                {" "}
                <span>
                  <Image
                    src="/Images/head.png"
                    alt=""
                    width={20}
                    height={20}
                    unoptimized
                  ></Image>
                </span>
                lorem ipsum dolar
              </p>
            </div>
            <div className="element-container">
              <span className="element1"></span>
              <p>
                {" "}
                <span>
                  <Image
                    src="/Images/head.png"
                    alt=""
                    width={20}
                    height={20}
                    unoptimized
                  ></Image>
                </span>
                lorem ipsum dolar
              </p>
            </div>
            <div className="element-container">
              <span className="element1"></span>
              <p>
                {" "}
                <span>
                  <Image
                    src="/Images/head.png"
                    alt=""
                    width={20}
                    height={20}
                    unoptimized
                  ></Image>
                </span>
                lorem ipsum dolar
              </p>
            </div>
          </div>
        </div>
        <div className="header">
          <div className="logo_container">
            <div className="icon">
              <h1>rgrg</h1>
            </div>
            <div className="logo">
              <h1>LOGO</h1>
            </div>
            <div className="icon2">
              <span>
                <Image
                  src="/Images/search.png"
                  alt=""
                  width={20}
                  height={20}
                  unoptimized
                ></Image>
              </span>
              <span>
                <Image
                  src="/Images/heart.png"
                  alt=""
                  width={20}
                  height={20}
                  unoptimized
                ></Image>
              </span>
              <span>
                <Image
                  src="/Images/shop.png"
                  alt=""
                  width={20}
                  height={20}
                  unoptimized
                ></Image>
              </span>
              <span>
                <Image
                  src="/Images/person.png"
                  alt=""
                  width={20}
                  height={20}
                  unoptimized
                ></Image>
              </span>
              <span>
                <p>ENG ᐯ</p>
              </span>
            </div>
          </div>
          <nav className="tabs">
            <ul>
              <li>
                <a href="about.html">SHOP</a>
              </li>
              <li>
                <a href="work.html">SKILL</a>
              </li>
              <li>
                <a href="contact.html">STORY</a>
              </li>
              <li>
                <a href="contact.html">ABOUT</a>
              </li>
              <li>
                <a href="contact.html">CONTACT US</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="heading">
        <p className="head1">DISCOVER OUR PRODUCTS</p>
        <p className="head2">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
      <Frame />
      <Sidebar />
    </div>
  );
}
