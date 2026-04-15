import React from "react";
import "./Footer.css";

const Footer = () => {

  const year = new Date().getFullYear();

  return (

    <footer className="footer">

      <div className="footer-glow"></div>


      <div className="footer-wrapper">

        {/* brand */}

        <div className="footer-brand">

          <h2>

            RAW<span>GYM</span>

          </h2>


          <p>

            Transform your body with expert trainers, modern equipment and
            scientifically designed fitness programs for real results.

          </p>


          <div className="social-icons">

            <a href="#">
              📸
            </a>

            <a href="#">
              ▶️
            </a>

            <a href="#">
              👍
            </a>

            <a href="#">
              💬
            </a>

          </div>

        </div>



        {/* quick links */}

        <div className="footer-links">

          <h3>

            Quick Links

          </h3>


          <a href="#hero">

            Home

          </a>


          <a href="#programs">

            Programs

          </a>


          <a href="#pricing">

            Pricing

          </a>


          <a href="#why">

            Why Choose Us

          </a>


          <a href="#transformations">

            Transformations

          </a>

        </div>



        {/* contact */}

        <div className="footer-contact">

          <h3>

            Contact

          </h3>


          <p>

            📞 +91 95977 62773

          </p>


          <p>

            📍 Madurai, Tamil Nadu

          </p>


        

        </div>



        {/* branches */}


      </div>



      {/* bottom */}

      <div className="footer-bottom">

        <p>

          © {year} Raw Gym. All Rights Reserved.

        </p>

      </div>


    </footer>

  );

};

export default Footer;