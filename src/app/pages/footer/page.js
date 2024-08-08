import React from "react";
import "./footer.css";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <div class="container2">
        <div class="box">
          <div class="text-content">
            <h3 class="headline">BE THE FIRST TO KNOW</h3>
            <p class="description">Sign up for updates from mettā muse. </p>
          </div>
          <div class="form-group">
            <input
              class="email-input"
              type="text"
              placeholder="email@email.com"
            />
            <input class="subscribe-button" type="submit" value="SUBSCRIBE" />
          </div>
          {/* <div class="footer-links">
                <ul class="links-list">
                    <li><a href="#" class="link">Footerlink 1</a></li>
                    <li><a href="#" class="link">Footerlink 2</a></li>
                    <li><a href="#" class="link">Footerlink 3</a></li>
                    <li><a href="#" class="link">Footerlink 4</a></li>
                </ul>
            </div> */}
          {/* <div class="logo-section">
                <div class="logo-container">
                    <img src="https://www.beterbekend.nl/wp-content/themes/beterbekend/img/beter-bekend-logo-normal.svg" alt="Logo" class="logo"/>
                </div>
                <ul class="social-links">
                    <li>
                        <a href="#" target="_blank" rel="nofollow">
                            <svg viewBox="0 0 512 512" class="social-icon">
                                <path d="M363.273,0H148.728C66.719,0,0,66.719,0,148.728v214.544C0,445.281,66.719,512,148.728,512h214.544
                                    C445.281,512,512,445.281,512,363.273V148.728C512,66.719,445.281,0,363.273,0z M472,363.272C472,423.225,423.225,472,363.273,472
                                    H148.728C88.775,472,40,423.225,40,363.273V148.728C40,88.775,88.775,40,148.728,40h214.544C423.225,40,472,88.775,472,148.728
                                    V363.272z"/>
                                <path d="M256,118c-76.094,0-138,61.906-138,138s61.906,138,138,138s138-61.906,138-138S332.094,118,256,118z M256,354
                                    c-54.037,0-98-43.963-98-98s43.963-98,98-98s98,43.963,98,98S310.037,354,256,354z"/>
                                <circle cx="396" cy="116" r="20"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank" rel="nofollow">
                            <svg viewBox="0 0 24 24" class="social-icon">
                                <path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank" rel="nofollow">
                            <svg viewBox="0 0 24 24" class="social-icon">
                                <path d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z"/>
                                <path d="m.396 7.977h4.976v16.023h-4.976z"/>
                                <path d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z"/>                           
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank" rel="nofollow">
                            <svg viewBox="0 0 512 512" class="social-icon">
                                <path d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016
                                    c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992
                                    c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056
                                    c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152
                                    c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792
                                    c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44
                                    C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568
                                    C480.224,136.96,497.728,118.496,512,97.248z"/>                          
                            </svg>
                        </a>
                    </li>
                </ul>
            </div> */}
        </div>
        <div className="box1">
          <div className="box2">
            CONTACT US
            <ul>
              <li>customercare@mettamuse.com</li>
              <li>+44 221 133 5360</li>
              {/* <li>shoes</li>
  	 				<li>dress</li> */}
            </ul>
          </div>
          <div className="box3">
            CURRENCY
            <ul>
              <li
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginRight: "6px",
                }}
              >
                <span>
                  <a href="#">
                    <Image
                      src="/Images/usa.png"
                      alt=""
                      width={30}
                      height={30}
                      unoptimized
                    ></Image>
                  </a>
                </span>
                <p>+USD</p>
              </li>
              <li>
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </li>
              {/* <li>shoes</li>
  	 				<li>dress</li> */}
            </ul>
          </div>
        </div>
      </div>

      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col">
              <h4>metta muse</h4>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Stories</a>
                </li>
                <li>
                  <a href="#">Artisans</a>
                </li>
                <li>
                  <a href="#">Boutiques</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">EU Compliances Docs</a>
                </li>
              </ul>
            </div>
            {/* <div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">shipping</a></li>
  	 				<li><a href="#">returns</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div> */}
            <div class="footer-col">
              <h4>QUICK LINKS</h4>
              <ul>
                <li>
                  <a href="#">Orders & Shipping</a>
                </li>
                <li>
                  <a href="#">Jion/Login as a Seller</a>
                </li>
                <li>
                  <a href="#">Payment & Pricing</a>
                </li>
                <li>
                  <a href="#">Return & Refunds</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <div className="follow">
                <h4>follow us</h4>
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "9px" }}
                >
                  <span>
                    <a href="#">
                      <Image
                        src="/Images/insta.png"
                        alt=""
                        width={20}
                        height={20}
                        unoptimized
                      ></Image>
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <Image
                        src="/Images/linkedin.png"
                        alt=""
                        width={20}
                        height={20}
                        unoptimized
                      ></Image>
                    </a>
                  </span>
                </div>
              </div>
              <div
                className="tg"
                style={{
                  marginTop: "40px",
                  marginBottom: "10px",
                  color: "white",
                }}
              >
                <p>mettā muse Accepts</p>
              </div>
              <div>
                <div class="social-links">
                  <a href="#">
                    <Image
                      src="/Images/googlepay.png"
                      alt=""
                      width={20}
                      height={20}
                      unoptimized
                    ></Image>
                  </a>
                  <a href="#">
                    <Image
                      src="/Images/mastercard.png"
                      alt=""
                      width={20}
                      height={20}
                      unoptimized
                    ></Image>
                  </a>

                  {/* <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="mastercard"><path fill="#FF5F00" d="M15.245 17.831h-6.49V6.168h6.49v11.663z"></path><path fill="#EB001B" d="M9.167 12A7.404 7.404 0 0 1 12 6.169 7.417 7.417 0 0 0 0 12a7.417 7.417 0 0 0 11.999 5.831A7.406 7.406 0 0 1 9.167 12z"></path><path fill="#F79E1B" d="M24 12a7.417 7.417 0 0 1-12 5.831c1.725-1.358 2.833-3.465 2.833-5.831S13.725 7.527 12 6.169A7.417 7.417 0 0 1 24 12z"></path></svg></a> */}
                  {/* <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333333 199007" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M197991 54837c-4872-5548-13680-7930-24941-7930h-32687c-2302 0-4274 1663-4622 3946l-13622 86322c-268 1703 1047 3248 2776 3248h20195l5076-32153-163 1006c347-2281 2300-3946 4601-3946l9590 4c18842 0 33587-7639 37907-29786 124-658 243-1295 328-1914 1274-8177 0-13764-4438-18794v-2z" fill="#003087"/><path d="M208161 78610c-4911 21800-20072 33304-43967 33304l-7948-2-5528 35091-6661 4-347 2259c-225 1498 926 2834 2425 2834h17015c2011 0 3722-1459 4050-3451l163-861 3209-20321 204-1110c307-1992 2032-3452 4050-3452l2523-1c16473 0 29378-6698 33160-26052 1421-7357 881-13600-2341-18242h-6z" fill="#009cde"/><path d="M31366 0h270600c8631 0 16474 3528 22156 9210 5683 5683 9211 13526 9211 22156v136275c0 8629-3529 16472-9211 22155-5683 5682-13526 9211-22155 9211H31367c-8629 0-16473-3528-22156-9211C3529 184114 1 176272 1 167641V31366c0-8631 3528-16474 9210-22156S22737 0 31368 0zm270600 10811H31366c-5647 0-10785 2315-14513 6043s-6043 8866-6043 14513v136275c0 5646 2315 10784 6043 14512 3729 3729 8867 6044 14513 6044h270600c5645 0 10783-2315 14512-6044 3728-3729 6044-8867 6044-14511V31368c0-5645-2315-10784-6043-14513-3728-3728-8867-6043-14513-6043z" fill="gray" fill-rule="nonzero"/></svg></a> */}
                  <a href="#">
                    <Image
                      src="/Images/paypal.png"
                      alt=""
                      width={20}
                      height={20}
                      unoptimized
                    ></Image>
                  </a>
                  <a href="#">
                    <Image
                      src="/Images/amex2.png"
                      alt=""
                      width={28}
                      height={34}
                      unoptimized
                    ></Image>
                  </a>
                  <a href="#">
                    <Image
                      src="/Images/applepay.png"
                      alt=""
                      width={20}
                      height={20}
                      unoptimized
                    ></Image>
                  </a>
                  <a href="#">
                    <Image
                      src="/Images/opay.png"
                      alt=""
                      width={42}
                      height={27}
                      unoptimized
                    ></Image>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
