import "./FAQ.css";
import { useState } from "react";

const FAQ = () => {

  const [open, setOpen] = useState(null);

  const faqs = [

    {
      q: "What are your opening hours?",
      a: "We are open 7 days a week. Monday to Friday 5 AM – 11 PM, Weekends 6 AM – 9 PM."
    },

    {
      q: "Do you offer free trial?",
      a: "Yes, we provide a 3-day free trial for new members."
    },

    {
      q: "Is personal training included?",
      a: "Personal training is available as add-on. Annual plan includes 2 PT sessions per month."
    },

    {
      q: "Can I freeze membership?",
      a: "Yes, membership can be frozen up to 3 months for medical or travel reasons."
    },

    {
      q: "Do you have parking facility?",
      a: "Yes, both branches have dedicated free parking for members."
    },

    {
      q: "Do you have separate training for women?",
      a: "Yes, we provide women-specific training programs and female trainers."
    }

  ];


  return (

    <section className="faq" id="faq">

      <div className="faq-header">

        <span className="tag">
          FAQ
        </span>


        <h2>

          Frequently Asked <span>Questions</span>

        </h2>

      </div>



      <div className="faq-list">

        {

          faqs.map((item, i) => (

            <div key={i} className="faq-item">

              <button

                className={`faq-question ${open === i ? "active" : ""}`}

                onClick={() => setOpen(open === i ? null : i)}

              >

                {item.q}

                <span className="icon">

                  {open === i ? "−" : "+"}

                </span>

              </button>


              <div className={`faq-answer ${open === i ? "show" : ""}`}>

                {item.a}

              </div>

            </div>

          ))

        }

      </div>

    </section>

  );

};

export default FAQ;