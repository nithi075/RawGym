import "./Programs.css";

const Programs = () => {

  const programs = [

    {
      icon:"🏋️",
      title:"Strength Training",
      desc:"Build lean muscle, increase power and improve overall body strength with structured progressive overload training.",
      highlight:false
    },

    {
      icon:"🔥",
      title:"Fat Loss Program",
      desc:"Scientifically designed fat burning workouts combining HIIT, resistance training and cardio routines.",
      highlight:true
    },

    {
      icon:"🏃",
      title:"Cardio Conditioning",
      desc:"Improve endurance, stamina and heart health through structured cardio and metabolic conditioning.",
      highlight:false
    },

    {
      icon:"🥗",
      title:"Nutrition Guidance",
      desc:"Personalized diet strategies designed to support fat loss, muscle gain and healthy lifestyle habits.",
      highlight:false
    },

    {
      icon:"🧘",
      title:"Flexibility & Mobility",
      desc:"Improve posture, joint strength and flexibility through guided mobility routines.",
      highlight:false
    },

    {
      icon:"👩",
      title:"Women Fitness",
      desc:"Specially designed programs for women's fat loss, toning and hormonal balance support.",
      highlight:false
    }

  ];


  return (

    <section className="program-section" id="programs">

      <div className="program-heading">

        <span className="mini-tag">

          OUR PROGRAMS

        </span>


        <h2>

          Training Designed for <span>Real Results</span>

        </h2>


        <p>

          Our scientifically structured programs help you achieve faster results
          with expert guidance and proven workout systems.

        </p>

      </div>



      <div className="program-container">

        {programs.map((item,index)=>(

          <div
            key={index}
            className={`program-box ${item.highlight ? "featured" : ""}`}
          >

            <div className="program-icon">

              {item.icon}

            </div>


            <h3>

              {item.title}

            </h3>


            <p>

              {item.desc}

            </p>


            <div className="program-line"></div>

          </div>

        ))}

      </div>

    </section>

  );

};

export default Programs;