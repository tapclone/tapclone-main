import React from "react";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import logo from "../../assets/logomain.png";
import footerlogo from "../../assets/footerlogo.png";
import "./Footer.css";
function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", // smooth scrolling animation
        });
    }
       

  return (
    <div className="py-6">
      <div className="footerMain">
        <div className="logoDiv flex items-center mt-12">
          <img src={footerlogo} alt="logo" className="" />
        </div>
        <div>
          <h4 className="text-[1.125rem] font-[500]">KOCHI</h4>
          <ul className="mt-8 text-[0.875rem] text-[#dbdada] space-y-1">
            <li>Tapclone, House no: 32/2517A</li>
            <li>PJ Antony Rd, Sonia Nagar</li>
            <li>Palarivattom, Kochi, Ernakulam</li>
            <li>Kerala - 682025</li>
            <li>Ph: +0484 796 5300</li>
            <li>Mob: +91 9037 833 933</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[1.125rem] font-[500]">CALICUT</h4>
          <ul className="mt-8 text-[0.875rem] text-[#dbdada] space-y-1">
            <li>Tapclone, Fortune Business Park</li>
            <li>2nd Floor, Cherooty Nagar</li>
            <li>Asokapuram, </li>
            <li>Calicut-673006</li>
            <li>Ph : 0495 460 5549</li>
            <li>Mob: +91 9037 833 933</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[1.125rem] font-[500]">LETS&nbsp; CONNECT</h4>
          <ul className="mt-8 flex gap-5">
            <li>
              <a
                href="https://www.facebook.com/Tapclone"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M12.5001 0C5.59655 0 0 5.61994 0 12.5523C0 18.7699 4.50652 23.919 10.4153 24.9161V15.1711H7.39993V11.6642H10.4153V9.07843C10.4153 6.07814 12.2402 4.44316 14.9059 4.44316C16.1826 4.44316 17.2798 4.53869 17.5983 4.58077V7.71686L15.7494 7.71776C14.3 7.71776 14.0206 8.40925 14.0206 9.42432V11.6624H17.479L17.0279 15.1693H14.0206V25C20.2052 24.2441 25 18.9638 25 12.5487C25 5.61994 19.4035 0 12.5001 0Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/tapclone_official/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    d="M18.293 12.5586C18.293 15.3794 16.0064 17.666 13.1856 17.666C10.3647 17.666 8.07812 15.3794 8.07812 12.5586C8.07812 9.73779 10.3647 7.45117 13.1856 7.45117C16.0064 7.45117 18.293 9.73779 18.293 12.5586Z"
                    fill="white"
                  />
                  <path
                    d="M25.1312 3.52479C24.8857 2.85949 24.494 2.2573 23.9851 1.76301C23.4908 1.25406 22.889 0.862367 22.2233 0.616849C21.6834 0.407161 20.8723 0.157571 19.3784 0.0895755C17.7624 0.0158793 17.2779 0 13.1867 0C9.09517 0 8.61065 0.0154722 6.99504 0.0891683C5.50116 0.157571 4.68969 0.407161 4.1502 0.616849C3.48449 0.862367 2.8823 1.25406 2.38841 1.76301C1.87946 2.2573 1.48777 2.85909 1.24185 3.52479C1.03216 4.06469 0.782571 4.87616 0.714575 6.37004C0.640879 7.98565 0.625 8.47017 0.625 12.5617C0.625 16.6529 0.640879 17.1374 0.714575 18.7534C0.782571 20.2473 1.03216 21.0584 1.24185 21.5983C1.48777 22.264 1.87906 22.8658 2.38801 23.3601C2.8823 23.869 3.48409 24.2607 4.14979 24.5062C4.68969 24.7163 5.50116 24.9659 6.99504 25.0339C8.61065 25.1076 9.09477 25.1231 13.1863 25.1231C17.2783 25.1231 17.7628 25.1076 19.378 25.0339C20.8719 24.9659 21.6834 24.7163 22.2233 24.5062C23.5596 23.9907 24.6157 22.9346 25.1312 21.5983C25.3409 21.0584 25.5905 20.2473 25.6589 18.7534C25.7326 17.1374 25.7481 16.6529 25.7481 12.5617C25.7481 8.47017 25.7326 7.98565 25.6589 6.37004C25.5909 4.87616 25.3413 4.06469 25.1312 3.52479ZM13.1867 20.4293C8.84111 20.4293 5.31835 16.907 5.31835 12.5613C5.31835 8.2157 8.84111 4.69335 13.1867 4.69335C17.532 4.69335 21.0547 8.2157 21.0547 12.5613C21.0547 16.907 17.532 20.4293 13.1867 20.4293ZM21.3658 6.22102C20.3503 6.22102 19.527 5.39774 19.527 4.38228C19.527 3.36682 20.3503 2.54354 21.3658 2.54354C22.3813 2.54354 23.2045 3.36682 23.2045 4.38228C23.2041 5.39774 22.3813 6.22102 21.3658 6.22102Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/82332328/admin/feed/posts/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M12.5 0C5.5975 0 0 5.5975 0 12.5C0 19.4025 5.5975 25 12.5 25C19.4025 25 25 19.4025 25 12.5C25 5.5975 19.4025 0 12.5 0ZM8.86765 18.8965H5.82333V9.73759H8.86765V18.8965ZM7.34558 8.48694H7.32574C6.30417 8.48694 5.64346 7.7837 5.64346 6.90479C5.64346 6.00605 6.32439 5.32227 7.3658 5.32227C8.40721 5.32227 9.04808 6.00605 9.06792 6.90479C9.06792 7.7837 8.40721 8.48694 7.34558 8.48694ZM19.8448 18.8965H16.8009V13.9967C16.8009 12.7653 16.3601 11.9255 15.2586 11.9255C14.4176 11.9255 13.9168 12.492 13.6967 13.0388C13.6162 13.2345 13.5965 13.508 13.5965 13.7817V18.8965H10.5524C10.5524 18.8965 10.5923 10.5968 10.5524 9.73759H13.5965V11.0344C14.0011 10.4103 14.7249 9.52263 16.3401 9.52263C18.343 9.52263 19.8448 10.8316 19.8448 13.6448V18.8965Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M19.7435 1.68479C17.819 0.561526 15.717 0 13.438 0C11.1588 0 9.05688 0.561526 7.13232 1.68479C5.20776 2.80811 3.68382 4.33204 2.56077 6.25634C1.4375 8.18112 0.875977 10.283 0.875977 12.5621C0.875977 15.1028 1.56812 17.4091 2.9532 19.4807C4.33801 21.553 6.15347 23.0848 8.40005 24.0769C8.35623 22.9101 8.42716 21.9453 8.6127 21.182L10.2319 14.3448C9.9593 13.8106 9.82308 13.1456 9.82308 12.3494C9.82308 11.4225 10.0575 10.6481 10.5264 10.0268C10.995 9.40503 11.5677 9.09412 12.2438 9.09412C12.7889 9.09412 13.2089 9.27385 13.5034 9.63413C13.7978 9.99385 13.9452 10.4465 13.9452 10.9916C13.9452 11.3299 13.8822 11.7416 13.7571 12.2267C13.6316 12.712 13.468 13.2735 13.2665 13.9115C13.0647 14.5492 12.9203 15.0589 12.8329 15.4407C12.68 16.1058 12.8056 16.6755 13.2092 17.15C13.6124 17.6244 14.1469 17.8614 14.8122 17.8614C15.979 17.8614 16.9359 17.2128 17.683 15.9151C18.4299 14.6174 18.8033 13.0417 18.8033 11.1877C18.8033 9.75941 18.3427 8.59784 17.4212 7.70371C16.4997 6.8098 15.2155 6.36245 13.5692 6.36245C11.7261 6.36245 10.2349 6.95426 9.09562 8.137C7.95613 9.32031 7.38636 10.7354 7.38636 12.3814C7.38636 13.3629 7.66461 14.1865 8.22054 14.8516C8.40586 15.0697 8.46586 15.304 8.40052 15.5546C8.37849 15.6202 8.33497 15.7837 8.26964 16.0452C8.20435 16.3067 8.16054 16.4761 8.13876 16.5523C8.05139 16.9014 7.84433 17.0105 7.51698 16.8794C6.67725 16.5305 6.03924 15.9254 5.60331 15.0639C5.16711 14.2026 4.94912 13.2049 4.94912 12.0708C4.94912 11.3401 5.06621 10.6095 5.30064 9.87884C5.53507 9.14822 5.90012 8.44228 6.39662 7.76045C6.89255 7.07946 7.487 6.47655 8.17967 5.95324C8.87208 5.42967 9.7145 5.01022 10.7069 4.69345C11.6991 4.37751 12.7679 4.21929 13.9129 4.21929C15.4613 4.21929 16.8517 4.56283 18.0838 5.24964C19.316 5.93675 20.2566 6.82563 20.9055 7.91598C21.5541 9.00636 21.8788 10.1729 21.8788 11.4165C21.8788 13.0522 21.595 14.5244 21.0282 15.833C20.4611 17.1416 19.6596 18.1693 18.6236 18.9162C17.5874 19.663 16.4096 20.0365 15.0904 20.0365C14.4251 20.0365 13.8036 19.8812 13.2256 19.5703C12.6474 19.2594 12.2494 18.8914 12.0314 18.4661C11.5408 20.396 11.2464 21.5469 11.1482 21.9173C10.9408 22.6917 10.5155 23.5856 9.87219 24.5998C11.039 24.9487 12.2276 25.1231 13.438 25.1231C15.717 25.1231 17.819 24.5616 19.7435 23.4386C21.668 22.3152 23.1919 20.7913 24.3153 18.8665C25.4383 16.9419 26.0001 14.8403 26.0001 12.561C26.0001 10.2817 25.4383 8.18012 24.3153 6.2553C23.1922 4.33204 21.668 2.80811 19.7435 1.68479Z"
                  fill="white"
                />
              </svg>
            </li>
          </ul>
          <button className="mt-10" onClick={scrollToTop}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
            >
              <path
                d="M20.6863 59.3137C27.9303 62.3143 36.0697 62.3143 43.3137 59.3137C50.5578 56.3131 56.3131 50.5578 59.3137 43.3137C62.3143 36.0697 62.3143 27.9303 59.3137 20.6863C56.3131 13.4422 50.5578 7.68687 43.3137 4.68629C36.0697 1.68571 27.9303 1.68571 20.6863 4.68629C13.4422 7.68687 7.68687 13.4422 4.68629 20.6863C1.68571 27.9303 1.68571 36.0697 4.68629 43.3137C7.68687 50.5578 13.4422 56.3131 20.6863 59.3137Z"
                fill="white"
              />
              <path d="M22 34L32 26L42 34" stroke="black" stroke-width="1.6" />
            </svg>
          </button>
        </div>
      </div>
      <h2 className="text-center text-[1rem] ml-12 pt-8 text-[#dbdada] ">
        © 2022 | Tapclone | All Rights Reserved
      </h2>

      {/* <div className="addressDiv">
                <p>House No 32/2517A Adwaitham <br />
                    PJ Antony Rd, Palarivattom <br />
                    Kerala 682025</p>
            </div>
            <div className="contactDiv">
                <h2>BUSINESS</h2>
                <p>INFO@TAPCLONE.IN</p>
                <a href='tel:+91 9037833933'>+91 9037 833 933</a>

            </div>
            <div className="navLinksDiv">
                <a href='/'>HOME</a>
                <a href='/services'>SERVICES</a>
                <p>CAREER</p>
                <p>BLOG</p>
                <a href='/contact'>CONTACT</a>
            </div>
            <div className="socialLinks">
                <a href='https://www.instagram.com/tapclone_official/' target="_blank"><IoLogoInstagram size={25}/></a>
                <p>Twitter</p>
                <a href='https://www.linkedin.com/company/82332328/admin/feed/posts/' target="_blank"><LiaLinkedin size={32}/></a>
                <a href='https://www.facebook.com/Tapclone' target="_blank"><LiaFacebook size={32}/></a>

            </div> */}
    </div>
  );
}

export default Footer;
