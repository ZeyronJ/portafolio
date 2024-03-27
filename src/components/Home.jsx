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
    <div className='text-slate-200'>
      <div className='flex flex-col justify-center items-center min-h-screen font-medium'>
        <div className='flex w-3/5 p-4 mb-10'>
          <div>
            <h1 className='text-3xl font-bold'>¡Hola!, Soy Javier 👋</h1>
            <p className='font-medium'>
              Ingeniero de Software | Desarrollador Full Stack
            </p>
            <div>
              <button>Curriculum</button>
            </div>
          </div>
          <div>imagen</div>
        </div>
        <div className='w-3/5 p-4'>
          <h2 className='text-2xl font-bold'>Sobre mi</h2>
          <p>
            Egresado de Ingeniería Civil en Computación e Informática, me
            apasiona la creación y desarrollo de soluciones tecnológicas
            innovadoras. Me he desempeñado en proyectos de desarrollo de
            aplicaciones web Full Stack, utilizando principalmente frameworks
            como React, Angular, Node, entre otros.{' '}
          </p>
          <div className='flex mt-4'>
            <div>
              <h3 className='font-semibold text-lg'>Educacion:</h3>
              <ul>
                <li>
                  Ingeniería Civil en Computación e Informática, Ingeniería de
                  Software
                </li>
                <li className='italic text-slate-400'>
                  Universidad de Tarapacá | mar. 2018 - feb. 2024
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold text-lg'>Tecnologias:</h3>
              <div className='grid grid-cols-7 text-xs'>
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
