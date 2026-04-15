import "./Coach.css";

const Coach = () => {

  return (

    <section className="coach-section" id="coach">

      <div className="coach-wrapper">

        {/* IMAGE */}

        <div className="coach-photo">

          <div className="image-frame">

            <img
              src="https://images.unsplash.com/photo-1605296867424-35fc25c9212a"
              alt="Coach Dharun"
            />

            <div className="experience-badge">
              Since 2022
            </div>

          </div>

        </div>


        {/* CONTENT */}

        <div className="coach-info">

          <span className="coach-tag">

            Founder & Head Coach

          </span>


          <h2>

            Dharneshvar <br/>

            <span>Vetrivelan</span>

          </h2>


          <h4 className="coach-role">

            Coach Dharun — Golden Boy of Trichy

          </h4>


          <p>

            Former trainer at Bishop Heber College, Coach Dharun has helped
            400+ members achieve life-changing fitness results. His coaching
            approach combines science-based training, disciplined routines
            and personalised nutrition strategies.

          </p>


          {/* STATS */}

          <div className="coach-metrics">

            <div className="metric">

              <h3>500K+</h3>

              <span>Followers</span>

            </div>


            <div className="metric">

              <h3>400+</h3>

              <span>Transformations</span>

            </div>


            <div className="metric">

              <h3>30+</h3>

              <span>Machines</span>

            </div>


            <div className="metric">

              <h3>2</h3>

              <span>Branches</span>

            </div>

          </div>


          {/* PARTNERS */}

          <div className="brand-section">

            <p>

              Trusted Partnerships

            </p>


            <div className="brand-logos">

              <span>MyProtein</span>

              <span>FuelOne</span>

              <span>Dr Choice</span>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

};

export default Coach;