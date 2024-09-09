import React, { useState, useEffect } from 'react';
import Gallery from './Gallery';
import { experiences } from '../helpers/constants';

function Experience() {
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const [showGallery, setShowGallery] = useState([]);

  useEffect(() => {
    const initialArray = [];
    for (let i = 0; i < experiences.length; i++) {
      initialArray.push(false);
    }
    setExpandedIndexes(initialArray);
    setShowGallery(initialArray);
  }, []);

  const handleToggleExpand = (index) => {
    setExpandedIndexes((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index]; // Invertir el estado del índice
      return newState;
    });
  };
  const handleToggleGallery = (index) => {
    setShowGallery((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index]; // Invertir el estado del índice
      return newState;
    });
  };

  return (
    <div
      className='relative flex flex-col justify-center items-center mt-10 font-medium text-slate-200 '
      id='experience'
    >
      <div className='w-full lg:w-3/4 p-4 max-w-[1100px]'>
        <h1 className='text-3xl font-bold'>Experiencia</h1>
        <ol className='relative border-s border-gray-700'>
          {experiences.map((experience, index) => {
            return (
              <li className='mt-6 ms-4' key={index}>
                <div className='absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700'></div>
                <h3 className='text-lg font-semibold flex items-center'>
                  <div className='h-12 w-8 flex items-center justify-center mr-1'>
                    <img src={experience.img} alt='Icono' width={24} />
                  </div>
                  {experience.title}
                </h3>
                <time className='mb-1 text-sm font-normal leading-none text-slate-400'>
                  {experience.dates}
                </time>
                <div className='mb-4 text-base font-normal'>
                  {expandedIndexes[index] ? (
                    <>
                      {experience.descriptionMain}
                      {experience.descriptionNeeds}
                      <button
                        onClick={() => handleToggleExpand(index)}
                        className='text-blue-500 hover:underline focus:outline-none'
                      >
                        Mostrar menos
                      </button>
                    </>
                  ) : (
                    <>
                      {experience.descriptionMain}
                      {experience.descriptionNeeds && (
                        <>
                          <br />
                          <button
                            onClick={() => handleToggleExpand(index)}
                            className='text-blue-500 hover:underline focus:outline-none'
                          >
                            Mostrar más
                          </button>
                        </>
                      )}
                    </>
                  )}
                </div>
                <div className='flex items-center flex-wrap'>
                  <div className='flex flex-wrap lg:w-4/5 w-full'>
                    {experience.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className='px-4 py-2 text-sm flex justify-center bg-teal-400/10 rounded-full text-teal-300 mr-2 mb-2'
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                  {experience.web !== '' ? (
                    <a
                      className='inline-flex items-center px-4 py-2 text-sm font-medium bg-blue-800 border border-slate-800 rounded-lg hover:bg-blue-900 hover:text-slate-100'
                      href={experience.web}
                      target='_blank'
                      rel='noopener noreferrer'
                      title='Demo del proyecto'
                    >
                      Demo{' '}
                      <svg
                        className='w-3 h-3 ms-2 rtl:rotate-180'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 14 10'
                      >
                        <path
                          stroke='currentColor'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M1 5h12m0 0L9 1m4 4L9 9'
                        />
                      </svg>
                    </a>
                  ) : (
                    <button
                      className='inline-flex items-center px-4 py-2 text-sm font-medium bg-blue-800 border border-slate-800 rounded-lg hover:bg-blue-900 hover:text-slate-100'
                      title='Ver fotos demo'
                      onClick={() => handleToggleGallery(index)}
                    >
                      Fotos Demo{' '}
                      <svg
                        className='w-3 h-3 ms-2 rtl:rotate-180'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 14 10'
                      >
                        <path
                          stroke='currentColor'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M1 5h12m0 0L9 1m4 4L9 9'
                        />
                      </svg>
                    </button>
                  )}

                  {showGallery[index] && (
                    <Gallery
                      images={experience.images}
                      handleClose={() => handleToggleGallery(index)}
                    />
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default Experience;
