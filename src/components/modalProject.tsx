import { motion } from "framer-motion";
import Github from '../assets/GitHub.png'
import LinkExternal from '../assets/External Link.png'
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiMysql,
  SiExpress,
  SiCloudinary
} from "react-icons/si"

export const techIcons = {
  react: { icon: SiReact, color: "#61DAFB" },
  javascript: { icon: SiJavascript, color: "#F7DF1E" },
  html: { icon: SiHtml5, color: "#E34F26" },
  css: { icon: SiCss3, color: "#1572B6" },
  tailwind: { icon: SiTailwindcss, color: "#06B6D4" },
  typescript: { icon: SiTypescript, color: "#3178C6" },
  node: { icon: SiNodedotjs, color: "#339933" },
  mysql: { icon: SiMysql, color: "#4479A1" },
  express: { icon: SiExpress, color: "#008000" },
  cloudinary: { icon: SiCloudinary, color: "#3448C5" }
}



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
                className="bg-[#0D031F] border-1 p-6 rounded-xl max-w-[900px] w-[100%] h-auto text-white relative"
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

                <div>
                    <h3 className="text-lg font-bold mt-10">
                        Tecnologias Utilizadas:
                    </h3>

                    {/* FRONTEND */}
                    {modalData.technologies.frontend?.length > 0 && (
                        <div className="mt-4">
                        <h4 className="text-sm text-gray-400 mb-2">Front-end</h4>
                        <div className="flex gap-4 flex-wrap">
                            {modalData.technologies.frontend.map(
                            (tech: string, index: number) => {
                                const techKey = tech as keyof typeof techIcons
                                const IconComponent = techIcons[techKey].icon
                                const color = techIcons[techKey].color

                                return (
                                <IconComponent key={index} size={28} color={color} />
                                )
                            }
                            )}
                        </div>
                        </div>
                    )}

                    {/* BACKEND */}
                    {modalData.technologies.backend?.length > 0 && (
                        <div className="mt-6">
                        <h4 className="text-sm text-gray-400 mb-2">Back-end</h4>
                        <div className="flex gap-4 flex-wrap">
                            {modalData.technologies.backend.map(
                            (tech: string, index: number) => {
                                const techKey = tech as keyof typeof techIcons
                                const IconComponent = techIcons[techKey].icon
                                const color = techIcons[techKey].color

                                return (
                                <IconComponent key={index} size={28} color={color} />
                                )
                            }
                            )}
                        </div>
                        </div>
                    )}
                </div>

               

                <div className="bottom-4 mt-10 flex gap-5">

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
