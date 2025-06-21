
import React, { useEffect, useRef, useState } from "react";
import person1 from "../Assests/person1.png";
import person2 from "../Assests/person2.png";
import person3 from "../Assests/person3.png";
import person4 from "../Assests/person4.png";

export default function Team() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div ref={sectionRef} className="py-16 bg-white text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">OUR TEAM</h2>
      <div className="w-24 h-1 bg-gray-300 mx-auto mb-10"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {[person1, person2, person3, person4].map((person, i) => (
          <div key={i} className="flex flex-col items-center">
            <img
              src={person}
              alt={`person${i + 1}`}
              className={`w-40 h-40 rounded-full object-cover shadow rotate-in-scroll ${
                isVisible ? "visible" : ""
              }`}
              style={{ animationDelay: `${i * 0.2}s` }}
            />
            <h3 className="mt-4 text-lg font-semibold">
              {["RON SWANSON", "JULIA DEPISH", "DANNY DEVRY", "LISA SMITH"][i]}
            </h3>
            <p className="italic text-gray-600">
              {["Founder", "Marketing", "Designer", "Developer"][i]}
            </p>
            <div className="flex space-x-3 mt-3">
            
              <i className="fab fa-twitter w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"></i>
              <i className="fab fa-linkedin-in w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"></i>
              <i className="fas fa-envelope w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

