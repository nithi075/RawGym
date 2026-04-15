import "./Pricing.css";

const Pricing = () => {

  const plans = [

    {
      name: "Monthly",
      price: "₹1,499",
      duration: "/month",
      icon:"📅",
      features: [
        "Full Gym Access",
        "Locker Facility",
        "General Trainer Support",
        "Cardio + Strength Area"
      ]
    },

    {
      name: "3 Months",
      price: "₹3,499",
      duration: "/quarter",
      popular: true,
      icon:"🔥",
      features: [
        "Full Gym Access",
        "Workout Plan",
        "Progress Tracking",
        "Locker + Water",
        "Fitness Assessment"
      ]
    },

    {
      name: "6 Months",
      price: "₹5,999",
      duration: "/half year",
      icon:"💪",
      features: [
        "Full Gym Access",
        "Diet Guidance",
        "Progress Tracking",
        "Priority Support",
        "Locker Facility"
      ]
    },

    {
      name: "Annual",
      price: "₹9,999",
      duration: "/year",
      icon:"👑",
      features: [
        "Unlimited Access",
        "2 PT Sessions Monthly",
        "Priority Support",
        "All Amenities",
        "Best Savings"
      ]
    },

    {
      name: "90 Day Transformation",
      price: "₹7,999",
      duration: "/program",
      icon:"⚡",
      features: [
        "Custom Diet Plan",
        "Fat Loss Training",
        "Weekly Tracking",
        "WhatsApp Support",
        "Guaranteed Results Plan"
      ]
    },

    {
      name: "Personal Training",
      price: "₹5,999",
      duration: "/month",
      icon:"🏆",
      features: [
        "1-on-1 Coaching",
        "Custom Workout Plan",
        "Nutrition Strategy",
        "Weekly Review",
        "Form Correction"
      ]
    }

  ];


  return (

    <section className="pricing-section" id="pricing">

      <div className="pricing-heading">

        <span className="mini-tag">

          MEMBERSHIP PLANS

        </span>


        <h2>

          Choose Your <span>Fitness Plan</span>

        </h2>


        <p>

          Simple pricing. Powerful results.
          Flexible membership options designed for every fitness level.

        </p>

      </div>



      <div className="pricing-wrapper">

        {plans.map((plan,index)=>(

          <div
            key={index}
            className={`price-card ${plan.popular ? "featured" : ""}`}
          >

            {plan.popular && (

              <div className="popular-badge">

                MOST POPULAR

              </div>

            )}


            <div className="price-icon">

              {plan.icon}

            </div>


            <h3>

              {plan.name}

            </h3>


            <div className="price-amount">

              {plan.price}

              <span>

                {plan.duration}

              </span>

            </div>


            <ul>

              {plan.features.map((item,i)=>(

                <li key={i}>

                  ✓ {item}

                </li>

              ))}

            </ul>


            <a
              href="https://wa.me/919597762773"
              target="_blank"
              rel="noreferrer"
            >

              <button className="price-btn">

                Join Now

              </button>

            </a>

          </div>

        ))}

      </div>

    </section>

  );

};

export default Pricing;