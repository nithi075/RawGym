import "./Why.css";

const Why = () => {

  const features = [

    {
      icon:"🏆",
      title:"Certified Trainers",
      desc:"Our experienced coaches guide you with proper form, structured plans and continuous motivation.",
      highlight:false
    },

    {
      icon:"🏋️",
      title:"Imported Equipment",
      desc:"Train using high-quality international machines designed for safety and maximum performance.",
      highlight:true
    },

    {
      icon:"⏰",
      title:"Flexible Timings",
      desc:"Workout based on your schedule with convenient morning and evening access hours.",
      highlight:false
    },

    {
      icon:"💰",
      title:"Affordable Pricing",
      desc:"Premium training experience at competitive pricing suitable for beginners to athletes.",
      highlight:false
    },

    {
      icon:"📊",
      title:"Progress Tracking",
      desc:"Track your body changes with structured programs and measurable transformation plans.",
      highlight:false
    },

    {
      icon:"🔥",
      title:"Result Focused",
      desc:"We focus on real transformations through consistency, discipline and expert coaching.",
      highlight:false
    }

  ];


  return (

    <section className="why-section" id="why">

      <div className="why-heading">

        <span className="mini-tag">

          WHY CHOOSE US

        </span>


        <h2>

          The Right Gym for <span>Real Results</span>

        </h2>


        <p>

          We combine modern equipment, expert trainers and proven workout systems
          to deliver faster and safer fitness transformations.

        </p>

      </div>



      <div className="why-container">

        {features.map((item,index)=>(

          <div
            key={index}
            className={`why-box ${item.highlight ? "featured" : ""}`}
          >

            <div className="why-icon">

              {item.icon}

            </div>


            <h3>

              {item.title}

            </h3>


            <p>

              {item.desc}

            </p>


            <div className="why-line"></div>

          </div>

        ))}

      </div>

    </section>

  );

};

export default Why;