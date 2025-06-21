
import { useState } from "react";
import logo from "../Assests/logo.png";

export default function Navbar({ onNavigate, refs }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white px-16 py-5 flex justify-between items-center relative">
      <div className="flex items-center gap-4">
        <img src={logo} alt="pic" style={{ height: '12vh' }} />
        <span className="text-2xl font-medium" style={{ fontFamily: "'Oswald', sans-serif" }}>Minimal</span>
      </div>

      <div className="hidden md:flex space-x-8 text-gray-700 lg:font-light lg:text-md me-10 2xl:text-4xl">
        <li onClick={() => onNavigate(refs.processRef)} className="cursor-pointer list-none hover:border-b-teal-400 hover:border-b-2">Process</li>
        <li onClick={() => onNavigate(refs.projectsRef)} className="cursor-pointer list-none hover:border-b-teal-400 hover:border-b-2">Projects</li>
        <li onClick={() => onNavigate(refs.teamRef)} className="cursor-pointer list-none hover:border-b-teal-400 hover:border-b-2">Team</li>
        <li onClick={() => onNavigate(refs.contactRef)} className="cursor-pointer list-none hover:border-b-teal-400 hover:border-b-2">Contact</li>
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
          
        <i class="fa-solid fa-bars fa-lg"></i>
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-full right-6 mt-3 w-72 border-1 border-blue-950
         bg-white rounded-md p-4 space-y-3 md:hidden z-50">
          <span onClick={() => { onNavigate(refs.processRef); setIsOpen(false); }} className="block text-gray-700 hover:text-blue-600 cursor-pointer">Process</span>
          <span onClick={() => { onNavigate(refs.projectsRef); setIsOpen(false); }} className="block text-gray-700 hover:text-blue-600 cursor-pointer">Projects</span>
          <span onClick={() => { onNavigate(refs.teamRef); setIsOpen(false); }} className="block text-gray-700 hover:text-blue-600 cursor-pointer">Team</span>
          <span onClick={() => { onNavigate(refs.contactRef); setIsOpen(false); }} className="block text-gray-700 hover:text-blue-600 cursor-pointer">Contact</span>
        </div>
      )}
    </nav>
  );
}
