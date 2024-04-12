import React from 'react';
import {
  ReactIcon,
  AngularIcon,
  NodeIcon,
  MySQLIcon,
  PostgreSQLIcon,
  ExpressIcon,
  GitIcon,
  JavascriptIcon,
  LaravelIcon,
  TailwindCSSIcon,
  HTMLIcon,
  CSSIcon,
  PHPIcon,
  ReduxIcon,
  IconLinkedin,
  IconGithub,
  IconGmail,
} from '../helpers/icons';

function Home() {
  const technologies = [
    { name: 'React', icon: <ReactIcon /> },
    { name: 'Angular', icon: <AngularIcon /> },
    { name: 'Node', icon: <NodeIcon /> },
    { name: 'Express', icon: <ExpressIcon /> },
    { name: 'JavaScript', icon: <JavascriptIcon /> },
    { name: 'MySQL', icon: <MySQLIcon /> },
    { name: 'PostgreSQL', icon: <PostgreSQLIcon /> },
    { name: 'Redux', icon: <ReduxIcon /> },
    { name: 'Git', icon: <GitIcon /> },
    { name: 'Laravel', icon: <LaravelIcon /> },
    { name: 'Tailwind', icon: <TailwindCSSIcon /> },
    { name: 'CSS', icon: <CSSIcon /> },
    { name: 'HTML', icon: <HTMLIcon /> },
    { name: 'PHP', icon: <PHPIcon /> },
  ];
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
              >
                <IconLinkedin className='h-6 w-6 hover:text-slate-50' />
              </a>
              <a
                href='https://github.com/ZeyronJ'
                target='_blank'
                rel='noopener noreferrer'
              >
                <IconGithub className='h-6 w-6 hover:text-slate-50' />
              </a>
              <a
                href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=javiermamani91@gmail.com&su=Contacto+Portafolio&body='
                target='_blank'
                rel='noopener noreferrer'
              >
                <IconGmail className='h-6 w-6 hover:text-slate-50' />
              </a>
            </div>
            <button
              className='px-4 py-2 bg-blue-900/90 border-slate-800 border rounded-lg text-slate-50 flex mt-2 hover:bg-blue-900/60 hover:text-slate-100  gap-2'
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
              src='/yo2.webp'
              alt='imagen'
              className='mx-auto rounded-full border-4 border-blue-900/50 mt-4 2xl:mt-0'
              height={224}
              width={224}
            />
          </div>
        </div>
        <div className='w-full lg:w-3/4 p-4 max-w-[1100px]'>
          <h2 className='text-2xl font-bold mb-2'>Sobre mí</h2>
          <p>
            Egresado de Ingeniería Civil en Computación e Informática, me
            apasiona la creación y desarrollo de soluciones tecnológicas
            innovadoras. Me he desempeñado en proyectos de desarrollo de
            aplicaciones web Full Stack, utilizando principalmente frameworks
            como React, Angular, Node, entre otros.{' '}
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
