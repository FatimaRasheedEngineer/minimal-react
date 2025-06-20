
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

      <div className="hidden md:flex space-x-8 text-gray-700 lg:font-light lg:text-lg me-10 2xl:text-4xl">
        <span onClick={() => onNavigate(refs.processRef)} className="cursor-pointer hover:border-b-teal-400 hover:border-b-2">Process</span>
        <span onClick={() => onNavigate(refs.projectsRef)} className="cursor-pointer hover:border-b-teal-400 hover:border-b-2">Projects</span>
        <span onClick={() => onNavigate(refs.teamRef)} className="cursor-pointer hover:border-b-teal-400 hover:border-b-2">Team</span>
        <span onClick={() => onNavigate(refs.contactRef)} className="cursor-pointer hover:border-b-teal-400 hover:border-b-2">Contact</span>
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2"
               viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full right-8 mt-3 w-44 bg-white rounded-md p-4 space-y-3 md:hidden z-50">
          <span onClick={() => { onNavigate(refs.processRef); setIsOpen(false); }} className="block text-gray-700 hover:text-blue-600 cursor-pointer">Process</span>
          <span onClick={() => { onNavigate(refs.projectsRef); setIsOpen(false); }} className="block text-gray-700 hover:text-blue-600 cursor-pointer">Projects</span>
          <span onClick={() => { onNavigate(refs.teamRef); setIsOpen(false); }} className="block text-gray-700 hover:text-blue-600 cursor-pointer">Team</span>
          <span onClick={() => { onNavigate(refs.contactRef); setIsOpen(false); }} className="block text-gray-700 hover:text-blue-600 cursor-pointer">Contact</span>
        </div>
      )}
    </nav>
  );
}
