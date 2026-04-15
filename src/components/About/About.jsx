import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        
        {/* Left Side: Image with Floating Badge */}
        <div className="about-left">
          <div className="image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1550345332-09e3ac987658" 
              alt="About Our Gym" 
            />
            {/* Experience Badge */}
            <div className="exp-badge">
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="about-right">
          <span className="about-subtitle">WHO WE ARE</span>
          <h2>Get Ready To Reach Your <span className="highlight">Fitness Goals</span></h2>
          
          <p className="description">
            We are dedicated to providing a high-intensity training environment 
            with expert coaching. Our mission is to transform your lifestyle 
            through scientifically-backed fitness programs.
          </p>

          <div className="about-features">
            <div className="feature-item">
              <span className="check">✔</span>
              <p>Professional & Certified Trainers</p>
            </div>
            <div className="feature-item">
              <span className="check">✔</span>
              <p>State-of-the-Art Gym Equipment</p>
            </div>
            <div className="feature-item">
              <span className="check">✔</span>
              <p>Customized Nutrition & Workout Plans</p>
            </div>
          </div>

          <button className="about-btn">Start Your Journey</button>
        </div>

      </div>
    </section>
  );
};

export default About;