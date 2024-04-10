import React, { useState, useEffect } from 'react';
import Video from './Video';

function Projects() {
  const projects = [
    {
      title: 'Debt Manager',
      technologies: ['React Native', 'JavaScript', 'TailwindCSS', 'SQLite'],
      description:
        'Aplicacion movil para gestionar deudas, donde puedes agregar, editar, eliminar y marcar como pagada cada deuda, se pueden agregar imagenes.',
      img: '/src/assets/debtManager.png',
      github: 'https://github.com/ZeyronJ/debt-manager',
      web: '',
      video: '/src/assets/debtmanager.mp4',
    },
    {
      title: 'Portafolio',
      technologies: ['React', 'TailwindCSS', 'JavaScript', 'HTML & CSS'],
      description:
        'Portafolio personal, donde muestro mi educacion, habilidades, experiencia y proyectos realizados.',
      img: '/src/assets/portafolio.png',
      github: 'https://github.com/ZeyronJ/portafolio',
      web: '#',
      video: '',
    },
    {
      title: 'App tareas',
      technologies: ['Angular', 'TypeScript', 'TailwindCSS', 'HTML & CSS'],
      description:
        'Aplicacion web simple de lista de tareas, donde puedes agregar, editar, eliminar y marcar como completada cada tarea. Tiene modo oscuro y claro.',
      img: '/src/assets/todoAngular.png',
      web: 'https://angular-8c514.firebaseapp.com/',
      github: 'https://github.com/ZeyronJ/todo-angular-darkmode',
      video: '',
    },
  ];

  const [showVideos, setShowVideos] = useState([]);

  useEffect(() => {
    const initialArray = [];
    for (let i = 0; i < projects.length; i++) {
      initialArray.push(false);
    }
    setShowVideos(initialArray);
  }, []);

  const handleToggleVideos = (index) => {
    setShowVideos((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index]; // Invertir el estado del índice
      return newState;
    });
  };
  return (
    <div
      className='flex justify-center items-center mt-20 text-slate-200'
      id='projects'
    >
      <div className='lg:w-3/4 w-full p-4 mb-10 max-w-[1100px]'>
        <h1 className='text-3xl font-bold mb-6'>Proyectos</h1>
        <div className='grid 2xl:grid-cols-3 lg:grid-cols-2 gap-4 justify-center'>
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className='bg-slate-800 rounded-lg overflow-hidden mb-4'
              >
                <img className='w-full' src={project.img} alt='' />
                <div className='p-4'>
                  <h2 className='text-white text-lg font-semibold'>
                    {project.title}
                  </h2>
                  <div className='flex flex-wrap gap-1 mb-2'>
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className='text-xs bg-slate-700 rounded-full px-2 py-1'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className='text-white h-20 '>{project.description}</p>
                </div>
                <div className='p-4 flex gap-x-2'>
                  <a
                    className='px-4 py-2 bg-blue-900/90 border-slate-800 border rounded-lg text-slate-50 flex gap-2 mt-2 hover:bg-blue-900/60 hover:text-slate-100'
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Codigo
                  </a>
                  {project.web !== '' ? (
                    <a
                      className='px-4 py-2 bg-blue-900/90 border-slate-800 border rounded-lg text-slate-50 flex gap-2 mt-2 hover:bg-blue-900/60 hover:text-slate-100 cursor-pointer'
                      href={project.web}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Demo
                    </a>
                  ) : (
                    <a
                      className='px-4 py-2 bg-blue-900/90 border-slate-800 border rounded-lg text-slate-50 flex gap-2 mt-2 hover:bg-blue-900/60 hover:text-slate-100 cursor-pointer'
                      onClick={() => handleToggleVideos(index)}
                    >
                      Video Demo
                    </a>
                  )}
                  {showVideos[index] && (
                    <Video
                      videoUrl={project.video}
                      handleClose={() => handleToggleVideos(index)}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
