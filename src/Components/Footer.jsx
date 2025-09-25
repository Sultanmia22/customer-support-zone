import React from "react";
import fbImg from "../assets/fb.png";
import xImg from "../assets/x.png";
import inImg from "../assets/linkend.png";
import mailImg from "../assets/mail.png";
const Footer = () => {
  return (
    <div className="bg-black text-white ">
      <div className="w-[1440px] mx-auto ">
        <div className=" flex justify-between pt-[80px] pb-12 ">
          <div className="">
            <h2 className="text-2xl font-bold mb-3">CS — Ticket System</h2>
            <p className="footer_text text-justify w-[300px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="text-start">
            <h2 className="footer_title">Company</h2>

            <ul className="footer_text">
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Contact Saled</li>
            </ul>
          </div>

          <ul className="text-start">
            <h2 className="footer_title">Services</h2>

            <div className="footer_text">
              <li>Products & Services</li>
              <li>Customer Stories</li>
              <li>Download Apps</li>
            </div>
          </ul>

          <ul className="text-start">
            <h2 className="footer_title">Information</h2>

            <div className="footer_text">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Join Us</li>
            </div>
          </ul>

          <div className="">
            <h2 className="footer_title">Social Links</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <img src={xImg} alt="" />
                <p className="footer_text">@CS — Ticket System</p>
              </div>

              <div className="flex items-center gap-2">
                <img src={inImg} alt="" />
                <p className="footer_text">@CS — Ticket System</p>
              </div>

              <div className="flex items-center gap-2">
                <img src={fbImg} alt="" />
                <p className="footer_text">@CS — Ticket System</p>
              </div>

              <div className="flex items-center gap-2">
                <img src={mailImg} alt="" />
                <p className="footer_text">support@cst.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-b-1 border-gray-700 "></div>
        <p className="text-center py-8" >© 2025 CS — Ticket System. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
