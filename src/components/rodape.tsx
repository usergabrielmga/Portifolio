import Linkedin from '../assets/LinkedIn.png'
import Github from '../assets/GitHub.png'

export default function Rodape() {
    return(
        <div className="bg-[#0D031F] flex justify-center items-center">
  <div className='text-white text-center flex flex-col justify-center p-15 gap-1.5'>
      <p className='opacity-45'>Maringá, Paraná</p>
      <p className='text-[14px]'>gabriel.da.silva.freitas.br@gmail.com</p>

      <div className='flex gap-4 justify-center'>
          <a 
            href="https://www.linkedin.com/in/gabriel-da-silva-freitas-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className='w-10 cursor-pointer' src={Linkedin} alt="LinkedIn" />
          </a>

          <a 
            href="https://github.com/usergabrielmga?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className='w-10 cursor-pointer' src={Github} alt="GitHub" />
          </a>
      </div>
  </div>
</div>

    )
}