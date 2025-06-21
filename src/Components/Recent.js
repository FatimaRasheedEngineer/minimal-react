
import React, { useEffect, useRef, useState } from "react";
import woods from "../Assests/woods.jpg";
import path from "../Assests/path.jpg";
import darknes from "../Assests/darkness.jpg";
import waves from "../Assests/waves.jpg";
import drops from "../Assests/drops.jpg";
import oceans from "../Assests/oceans.jpg";

export default function Recent() {
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
    <div
      ref={sectionRef}
      className={`bg-gray-100 py-16 px-4 fade-up-scroll ${
        isVisible ? "visible" : ""
      }`}
    >
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-2">
        RECENT PROJECTS
      </h2>
      <div className="w-24 h-1 bg-gray-300 mx-auto mb-10"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="bg-white shadow-md hover:-translate-y-2 hover:shadow-lg transition duration-300">
          <img src={woods} alt="Woods" className="w-full h-72 object-cover" />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-800">WOODS</h3>
            <p className="text-sm text-gray-600">Photography</p>
          </div>
        </div>
        <div className="bg-white shadow-md hover:-translate-y-2 hover:shadow-lg transition duration-300">
          <img src={path} alt="Path" className="w-full h-72 object-cover" />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-800">PATH</h3>
            <p className="text-sm text-gray-600">Website • Photography</p>
          </div>
        </div>
        <div className="bg-white shadow-md hover:-translate-y-2 hover:shadow-lg transition duration-300">
          <img src={darknes} alt="Darkness" className="w-full h-72 object-cover" />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-800">DARKNESS</h3>
            <p className="text-sm text-gray-600">Website</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-7 gap-6 max-w-4xl mx-auto">
        <div className="bg-white shadow-md hover:-translate-y-2 hover:shadow-lg transition duration-300">
          <img src={waves} alt="Waves" className="w-full h-72 object-cover" />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-800">WAVES</h3>
            <p className="text-sm text-gray-600">Photography</p>
          </div>
        </div>
        <div className="bg-white shadow-md hover:-translate-y-2 hover:shadow-lg transition duration-300">
          <img src={drops} alt="Drops" className="w-full h-72 object-cover" />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-800">DROPS</h3>
            <p className="text-sm text-gray-600">Website</p>
          </div>
        </div>
        <div className="bg-white shadow-md hover:-translate-y-2 hover:shadow-lg transition duration-300">
          <img src={oceans} alt="Oceans" className="w-full h-72 object-cover" />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-800">OCEAN</h3>
            <p className="text-sm text-gray-600">Website</p>
          </div>
        </div>
      </div>
    </div>
  );
}
