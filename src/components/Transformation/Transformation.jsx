import "./Transformation.css";
import { useEffect, useState, useRef } from "react";

// Images-ah import panrathu thaan correct way (Vite/Webpack support)
import img1 from "../../assets/result4.jpg";
import img2 from "../../assets/result1.jpg";
import img3 from "../../assets/result2.jpg";
import img4 from "../../assets/result3.jpg";

const Transformations = () => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);

  // Unga sontha image variables-ah inga array-la podunga
  const images = [img1, img2, img3, img4];

  const labels = [
    "Weight Loss", "Muscle Gain", 
     "Strength", "Cardio"
  ];

  // Counter Logic with Intersection Observer (Premium feel)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHasStarted(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const target = 400;
    const timer = setInterval(() => {
      start += 5;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(start);
    }, 20);
    return () => clearInterval(timer);
  }, [hasStarted]);

  return (
    <section className="transform-section" id="transformations" ref={sectionRef}>
      <div className="transform-heading">
        <span className="mini-tag">MEMBER RESULTS</span>
        <h2>Real People. <span>Real Results.</span></h2>
        <p>Expert coaching-naala vantha unmaiyana mātṟaṅkaḷ.</p>
      </div>

      <div className="transform-gallery">
        {images.map((img, i) => (
          <div key={i} className="transform-box">
            {/* IMPORTANT: Inga direct-ah import panna 'img' variable-ah use panrom. 
               Object-fit: cover kuduthurukom, so image ratio difference aanaalum box shape maarathu.
            */}
            <img src={img} alt={`Transformation ${i + 1}`} loading="lazy" />
            
            <div className="img-overlay">
              <div className="overlay-content">
                {labels[i % labels.length]}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="transform-stats">
        <h3>{count}+</h3>
        <p>Successful Transformations</p>
      </div>
    </section>
  );
};

export default Transformations;