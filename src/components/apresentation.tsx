import Header from "./header";
import ComputerDev from "../assets/notebook3d-Photoroom 1.png.png";
import Linkedin from "../assets/LinkedIn.png";
import Github from "../assets/GitHub.png";
import { motion } from "framer-motion";
import Typing from "./typing";

export default function Apresentation() {
  return (
    <div className="bg-[#0A001B] h-screen max-md:h-auto max-md:pb-10">
      <Header />

      <div
        className="
        pt-55
          text-white flex justify-center items-center gap-16
          max-lg:gap-10 max-md:flex-col
          max-md:text-center max-md:px-4 
          max-md:pt-20
        "
      >
      
        <div
          className="
            w-[690px]
            max-xl:w-[500px]
            max-lg:w-[430px]
            max-md:w-full max-md:flex max-md:flex-col max-md:items-center
          "
        >
          <div className="max-md:w-[90%]">
            <Typing text="Bem-vindo ao meu portifólio..." speed={60} />

            <motion.p
              className="mt-4 lg:text-[17px] md:text-[16px] max-md:text-[15px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              Olá! Meu nome é Gabriel da Silva Freitas, tenho 21 anos e sou desenvolvedor web com
              foco em desenvolvimento fullstack e criação de interfaces modernas.
              <br />
              Atualmente curso Análise e Desenvolvimento de Sistemas pela PUCPR e
              venho construindo projetos completos que unem boa performance,
              organização e uma ótima experiência de usuário.
            </motion.p>
          </div>

      
          <div
            className="
              flex gap-10 mt-10
              max-md:justify-center max-md:gap-6
            "
          >
            <motion.a
              href="https://www.linkedin.com/in/gabriel-da-silva-freitas-dev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px 4px rgba(59,130,246,0.6)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="
                w-[65px] h-[65px] bg-[#0A001B] border border-white cursor-pointer
                flex items-center justify-center hover:border-blue-400
                max-lg:w-[55px] max-lg:h-[55px]
              "
            >
              <img src={Linkedin} alt="LinkedIn" className="max-md:w-[28px]" />
            </motion.a>

            <motion.a
              href="https://github.com/usergabrielmga?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px 4px rgba(138,43,226,0.6)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="
                w-[65px] h-[65px] bg-[#0A001B] border border-white cursor-pointer
                flex items-center justify-center hover:border-purple-400
                max-lg:w-[55px] max-lg:h-[55px]
              "
            >
              <img src={Github} alt="GitHub" className="max-md:w-[28px]" />
            </motion.a>

            <motion.a
  href="#"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{
    scale: 1.07,
    boxShadow: "0 0 25px rgba(168,85,247,0.7)",
  }}
  whileTap={{ scale: 0.97 }}
  transition={{ type: "spring", stiffness: 300 }}
  className="
    group relative
    w-[220px] h-[60px]
    bg-gradient-to-r from-[#4648CF] to-violet-600
    rounded-xl
    flex items-center justify-center
    font-semibold tracking-wide
    text-white
    transition-all duration-300
    overflow-hidden

    max-md:w-[55px] max-md:h-[55px]
  "
>
  {/* TEXTO - some no mobile */}
  <span className="relative z-10 max-md:hidden">
    Baixar currículo
  </span>

  {/* ÍCONE - aparece só no mobile */}
  <span className="hidden max-md:block relative z-10">
    📄
  </span>

  <span
    className="
      absolute inset-0
      bg-white opacity-0
      group-hover:opacity-10
      transition-opacity duration-300
    "
  />
</motion.a>
          </div>
        </div>

       
        <motion.div
          className="
            w-[470px]
            max-xl:w-[450px] max-lg:w-[280px] max-md:mt-10
            max-md:flex max-md:justify-center
          "
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <img src={ComputerDev} alt="Notebook" />
        </motion.div>
      </div>
    </div>
  );
}
