import { motion } from "framer-motion";

export default function Skills() {
    return (
        <div className="bg-[#0D031F] lg:h-screen md:h-[1000px] sm:h-[1110] h-[1220px] relative">

           
            <motion.h2
                className="absolute left-1/2 -translate-x-1/2  lg:pt-40 md:pt-20 sm:pt-10  pt-5 text-white md:text-[25px] text-[18px] font-bold"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                Minhas Experiências
            </motion.h2>

           
            <div className="border-1 border-sky-50 flex-row justify-between w-[90%] text-white p-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:flex lg:w-[1100px] md:w-[880px]">   

               
                <motion.div
                    className="text-center w-[95%] md:w-[45%] text-[14.5px] flex flex-col gap-10"
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div>
                        <h3>FRONTEND</h3>
                        <p>
                            No front-end, trabalho principalmente com React, TypeScript e Tailwind CSS, criando interfaces modernas, responsivas e de alta performance. Tenho experiência com consumo de APIs, componentização, gerenciamento de estado, validações e boas práticas de UI/UX para entregar aplicações eficientes e bem estruturadas.
                        </p>
                    </div>

                    <div>
                        <h3>BACKEND</h3>
                        <p>
                           No back-end, trabalho principalmente com Node.js, desenvolvendo APIs, integrações e regras de negócio de forma estruturada. Já tive contato com Python e Java, o que reforça minha base em lógica e conceitos de programação. Também possuo experiência com bancos de dados MySQL e MongoDB, realizando consultas, filtros, relacionamentos e manipulação de dados para garantir aplicações completas e bem estruturadas.
                        </p>
                    </div>
                </motion.div>

              
                <motion.div
                    className="w-[95%] md:w-[45%] h-100 mt-10 md:mt-0"
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="relative w-[100%] h-[100%] bg-[#D9D9D9] flex justify-center items-center rounded-xl">
                        <div className="absolute top-2 left-4 flex gap-2">
                            <span className="w-3 h-3 bg-[#FF5F57] rounded-full"></span>
                            <span className="w-3 h-3 bg-[#FEBB2E] rounded-full"></span>
                            <span className="w-3 h-3 bg-[#28C940] rounded-full"></span>
                        </div>

                        <div className="w-[90%] h-[88%] bg-[#242424] rounded-xl mt-4">
                            <h3 className="md:p-4 p-2 text-sm opacity-45">#DESENVOLVIMENTO</h3>
                            <p className="p-4 text-sm max-md:text-[12px] max-md:leading-tight opacity-45 mb-10">
                                # Conhecimento em processos de desenvolvimento de software, <br/>
                                # incluindo boas práticas, versionamento e organização de projetos. <br/>
                                # Experiência com modelagem básica utilizando UML <br/>
                                # para representar fluxos, casos de uso e estruturas do sistema. <br/>
                                # Sólida base em lógica de programação, algoritmos e resolução de problemas. <br/>
                                # Entendimento de arquiteturas de aplicações web, <br/>
                                # Familiaridade com metodologias ágeis e ciclos de desenvolvimento. <br/>

                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            
        </div>
    );
}
