import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="hero">

      {/* glow background */}
      <div className="hero-bg"></div>

      <div className="hero-left">

        <div className="hero-badge">
          🔥 Madurai’s Elite Transformation Center
        </div>

        <h1>
          Transforming Lives <br/>
          <span>One Rep At a Time</span>
        </h1>

        <p>
          Join 400+ members who changed their lifestyle with expert coaching,
          imported machines, and a motivating environment designed for real results.
        </p>

        <div className="hero-cta">

          <a href="#pricing">
            <button className="primary-btn">
              View Membership
            </button>
          </a>

          <a
            href="https://wa.me/919952995203"
            target="_blank"
            rel="noreferrer"
          >
            <button className="secondary-btn">
              WhatsApp Trainer
            </button>
          </a>

        </div>

        <div className="hero-stats">

          <div>
            <h2>300+</h2>
            <span>Transformations</span>
          </div>

          <div>
            <h2>30+</h2>
            <span>Imported Machines</span>
          </div>

          <div>
            <h2>4★</h2>
            <span>Google Rating</span>
          </div>

          <div>
            <h2>1K+</h2>
            <span>Social Followers</span>
          </div>

        </div>

      </div>


      <div className="hero-right">

        <div className="hero-image-wrapper">

          <img
            src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61"
            alt="gym training"
          />

          <div className="floating-card card-1">
            Since 2022
          </div>

          <div className="floating-card card-2">
            400+ Results
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;