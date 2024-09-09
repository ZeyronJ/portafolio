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
} from './icons';

export const technologies = [
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

export const experiences = [
  {
    dates: 'Febrero 2024 - Abril 2024',
    title: 'Desarrollador Full Stack',
    descriptionMain:
      'Desarrollo de una actualizacion integral del Sistema de Gestión de Documentos para la Facultad de Odontología de la Universidad de Chile. Esta actualización incluye una mejora significativa en el diseño de la interfaz, haciendo que las secciones sean más claras y fáciles de navegar. Además, hemos actualizado las tecnologías del sistema, migrando a Next.js y utilizando AWS para el almacenamiento seguro de archivos en la nube.',
    descriptionNeeds: (
      <>
        <p>
          <br />
          Necesidades cubiertas por la actualización:
        </p>
        <ul className='list-disc ml-4'>
          <li>
            Mejora en la interfaz de usuario para una navegación más intuitiva.
          </li>
          <li>
            Actualización de tecnologías para mejorar la eficiencia y seguridad
            del sistema.
          </li>
          <li>
            Migración a Next.js para mejorar el rendimiento y la velocidad de
            carga.
          </li>
          <li>
            Implementación de AWS para el almacenamiento seguro de archivos en
            la nube.
          </li>
        </ul>
      </>
    ),
    img: '/uchileIcon.webp',
    technologies: [
      'Next.js',
      'AWS',
      'React',
      'Node',
      'Redux',
      'JavaScript',
      'PostgreSQL',
      'Git',
      'HTML & CSS',
    ],
    images: [],
    web: 'https://docs-manager-seven.vercel.app/',
  },
  {
    dates: 'Noviembre 2023 - Enero 2024',
    // dates: 'Agosto 2022 - Noviembre 2022',
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
            usuarios sobre eventos importantes, como la creación o modificación
            de documentos.
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
    web: '',
  },
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
          <li>Un repositorio donde almacenar documentos de forma ordenada.</li>
          <li>
            Establecer roles de usuario con permisos adaptados a las necesidades
            de cada tipo de usuario.
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
    web: '',
  },
  {
    dates: 'Enero 2022 - Marzo 2022',
    title: 'Asistente en Gestión de Sistema ERP',
    descriptionMain:
      'Gestión y administración de un sistema ERP, junto con otros softwares para la administración de locales y bodega central de una empresa, con capacitaciones sobre el sistema y reemplazo temporal del encargado principal. También se prestaron servicios esporádicos de mantenimiento de hardware.',
    descriptionNeeds: (
      <>
        <p>
          <br />
          Responsabilidades y actividades clave:
        </p>
        <ul className='list-disc ml-4'>
          <li>
            Capacitación y aprendizaje sobre el sistema ERP y otros softwares
            administrativos.
          </li>
          <li>
            Administración de inventarios y flujos de trabajo mediante el ERP.
          </li>
          <li>
            Soporte técnico en software administrativo y mantenimiento de
            hardware.
          </li>
          <li>
            Reemplazo temporal del encargado del sistema ERP y otros softwares
            administrativos.
          </li>
        </ul>
      </>
    ),
    img: '/dispalIcon.webp',
    technologies: [
      'SiraERP',
      'SII',
      'Excel',
      'cPanel',
      'Groupwares',
      'Hardware',
    ],
    images: [
      {
        original: '/experiences/dispal1.webp',
        thumbnail: '/experiences/dispal1.webp',
      },
      {
        original: '/experiences/dispal2.webp',
        thumbnail: '/experiences/dispal2.webp',
      },
      {
        original: '/experiences/dispal3.webp',
        thumbnail: '/experiences/dispal3.webp',
      },
      {
        original: '/experiences/dispal4.webp',
        thumbnail: '/experiences/dispal4.webp',
      },
      {
        original: '/experiences/dispal5.webp',
        thumbnail: '/experiences/dispal5.webp',
      },
      {
        original: '/experiences/dispal6.webp',
        thumbnail: '/experiences/dispal6.webp',
      },
      {
        original: '/experiences/dispal7.webp',
        thumbnail: '/experiences/dispal7.webp',
      },
      {
        original: '/experiences/dispal8.webp',
        thumbnail: '/experiences/dispal8.webp',
      },
      {
        original: '/experiences/dispal9.webp',
        thumbnail: '/experiences/dispal9.webp',
      },
    ],
    web: '',
  },
];

export const projects = [
  {
    title: 'Tareas a tiempo',
    technologies: [
      'React Native',
      'JavaScript',
      'TailwindCSS',
      'SQLite',
      'Notifications',
    ],
    description:
      'Aplicación móvil para gestionar mediante notificaciones tareas dependiendo de la hora en que se inician estas, se puede agregar, editar, eliminar o dividir en paginas las tareas.',
    img: '/timingTasks.webp',
    github: 'https://github.com/ZeyronJ/timing-tasks',
    web: '',
    video: '/timingTasks.mp4',
  },
  {
    title: 'Debt Manager',
    technologies: ['React Native', 'JavaScript', 'TailwindCSS', 'SQLite'],
    description:
      'Aplicación móvil para gestionar deudas, donde puedes agregar, editar y eliminar deudas, se pueden agregar imágenes y audios a las deudas para un mayor contexto.',
    img: '/debtmanager.webp',
    github: 'https://github.com/ZeyronJ/debt-manager',
    web: '',
    video: '/debtmanager.mp4',
  },
  {
    title: 'Portafolio',
    technologies: ['React', 'TailwindCSS', 'JavaScript', 'HTML & CSS'],
    description:
      'Este es mi portafolio personal, donde presento mi formación académica, habilidades, experiencia y proyectos realizados. Esta diseñado para adaptarse a distintos dispositivos.',
    img: '/portafolio.webp',
    github: 'https://github.com/ZeyronJ/portafolio',
    web: '#',
    video: '',
  },
  {
    title: 'Simulador VR para el área de redes',
    technologies: ['Unity', 'C#', 'Lentes Meta Quest'],
    description:
      'Usando realidad virtual se simula un entorno controlado para la enseñanza de redes computacionales, se pueden realizar pruebas de conexión, configuración de dispositivos, entre otros.',
    img: '/redes.webp',
    github: 'https://github.com/ZeyronJ/redes-VR',
    web: '',
    video: '/redes.mp4',
  },
  {
    title: 'App tareas',
    technologies: [
      'Angular',
      'TypeScript',
      'TailwindCSS',
      'HTML & CSS',
      'Firebase',
    ],
    description:
      'Aplicación web simple de lista de tareas, donde puedes agregar, editar, eliminar y marcar como completada cada tarea. Tiene modo oscuro y claro.',
    img: '/todoAngular.webp',
    web: 'https://angular-8c514.firebaseapp.com/',
    github: 'https://github.com/ZeyronJ/todo-angular-darkmode',
    video: '',
  },
];
