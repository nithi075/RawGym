import React from "react";
import "./Location.css";

const Location = () => {

  const location = {
      map: "https://www.google.com/maps?q=Raw Gym Madurai&output=embed",
      link: "https://www.google.com/maps?q=Raw Gym Madurai",
      address: "Panagal Road, Madurai"
  };

  return (

    <section className="location-section" id="branches">

      <div className="location-heading">

        <span className="mini-tag">
          VISIT OUR GYM
        </span>

        <h2>
          Visit Our <span>Gym Location</span>
        </h2>

        <p>
          Come train with us at our premium fitness facility.
        </p>

      </div>


      {/* map */}

      <div className="map-wrapper">

        <iframe
          src={location.map}
          loading="lazy"
          title="gym-location"
        ></iframe>


        <div className="map-overlay">

          <p>
            {location.address}
          </p>

          <a
            href={location.link}
            target="_blank"
            rel="noreferrer"
            className="direction-btn"
          >
            Get Directions
          </a>

        </div>

      </div>

    </section>

  );

};

export default Location;