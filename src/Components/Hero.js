import React from 'react'
import cross from '../Assests/cross.png'
function Hero() {
  return (
    <div>
        <section className="relative bg-cover bg-center h-[70vh] flex items-center justify-center text-white"
    style={{ backgroundImage: " url(/herobg.jpg)" }}>
    <div className="absolute inset-0 bg-teal-500 bg-opacity-40 z-0"></div>
  <div className="relative z-10 text-center px-4">
    <h1 className="text-5xl md:text-5xl font-base tracking-wide leading-tight uppercase">
      MAKING BRANDS STAND OUT <br /> IS OUR OBSESSION
    </h1>
    <div className="w-16 h-0.5 bg-white mx-auto my-6"></div>
    <p className="italic text-lg md:text-xl text-white/80">
      Let us help your brand stand out.
    </p>
  </div>
</section>
<section className="bg-yellow-100 text-center py-16 px-4 h-auto">
  <div className="flex justify-center ">
    <img src={cross} alt="cross Icon" className=" h-14 relative  -top-24  " />
  </div>
  <p className="max-w-3xl mx-auto text-gray-800 text-base leading-relaxed font-serif">
    Minimalist is a full-service digital creative agency located in Ontario, Canada. We focus on design,
    consulting, technology, and photography. We’ve been building unique digital products, platforms,
    and experiences for the past 6 years. Let us help your company grow.
  </p>
  <div className="mt-10">
    <button className="px-7 py-2.5  border-b-gray-700 border-b-2  border border-gray-700 text-gray-700 italic text-lg hover:bg-gray-100 transition">
      Get in Touch
    </button>
  </div>
</section>
    </div>
  )
}

export default Hero
