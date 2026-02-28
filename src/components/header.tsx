import { useState } from "react";
import { FiX } from "react-icons/fi"

export default function Header() {

    const sections = ["inicio", "sobre", "projetos", "contato"];
    
    const [open, setOpen] = useState(false);

    const handleScroll = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
        
        setOpen(false); 
    };

   
     

    return (
        <header className="fixed top-0 left-0 w-full h-20 flex items-center bg-[#0A001B] z-50">
  
            <ul className="
                absolute
                right-30
                hidden md:flex
                justify-center
                items-center
                text-white
                text-[18px]
                border-1 border-sky-50
                rounded-
            ">
                {sections.map((item, index) => (
  <li
    key={item}
    className="relative cursor-pointer block text-center px-9 py-2"
  >
    {index !== 0 && (
      <span className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-[1px] bg-white"></span>
    )}

    <a onClick={() => handleScroll(item)}>
      {item.charAt(0).toUpperCase() + item.slice(1)}
    </a>
  </li>
))}
            </ul>

        
            <button
                className="md:hidden ml-auto text-white text-3xl cursor-pointer"
                onClick={() => setOpen(!open)}
            >
                {open ? <FiX className="w-6 h-6" /> : "☰"}
            </button>

           
            <nav
                className={`
                    fixed top-20 left-0 w-full bg-[#0A001B] text-white 
                    flex flex-col items-center gap-6 py-6 text-xl
                    transition-all duration-300
                    ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                `}
            >
                {sections.map((item) => (
                    <a
                        key={item}
                        onClick={() => handleScroll(item)}
                        className="cursor-pointer"
                    >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                ))}
            </nav>
        </header>
    );
}
