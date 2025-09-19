import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaCcPaypal,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaApplePay,
  FaGooglePay,
} from "react-icons/fa";
import {
  PiTruckLight,
  PiCurrencyEurLight,
  PiSparkleLight,
} from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-[90vw] rounded-3xl px-6 sm:px-10 md:px-16 py-14">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        {/* Column 1: Logo + Social + Features */}
        <div className="space-y-8">
          {/* Logo */}
          <h1 className="text-2xl font-bold">✺ luminous labs</h1>

          {/* Social Media */}
          <div className="flex gap-3 text-lg">
            {[FaInstagram, FaLinkedinIn, FaFacebookF, FaYoutube].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-[#1e1e1e] rounded-md flex items-center justify-center hover:bg-gray-700 transition"
                >
                  <Icon />
                </div>
              )
            )}
          </div>

          {/* Features */}
          <div className="space-y-4 text-sm text-gray-300">
            <div className="flex items-start gap-3">
              <PiSparkleLight size={20} />
              <p>Designing with love by lighting experts in Austria, Europe</p>
            </div>
            <div className="flex items-start gap-3">
              <PiCurrencyEurLight size={20} />
              <p>100-day money-back guarantee</p>
            </div>
            <div className="flex items-start gap-3">
              <PiTruckLight size={20} />
              <p>Global express shipping</p>
            </div>
          </div>
        </div>

        {/* Column 2 & 3: Left Links */}
        <div className="col-span-2 grid grid-cols-2 gap-10 text-sm text-gray-400">
          <ul className="space-y-3">
            <li className="text-white font-medium">Technology</li>
            <li>Company</li>
            <li>Shop</li>
            <li>Commercial</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
          <ul className="space-y-3">
            <li className="text-white font-medium">Shipping & Delivery</li>
            <li>Privacy Policy</li>
            <li>Revocation</li>
            <li>Terms & Conditions</li>
            <li>Imprint</li>
            <li>Press kit</li>
          </ul>
        </div>
      </div>
    

      {/* Disclaimer */}
      <p className="text-[11px] text-gray-500 mt-14 max-w-4xl mx-auto text-center leading-relaxed">
        These statements have not been evaluated by the Food and Drug
        Administration. In the European Union, the intended use of our products
        does not fall within the scope of article 2 section 1 of 2017/45 MDR.
        Our products are not intended to diagnose, treat, cure, or prevent any
        disease.
      </p>

      {/* Payment Icons */}
      <div className="flex flex-wrap w-full justify-center items-center gap-10 md:gap-20 lg:gap-20 text-white text-2xl mt-12">
        <FaCcPaypal />
        <FaCcMastercard />
        <FaCcVisa />
        <FaCcAmex />
        <FaApplePay />
        <FaGooglePay />
      </div>
    </footer>
  );
};

export default Footer;
