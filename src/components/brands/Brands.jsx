import "./Brands.css";

const Brands = () => {

  const brands = [

    {
      name:"MyProtein",
      logo:"https://upload.wikimedia.org/wikipedia/commons/5/5b/Myprotein_Logo.png"
    },

    {
      name:"FuelOne",
      logo:"https://fuelone.in/cdn/shop/files/FuelOne_logo.png"
    },

    {
      name:"Dr Choice",
      logo:"https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
    },

    {
      name:"Optimum Nutrition",
      logo:"https://upload.wikimedia.org/wikipedia/commons/8/8c/Optimum_Nutrition_logo.png"
    },

    {
      name:"MuscleBlaze",
      logo:"https://upload.wikimedia.org/wikipedia/commons/2/2e/MuscleBlaze_logo.png"
    },

    {
      name:"HealthKart",
      logo:"https://upload.wikimedia.org/wikipedia/commons/0/05/HealthKart_logo.png"
    }

  ];


  return (

    <section className="brand-section">

      <div className="brand-heading">

        <span className="mini-tag">

          BRAND PARTNERS

        </span>


        <h2>

          Trusted by <span>Leading Brands</span>

        </h2>


        <p>

          We collaborate with trusted fitness and nutrition brands
          to provide high quality results for our members.

        </p>

      </div>



      <div className="brand-container">

        {brands.map((brand,index)=>(

          <div key={index} className="brand-box">

            <img
              src={brand.logo}
              alt={brand.name}
            />

          </div>

        ))}

      </div>

    </section>

  );

};

export default Brands;