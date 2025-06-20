import React from "react";
import target from "../Assests/target.png"
import design from "../Assests/design.png"
import track from "../Assests/track.png"
export default function BrandSection() {
  return (
  <section className="py-16 px-4 text-center bg-white">
     
      <h2 className="text-lg md:text-3xl font-light text-gray-800 mb-2">
        HOW WE MAKE BRANDS THRIVE
      </h2>
      <div className="w-16 h-0.5 bg-gray-300 mx-auto my-4"></div>

   
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mt-10">
       
        <div>
        <div className="w-[200px] h-[180px] sm:w-[240px] sm:h-[180px] md:w-[300px] md:h-[200px] bg-gray-100 mx-auto flex items-center justify-center">
            <img src={target} alt="Target" className="h-32" />
          </div>
          <h4 className="text-lg font-normal mt-4 mb-2">SET A TARGET</h4>
          <p className="text-gray-600 text-sm max-w-sm mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>

       
        <div>
        <div className="w-[200px] h-[180px] sm:w-[240px] sm:h-[180px] md:w-[300px] md:h-[200px] bg-gray-100 mx-auto flex items-center justify-center">
            <img src={design} alt="Design" className=" h-28" />
          </div>
          <h4 className="text-lg font-normal mt-4 mb-2">DESIGN A SOLUTION</h4>
          <p className="text-gray-600  text-sm max-w-sm mx-auto">
            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
            commodo diam libero vitae erat.
          </p>
        </div>

      
        <div>
      <div className="w-[200px] h-[180px] sm:w-[240px] sm:h-[180px] md:w-[300px] md:h-[200px] bg-gray-100 mx-auto flex items-center justify-center">
            <img src={track} alt="Track" className=" h-32" />
          </div>
          <h3 className="text-lg font-normal mt-4 mb-2">TRACK THE PROGRESS</h3>
          <p className="text-gray-600 text-sm  max-w-sm mx-auto">
            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
            ut sem vitae risus tristique posuere.
          </p>
        </div>
      </div>
    </section>
  );
}
