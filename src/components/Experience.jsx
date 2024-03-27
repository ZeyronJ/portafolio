import React, { useState } from 'react';

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
      img: 'utaIcon.png',
      technologies: [
        'Laravel',
        'PHP',
        'Tailwind',
        'JavaScript',
        'MySQL',
        'Git',
        'HTML & CSS',
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
      img: 'uchileIcon.png',
      technologies: [
        'React',
        'Node',
        'Express',
        'JavaScript',
        'MySQL',
        'Git',
        'HTML & CSS',
      ],
    },
  ];

  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const handleToggleExpand = (index) => {
    if (expandedIndexes.includes(index)) {
      setExpandedIndexes(expandedIndexes.filter((item) => item !== index));
    } else {
      setExpandedIndexes([...expandedIndexes, index]);
    }
  };

  const isExpanded = (index) => expandedIndexes.includes(index);

  return (
    <div className='relative flex flex-col justify-center items-center mt-10 font-medium text-slate-200'>
      <div className='w-3/5 p-4'>
        <h1 className='text-3xl font-bold'>Experiencia</h1>
        <ol className='relative border-s border-gray-700'>
          {experiences.map((experience, index) => {
            return (
              <li className='mt-6 ms-4' key={index}>
                <div className='absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700'></div>
                <h3 className='text-lg font-semibold flex items-center'>
                  <div className='h-12 w-8 flex items-center justify-center mr-1'>
                    <img
                      src={`/src/assets/${experience.img}`}
                      alt='Icono'
                      className='w-6'
                    />
                  </div>
                  {experience.title}
                </h3>
                <time className='mb-1 text-sm font-normal leading-none text-slate-400'>
                  {experience.dates}
                </time>
                <p className='mb-4 text-base font-normal'>
                  {isExpanded(index) ? (
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
                        <button
                          onClick={() => handleToggleExpand(index)}
                          className='text-blue-500 hover:underline focus:outline-none'
                        >
                          Leer más
                        </button>
                      )}
                    </>
                  )}
                </p>
                <div className='flex items-center'>
                  <div className='flex flex-wrap w-4/5'>
                    {experience.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className='px-4 py-2 text-sm flex justify-center bg-teal-400/10 rounded-full text-teal-300 mr-2 mb-2'
                      >
                        {tech}
                      </div>
                    ))}
                  </div>

                  <a
                    href='#'
                    className='inline-flex items-center px-4 py-2 text-sm font-medium text-slate-800 bg-slate-200 border border-slate-300 rounded-lg hover:bg-slate-100 hover:text-blue-700'
                  >
                    Video Demo{' '}
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
