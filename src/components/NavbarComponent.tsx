import { useState } from "react";
import BookCallButton from "./BookCallButton";

// SVG for the Close (X) Icon
const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="-5 -5 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-12 h-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>

      {/* Header */}
      <header
        className={`sticky top-0 z-30 px-6 py-5 md:px-12 lg:px-20 border border-dashed border-gray-200 ${isOpen
          ? 'bg-gray-900 text-white' // Dark background when open
          : 'bg-white' // White background when closed
          }`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex flex-1 items-center gap-3">
            <div className="min-w-14 min-h-14 w-14 h-14 rounded-2xl flex items-center justify-center">
              <img src="/logo.jpg" alt="logo" className='rounded-2xl' />
            </div>
            {/* Conditional Text Color for Logo Text */}
            <span className="text-lg lg:text-2xl font-bold text-gray-900">Spring Media</span>
          </div>

          {/* Desctop Menu Button (Hamburger/Close Icon) */}
          <div className="hidden md:flex flex-1 text-center  justify-center gap-14 md:text-xl">
            <button
              onClick={() => scrollTo("about")}
              className="cursor-pointer relative text-gray-900 transition-colors duration-200 group py-1"
            >
              About
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-emerald-500 group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
            </button>
            <button
              onClick={() => scrollTo("services")}
              className="cursor-pointer relative text-gray-900 transition-colors duration-200 group py-1"
            >
              Services
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-emerald-500 group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
            </button>
            <button
              onClick={() => scrollTo("services")}
              className="cursor-pointer relative text-gray-900 transition-colors duration-200 group py-1"
            >
              FAQ
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-emerald-500 group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
            </button>
          </div>
          <div className="hidden md:flex flex-1 justify-end  max-h-14"><BookCallButton txt="Kontakt " /></div>


          {/* Mobile Menu Button (Hamburger/Close Icon) */}

          {/* Overlay: Closes the menu when clicked */}
          {isOpen && (
            <div
              className="fixed inset-0 z-20 bg-gray-900 opacity-90 md:hidden"
              onClick={closeMenu}
            />
          )}
          <button
            onClick={toggleMenu}
            // Ensure the button color adapts or remains visible
            className={`md:hidden w-14 h-14 rounded-2xl flex items-center justify-center transition-colors z-40 ${isOpen
              ? 'bg-transparent' // Keep background transparent when open
              : 'bg-gray-900 hover:bg-gray-800' // Dark background when closed
              }`}
            aria-expanded={isOpen}
            aria-controls="mobile-menu-aside"
          >
            {/* The SVG color is already handled by the 'text-white' on the icon component,
                but we need to ensure the hamburger icon color is right when the header background is gray. */}
            {isOpen ? (
              <CloseIcon className="text-white" />
            ) : (
              <div className="flex flex-col gap-1.5 min-w-14 min-h-14 w-14 h-14 rounded-2xl items-center justify-center">
                <div className="w-6 h-0.5 bg-white rounded-full"></div>
                <div className="w-6 h-0.5 bg-white rounded-full"></div>
                <div className="w-6 h-0.5 bg-white rounded-full"></div>
              </div>
            )}
          </button>
        </div>
      </header>


      {/* Mobile Aside Menu */}
      <aside
        id="mobile-menu-aside"
        className={`${isOpen ? "translate-x-0" : "translate-x-full"} 
                   fixed top-0 right-0 w-64 h-full bg-white shadow-2xl transition-transform duration-300 ease-in-out z-30 md:hidden`}
      >
        <div className="p-6">
          {/* Close Button inside the aside */}
          <div className="flex justify-end mb-8">
            <button onClick={closeMenu} className="w-10 h-10">
              <CloseIcon className="text-gray-900" />
            </button>
          </div>

          <ul className="space-y-4 ">
            <li><button onClick={() => scrollTo("about")} className="w-full text-right py-2 text-lg font-medium">About</button></li>
            <li><button onClick={() => scrollTo("services")} className="w-full text-right py-2 text-lg font-medium">Services</button></li>
            <li><button onClick={() => scrollTo("faq")} className="w-full text-right py-2 text-lg font-medium">FAQ</button></li>
            <li className="pt-4 flex justify-end"><BookCallButton txt="Kontakt " /></li>
          </ul>
        </div>
      </aside>
    </div>
  );
}