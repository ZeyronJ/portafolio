import React, { useState, useEffect } from 'react';
import Gallery from './Gallery';

function Experience() {
  const experiences = [
    {
      dates: 'Diciembre 2022 - Marzo 2023',
      title: 'Practica Profesional Desarrollador Full Stack',
      descriptionMain:
        'Desarrollo de un Sistema de Seguimiento de Proyectos de Obras para la Dirección de Infraestructura y Equipamiento de la Universidad de Tarapacá. Este sistema fue diseñado para abordar las necesidades específicas de la Dirección, facilitando la gestión integral de los proyectos en curso.',
      descriptionNeeds: (
        <>
          <p>
            <br />
            Necesidades cubiertas por el sistema:
          </p>
          <ul className='list-disc ml-4'>
            <li>
              Un repositorio donde almacenar documentos de forma ordenada.
            </li>
            <li>
              Establecer roles de usuario con permisos adaptados a las
              necesidades de cada tipo de usuario.
            </li>
            <li>
              Seguimiento de los estados pago y boletas de un proyecto en
              ejecución.
            </li>
            <li>Notificaciones de pronto vencimiento de plazos.</li>
            <li>Seguimiento en las modificaciones de los proyectos.</li>
          </ul>
        </>
      ),
      img: '/utaIcon.webp',
      technologies: [
        'Laravel',
        'PHP',
        'Tailwind',
        'JavaScript',
        'MySQL',
        'Git',
        'HTML & CSS',
      ],
      images: [
        {
          original: '/experiences/obras1.webp',
          thumbnail: '/experiences/obras1.webp',
        },
        {
          original: '/experiences/obras2.webp',
          thumbnail: '/experiences/obras2.webp',
        },
        {
          original: '/experiences/obras3.webp',
          thumbnail: '/experiences/obras3.webp',
        },
        {
          original: '/experiences/obras4.webp',
          thumbnail: '/experiences/obras4.webp',
        },
        {
          original: '/experiences/obras5.webp',
          thumbnail: '/experiences/obras5.webp',
        },
        {
          original: '/experiences/obras6.webp',
          thumbnail: '/experiences/obras6.webp',
        },
        {
          original: '/experiences/obras7.webp',
          thumbnail: '/experiences/obras7.webp',
        },
        {
          original: '/experiences/obras8.webp',
          thumbnail: '/experiences/obras8.webp',
        },
        {
          original: '/experiences/obras9.webp',
          thumbnail: '/experiences/obras9.webp',
        },
        {
          original: '/experiences/obras10.webp',
          thumbnail: '/experiences/obras10.webp',
        },
      ],
    },
    {
      dates: 'Agosto 2022 - Noviembre 2022',
      title: 'Practica Profesional Desarrollador Full Stack',
      descriptionMain:
        'Desarrollo de un Sistema de Gestión de Documentos para la Facultad de Odontología de la Universidad de Chile, destinado a abordar los desafíos asociados con la administración de archivos en papel y digitales mal ordenados, con el objetivo de apoyar la política cero papel.',
      descriptionNeeds: (
        <>
          <p>
            <br />
            Necesidades cubiertas por el sistema:
          </p>
          <ul className='list-disc ml-4'>
            <li>
              Organización y Almacenamiento Digital de Documentos (carpetas y
              archivos con permisos de acceso y acciones).
            </li>
            <li>
              Establecimiento de roles de usuario con permisos adaptados a las
              necesidades de cada tipo de usuario.
            </li>
            <li>Creación de un sistema de archivos oficiales validados.</li>
            <li>
              Implementación de un sistema de notificaciones para informar a los
              usuarios sobre eventos importantes, como la creación o
              modificación de documentos.
            </li>
          </ul>
        </>
      ),
      img: '/uchileIcon.webp',
      technologies: [
        'React',
        'Node',
        'Express',
        'JavaScript',
        'MySQL',
        'Git',
        'HTML & CSS',
      ],
      images: [
        {
          original: '/experiences/documentos1.webp',
          thumbnail: '/experiences/documentos1.webp',
        },
        {
          original: '/experiences/documentos2.webp',
          thumbnail: '/experiences/documentos2.webp',
        },
        {
          original: '/experiences/documentos3.webp',
          thumbnail: '/experiences/documentos3.webp',
        },
        {
          original: '/experiences/documentos4.webp',
          thumbnail: '/experiences/documentos4.webp',
        },
        {
          original: '/experiences/documentos5.webp',
          thumbnail: '/experiences/documentos5.webp',
        },
        {
          original: '/experiences/documentos6.webp',
          thumbnail: '/experiences/documentos6.webp',
        },
        {
          original: '/experiences/documentos7.webp',
          thumbnail: '/experiences/documentos7.webp',
        },
        {
          original: '/experiences/documentos8.webp',
          thumbnail: '/experiences/documentos8.webp',
        },
        {
          original: '/experiences/documentos9.webp',
          thumbnail: '/experiences/documentos9.webp',
        },
        {
          original: '/experiences/documentos10.webp',
          thumbnail: '/experiences/documentos10.webp',
        },
      ],
    },
  ];

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
                            Leer más
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

                  <button
                    className='inline-flex items-center px-4 py-2 text-sm font-medium bg-blue-900/90 border border-slate-800 rounded-lg hover:bg-blue-900/60 hover:text-slate-100'
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
