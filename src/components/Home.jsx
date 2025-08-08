import React, { useState } from 'react';
import { IconLinkedin, IconGithub, IconGmail } from '../helpers/icons';
import { technologies } from '../helpers/constants';

function Home() {
  const [copyMessage, setCopyMessage] = useState('');

  const handleCopy = () => {
    const textToCopy = 'javiermamani91@gmail.com';
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopyMessage('¡Correo copiado!');
        setTimeout(() => {
          setCopyMessage('');
        }, 2000);
      })
      .catch((error) => {
        console.error('Error al copiar el texto: ', error);
      });
  };

  return (
    <div className='text-slate-200 mt-12 xl:mt-0' id='inicio'>
      <div className='flex flex-col justify-center items-center min-h-screen font-medium'>
        <div className='w-full lg:w-3/4 p-4 mb-10 flex flex-col-reverse lg:flex-row lg:justify-between max-w-[1100px] items-center'>
          <div className='mb-4 lg:mb-0 items-center flex flex-col lg:block'>
            <h1 className='text-3xl font-bold'>¡Hola!, Soy Javier 👋</h1>
            <p className='font-medium text-center text-balance lg:text-left'>
              Ingeniero de Software | Desarrollador Full Stack
            </p>
            <div className='flex my-2 gap-x-2'>
              <a
                href='https://www.linkedin.com/in/javier-mamani-lovera/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Perfil de LinkedIn'
                title='Perfil de LinkedIn'
              >
                <IconLinkedin className='h-6 w-6 hover:text-slate-50' />
              </a>
              <a
                href='https://github.com/ZeyronJ'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Perfil de GitHub'
                title='Perfil de GitHub'
              >
                <IconGithub className='h-6 w-6 hover:text-slate-50' />
              </a>
              <button
                onClick={handleCopy}
                aria-label='Copiar correo'
                title='Copiar correo'
              >
                <IconGmail className='h-6 w-6 hover:text-slate-50' />
              </button>
              {copyMessage && (
                <div className='text-green-500'>{copyMessage}</div>
              )}
            </div>
            <button
              className='px-4 py-2 bg-blue-800 border-slate-800 border rounded-lg text-slate-50 flex mt-2 hover:bg-blue-900 hover:text-slate-100  gap-2'
              title='Abrir CV en PDF'
              onClick={() => window.open('/cv-javier-mamani.pdf')}
            >
              CV{' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z'
                />
              </svg>
            </button>
          </div>
          <div className='w-1/2'>
            <img
              src='/yo.webp'
              alt='imagen'
              className='mx-auto rounded-full border-4 border-blue-900/10 mt-4 2xl:mt-0'
              height={224}
              width={224}
            />
          </div>
        </div>
        <div className='w-full lg:w-3/4 p-4 max-w-[1100px]'>
          <h2 className='text-2xl font-bold mb-2'>Sobre mí</h2>
          <p>
            Ingeniero Civil en Computación e Informática con más de dos años de
            experiencia profesional. Especializado en el desarrollo de
            aplicaciones web Full Stack e inteligencia artificial, enfocado en
            crear soluciones eficientes y escalables.
          </p>
          <div className='flex flex-col lg:flex-row mt-4'>
            <div className='mb-4 lg:mb-0 lg:mr-4'>
              <h3 className='font-semibold text-lg'>Educación:</h3>
              <ul>
                <li className='text-balance'>
                  Ingeniería Civil en Computación e Informática, Ingeniería de
                  Software.
                </li>
                <li className='italic text-slate-400'>
                  Universidad de Tarapacá | mar. 2018 - feb. 2024
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold text-lg'>
                Tecnologías principales:
              </h3>
              <div className='grid grid-cols-5 lg:grid-cols-7 gap-2 lg:gap-4 text-xs'>
                {technologies.map((tech, index) => (
                  <div key={index} className='p-2 flex flex-col items-center'>
                    {tech.icon}
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
