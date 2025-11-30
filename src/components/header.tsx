import { useEffect, useState } from "react";

export default function Header() {

    const sections = ["inicio", "sobre", "projetos", "contato"];
    const [active, setActive] = useState("inicio");
    const [open, setOpen] = useState(false); // menu mobile

    const handleScroll = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
        setActive(id);
        setOpen(false); // fecha menu mobile ao clicar
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full h-20 flex items-center px-6 bg-[#0A001B] z-50">
  
            <ul className="
                hidden md:flex ml-auto gap-10 text-white text-[18px]
            ">
                {sections.map((item) => (
                    <li key={item} className="relative cursor-pointer">
                        <a onClick={() => handleScroll(item)}>
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </a>

                        {active === item && (
                            <span className="absolute left-0 -bottom-1 w-4 h-[2px] bg-white rounded-full"></span>
                        )}
                    </li>
                ))}
            </ul>

        
            <button
                className="md:hidden ml-auto text-white text-3xl"
                onClick={() => setOpen(!open)}
            >
                {open ? "✖" : "☰"}
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
