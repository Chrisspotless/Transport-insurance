import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
  
        <h1 className="text-lg">
             <input type="text" placeholder="Search..." 
         className="bg-transparent text-black placeholder:text-gray-500
          border focus:outline-none focus:ring-2 
          focus:ring-brown-500 w-64 rounded p-4 h-8" />
        </h1>
        
    
        <div className="hidden md:flex gap-8">
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>

          <Link to="/about" className="hover:text-blue-500">
            About
          </Link>

          <Link to="/contact" className="hover:text-blue-500">
            Contact
          </Link>
        </div>
        

    
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col bg-white px-6 pb-4 gap-4">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>

          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>

          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
        
      )}
    </nav>
    
  );
}

export default Navbar;