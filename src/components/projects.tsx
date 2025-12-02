import { motion } from "framer-motion";
import PixelEcho from "../assets/pixelEcho.png";
import BookVerse from  '../assets/bookVerse.png'
import GestecEngenharia from '../assets/gestecEngenharia.png'
import EliteMotors from '../assets/eliteMotors.png'
import { useState } from "react";
import ProjectModal from "./modalProject";



export default function Projects() {

    const [modalData, setModalData] = useState(null)
    const [isOpen, setIsOpen] = useState(false)


    const projects = [
        { 
            image: PixelEcho,
            description: `Descrição
                        A Galeria de Fotos é uma aplicação web desenvolvida com React e TypeScript no frontend e Node.js, Express e MongoDB no backend. Ela permite organizar fotos em categorias personalizadas, oferecendo recursos de edição, exclusão e busca por palavras-chave. É ideal para usuários que desejam gerenciar imagens por temas como praia, viagens e animais.

                        Tecnologias Utilizadas
                        No front-end, a aplicação utiliza React.js, TypeScript, Axios para requisições HTTP e React Router para navegação entre páginas. No back-end, foi utilizada a combinação de Node.js, Express, Mongoose para modelagem dos dados e MongoDB como banco de dados NoSQL. As imagens são armazenadas no Cloudinary, garantindo segurança, desempenho e otimização automática.

                        Funcionalidades
                        O sistema permite criar categorias como Praia, Viagem e Animais, editar seus títulos, alterar imagens de capa e excluir categorias — podendo manter ou remover as fotos internas. Dentro de cada categoria, é possível visualizar todas as imagens, adicionar novas fotos, editar descrições e excluir imagens. A plataforma também oferece um sistema de pesquisa que permite localizar fotos por palavras-chave presentes nas descrições.

                        Autenticação de Usuários
                        A aplicação conta com cadastro e login utilizando autenticação via token JWT. Somente usuários autenticados podem criar, editar ou excluir categorias e fotos. Todas as rotas sensíveis do backend são protegidas para garantir que apenas usuários autorizados realizem alterações.`,
            link: 'https://github.com/usergabrielmga/PixelEcho'
        },
        { 
            image: BookVerse,
            description: `Introdução
Este projeto é um site desenvolvido em React com TypeScript, criado para exibir descrições de livros de forma organizada e acessível. Ele conta com um design moderno e oferece a possibilidade de salvar livros para consulta futura.

Tecnologias Utilizadas
A aplicação utiliza React e TypeScript na construção da interface, Styled Components para estilização, React Router para navegação entre páginas. Caso haja integração com serviços externos, Axios ou Fetch API podem ser usados para realizar requisições.

Funcionalidades
O site exibe uma lista de livros com descrições completas, incluindo título, autor, gênero e resumo. Sua interface é moderna, responsiva e conta com animações suaves. Também é possível salvar livros em uma lista de favoritos, garantindo persistência dos dados através de Local Storage ou Firebase.

Estrutura do Projeto
A organização inclui pastas dedicadas a componentes reutilizáveis, páginas do site, serviços para chamadas de API, estilização global e funções auxiliares. Os arquivos App.tsx e main.tsx são responsáveis pelo componente principal e pelo ponto de entrada da aplicação.

`
 ,
             link: 'https://github.com/usergabrielmga/BookVerse'
        },
        { 
            image: GestecEngenharia,
            description: `Este projeto é um site desenvolvido utilizando HTML e CSS, criado para apresentar de forma clara e profissional os serviços da Gestec Engenharia, uma empresa que atua no ramo de asfaltos e pavimentação. O site foi pensado para transmitir credibilidade, facilitar o contato com clientes e destacar os serviços prestados no setor.

Tecnologias Utilizadas

A aplicação foi construída com HTML5 para a estruturação das páginas e CSS3 para estilização, garantindo um visual moderno e responsivo. Também foi utilizada uma biblioteca de slider para criar seções dinâmicas, como banners e áreas de destaque, oferecendo uma navegação mais fluida e impactante.

Funcionalidades

O site apresenta informações detalhadas sobre os serviços de asfaltamento, incluindo descrição das áreas de atuação, galeria visual, contatos e informações institucionais. Ele possui um layout limpo, profissional e adequado ao público do setor. As seções em slider permitem destacar conteúdos importantes, como obras realizadas, serviços principais e diferenciais da empresa.

Estrutura do Projeto

A organização segue uma estrutura simples e eficiente, com páginas separadas para cada área do site, folhas de estilo dedicadas e arquivos responsáveis pelos sliders e elementos interativos. A divisão clara entre HTML, CSS e scripts garante manutenção facilitada e uma boa escalabilidade para futuras melhorias.`,
            link: null
        },
        { 
            image: EliteMotors,
            description: `Este projeto é um sistema desenvolvido em PHP, criado para gerenciar e exibir veículos de forma organizada, profissional e moderna. O Elite Motors foi projetado para facilitar o cadastro de carros pela administração e oferecer ao cliente final uma visualização clara e atraente dos veículos disponíveis.

Tecnologias Utilizadas

A aplicação foi construída utilizando PHP para o back-end, MySQL como banco de dados e SQL para criação e manipulação das tabelas. O front-end utiliza HTML e CSS para estruturar e estilizar as páginas. Além disso, o sistema possui um painel de login administrativo, permitindo acesso seguro às funcionalidades internas.

Funcionalidades

O sistema conta com um CRUD completo para gerenciamento dos veículos: cadastrar, listar, editar e excluir. Cada carro cadastrado no painel administrativo é exibido automaticamente no grid de visualização acessado pelos clientes, incluindo informações como modelo, ano, preço e detalhes relevantes.
A interface é responsiva, moderna e focada na experiência do usuário, garantindo navegação fácil tanto para o administrador quanto para o cliente final.

Estrutura do Projeto

A organização do sistema inclui arquivos PHP separados para lógica de negócio, páginas dedicadas ao painel administrativo, formulários de cadastro, rotas de CRUD e páginas de exibição dos veículos. O banco de dados MySQL contém as tabelas estruturadas para armazenar as informações de forma segura e eficiente.
O fluxo geral envolve autenticação, gerenciamento de carros e exibição dinâmica dos dados cadastrados, mantendo uma arquitetura clara e escalável.`,
            link: 'https://github.com/usergabrielmga/EliteMotors'
        },
        
    ];

    function handleModal(project: any) {
    setModalData(project)
    setIsOpen(true)
    }
    
   return (
    <div className="bg-[#0A001B] md:h-screen sm:h-[600px] text-white relative">

        <motion.div
            className="
                w-[160px] relative left-30 top-30
                max-md:left-6 max-md:top-10
            "
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <h2 className="text-[22px] font-bold max-md:text-[20px]">Meus Projetos</h2>
            <p className="max-md:text-[15px]">Aplicações web</p>

            <motion.div
                className="flex items-center mt-2"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <div className="h-[2px] bg-white w-1/2 opacity-90"></div>
            </motion.div>
        </motion.div>

        <motion.div
            className="
                grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8
        w-[1100px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        
        max-lg:w-[90%]
        max-md:static max-md:mt-20 max-md:-translate-x-0 max-md:-translate-y-0
        max-md:mx-auto max-md:place-items-center
            "
            initial="hidden"
            whileInView="show"
            variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.2 } }
            }}
            viewport={{ once: true, amount: 0.2 }}
        >
            {projects.map((project, i) => (
                <motion.div
                    key={i}
                    className="bg-[#242424] rounded-xl p-2 cursor-pointer overflow-hidden border border-transparent"
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        show: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.6 }}
                    whileHover={{
                        scale: 1.03,
                        boxShadow: "0 0 15px rgba(255,255,255,0.2)",
                        transition: { duration: 0.2 }
                    }}
                >
                    <div className="w-full aspect-[1900/970]">
                        <img
                            src={project.image}
                            alt="project"
                            className="w-full h-full object-cover rounded-lg"
                            onClick={() => handleModal(project)}
                        />
                    </div>
                </motion.div>
            ))}

            <ProjectModal
                isOpen={isOpen}
                modalData={modalData}
                setIsOpen={setIsOpen}
            />
        </motion.div>

    </div>
);

}
