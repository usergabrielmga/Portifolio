import { motion } from "framer-motion";
import Github from '../assets/GitHub.png'
import LinkExternal from '../assets/External Link.png'

interface ProjectModalProps {
    isOpen: boolean;
    modalData: any;
    setIsOpen: (open: boolean) => void;
}

export default function ProjectModal({ isOpen, modalData, setIsOpen }: ProjectModalProps) {

    if (!isOpen || !modalData) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setIsOpen(false)}
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0D031F] border-1 p-6 rounded-xl max-w-[900px] w-[100%] h-120 text-white relative"
                onClick={(e) => e.stopPropagation()}
            >
               
                <div className="absolute top-4 left-4 flex gap-2">
                    <span className="w-3 h-3 bg-[#FF5F57] rounded-full"></span>
                    <span className="w-3 h-3 bg-[#FEBB2E] rounded-full"></span>
                    <span className="w-3 h-3 bg-[#28C940] rounded-full"></span>
                </div>

                <div className="mt-8 max-h-[350px] overflow-y-auto pr-2 custom-scroll">
                    <p className="text-gray-300 whitespace-pre-line">
                        {modalData.description}
                    </p>
                </div>


                

                <button
                    className="absolute top-2 right-3 text-white text-xl cursor-pointer"
                    onClick={() => setIsOpen(false)}
                >
                    ✕
                </button>

                <div className="absolute bottom-4 flex gap-5">

                    <motion.a
    href={modalData.link}
    target="_blank"
    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255,255,255,0.2)" }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="flex items-center justify-center gap-2 cursor-pointer
               w-[180px] h-12 rounded-lg bg-[#2B156C] font-medium
               max-md:w-[130px] max-md:h-10 max-md:text-sm"
>
    GitHub
    <img className="w-8 max-md:w-6" src={Github} alt="" />
</motion.a>

<motion.a
    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255,255,255,0.2)" }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: 0.1 }}
    className="flex items-center justify-center gap-2 cursor-pointer
               w-[180px] h-12 rounded-lg bg-[#2B156C] font-medium
               max-md:w-[130px] max-md:h-10 max-md:text-sm"
>
    Demo
    <img className="w-6 max-md:w-5" src={LinkExternal} alt="" />
</motion.a>
                </div>
            </motion.div>
        </motion.div>
    );
}
