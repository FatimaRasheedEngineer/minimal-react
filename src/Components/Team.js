import React from "react";
import person1 from "../Assests/person1.png"
import person2 from "../Assests/person2.png"
import person3 from "../Assests/person3.png"
import person4 from "../Assests/person4.png"
export default function Team() {
  return (
    <div className="py-16 bg-white text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">OUR TEAM</h2>
      <div className="w-24 h-1 bg-gray-300 mx-auto mb-10"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-center">
          <img  src={person1} alt="Ron"className="w-40 h-40 rounded-full object-cover shadow"/>
          <h3 className="mt-4 text-lg font-semibold">RON SWANSON</h3>
          <p className="italic text-gray-600">Founder</p>
          <div className="flex space-x-3 mt-3">
            <i className="fab fa-twitter w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"></i>
            <i className="fab fa-linkedin-in w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"></i>
            <i className="fas fa-envelope w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"></i>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={person2} alt="Julia"className="w-40 h-40 rounded-full object-cover shadow"
          />
          <h3 className="mt-4 text-lg font-semibold">JULIA DEPISH</h3>
          <p className="italic text-gray-600">Marketing</p>
          <div className="flex space-x-3 mt-3">
            <i className="fab fa-twitter w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"></i>
            <i className="fab fa-linkedin-in w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"></i>
            <i className="fas fa-envelope w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"></i>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={ person3} alt="Danny"className="w-40 h-40 rounded-full object-cover shadow"
          />
          <h3 className="mt-4 text-lg font-semibold">DANNY DEVRY</h3>
          <p className="italic text-gray-600">Designer</p>
          <div className="flex space-x-3 mt-3">
            <i className="fab fa-instagram w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"></i>
            <i className="fab fa-twitter w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"></i>
            <i className="fab fa-behance w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"></i>
            <i className="fab fa-dribbble w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"></i>
            <i className="fas fa-envelope w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"></i>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={person4}
            alt="Lisa"
            className="w-40 h-40 rounded-full object-cover shadow"
          />
          <h3 className="mt-4 text-lg font-semibold">LISA SMITH</h3>
          <p className="italic text-gray-600">Developer</p>
          <div className="flex space-x-3 mt-3">
            <i className="fab fa-facebook-f w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"></i>
            <i className="fab fa-twitter w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"></i>
            <i className="fas fa-envelope w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
