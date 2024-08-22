import React, { useState, useEffect } from 'react';
import Video from './Video';
import MultiCarouselTechnologies from './MultiCarouselTechnologies';
import { projects } from '../helpers/constants';

function Projects() {
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
                className='bg-slate-800 rounded-lg overflow-hidden shadow-lg'
              >
                <img className='w-full object-cover' src={project.img} alt='' />
                <div className='p-4 h-48 xl:h-40 2xl:h-48'>
                  <h2 className='text-white text-lg font-semibold -mt-2'>
                    {project.title}
                  </h2>
                  {/* <div className='flex flex-wrap gap-1 my-1'>
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className='text-xs bg-slate-700 rounded-full px-2 py-1'
                      >
                        {tech}
                      </span>
                    ))}
                  </div> */}
                  <MultiCarouselTechnologies
                    technologies={project.technologies}
                  />
                  <p className='text-white text-pretty mt-1'>
                    {project.description}
                  </p>
                </div>
                <div className='p-4 flex gap-x-2'>
                  <a
                    className='px-4 py-2 bg-blue-800 border-slate-800 border rounded-lg text-slate-50 flex gap-2 mt-2 hover:bg-blue-900 hover:text-slate-100'
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    title='Código fuente del proyecto'
                  >
                    Código
                  </a>
                  {project.web !== '' ? (
                    <a
                      className='px-4 py-2 bg-blue-800 border-slate-800 border rounded-lg text-slate-50 flex gap-2 mt-2 hover:bg-blue-900 hover:text-slate-100 cursor-pointer'
                      href={project.web}
                      target='_blank'
                      rel='noopener noreferrer'
                      title='Demo del proyecto'
                    >
                      Demo
                    </a>
                  ) : (
                    <button
                      className='px-4 py-2 bg-blue-800 border-slate-800 border rounded-lg text-slate-50 flex gap-2 mt-2 hover:bg-blue-900 hover:text-slate-100 cursor-pointer'
                      title='Ver video demo'
                      onClick={() => handleToggleVideos(index)}
                    >
                      Video Demo
                    </button>
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
