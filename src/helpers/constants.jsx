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
  AWSIcon,
} from './icons';

export const technologies = [
  { name: 'React', icon: <ReactIcon /> },
  { name: 'AWS', icon: <AWSIcon /> },
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
    dates: 'Gsamples Global | oct. 2024 — actualidad',
    title: 'Desarrollador Frontend Web/Móvil',
    descriptionMain:
      'Desarrollé herramientas innovadoras para la gestión geológica en Gsamples Global, incluyendo Gsamples Planner y Gsamples Scanner-App, optimizando la trazabilidad, análisis y eficiencia en las operaciones geológicas.',
    descriptionNeeds: (
      <>
        <p className='-mt-2'>
          <br />
          Soluciones desarrolladas:
        </p>
        <ul className='list-disc ml-4'>
          <li>
            <strong>Gsamples Planner:</strong> Plataforma para mejorar la
            trazabilidad de muestras en tiempo real, reduciendo tiempos en la
            muestrera y ofreciendo análisis con gráficos y vinculación de
            históricos para optimizar decisiones. Incluye un planificador
            similar a Jira, manejo de roles de usuario, autenticación segura y
            registro de logs de acciones realizadas.
          </li>
          <li>
            <strong>Gsamples Scanner-App:</strong> Aplicación móvil con
            tecnología RFID para acelerar y optimizar la gestión de muestras,
            aumentando la precisión y eficiencia en operaciones geológicas.
            Implementé autenticación, escaneo de muestras por unidad y por grupo
            utilizando el SDK de RFID, sincronización offline/online, y un flujo
            de acciones estructurado para la edición y creación de nuevas
            muestras geológicas.
          </li>
        </ul>
      </>
    ),
    img: '/gsamplesIcon.webp',
    technologies: [
      'Angular',
      'Next.js',
      'React',
      'Node.js',
      'React Native',
      'SQLite',
      'Git',
      'Jira',
      'AWS',
      'SDK RFID',
      'Java',
      'Android Studio',
      'Postman',
      'TailwindCSS',
      'Bootstrap',
    ],
    images: [
      {
        original: '/experiences/gsamples/scanner1.webp',
        thumbnail: '/experiences/gsamples/scanner1.webp',
      },
      {
        original: '/experiences/gsamples/scanner2.webp',
        thumbnail: '/experiences/gsamples/scanner2.webp',
      },
      {
        original: '/experiences/gsamples/scanner3.webp',
        thumbnail: '/experiences/gsamples/scanner3.webp',
      },
      {
        original: '/experiences/gsamples/scanner4.webp',
        thumbnail: '/experiences/gsamples/scanner4.webp',
      },
      {
        original: '/experiences/gsamples/scanner5.webp',
        thumbnail: '/experiences/gsamples/scanner5.webp',
      },
      {
        original: '/experiences/gsamples/planner1.webp',
        thumbnail: '/experiences/gsamples/planner1.webp',
      },
      {
        original: '/experiences/gsamples/planner2.webp',
        thumbnail: '/experiences/gsamples/planner2.webp',
      },
      {
        original: '/experiences/gsamples/planner3.webp',
        thumbnail: '/experiences/gsamples/planner3.webp',
      },
      {
        original: '/experiences/gsamples/planner4.webp',
        thumbnail: '/experiences/gsamples/planner4.webp',
      },
      {
        original: '/experiences/gsamples/planner5.webp',
        thumbnail: '/experiences/gsamples/planner5.webp',
      },
    ],
    web: '',
  },
  {
    dates: 'FusionCode Consultores | sept. 2024 — nov. 2024',
    title: 'Desarrollador Web Full Stack',
    descriptionMain:
      'Diseñé y desarrollé la landing page oficial de FusionCode Consultores, mejorando su presencia online y optimizando la experiencia de usuario. Además, lideré y capacité a un equipo de TI, promoviendo metodologías ágiles para maximizar la productividad y el enfoque en resultados.',
    descriptionNeeds: (
      <>
        <p className='-mt-2'>
          <br />
          Logros y contribuciones clave:
        </p>
        <ul className='list-disc ml-4'>
          <li>Desarrollo de una landing page profesional.</li>
          <li>
            Mejora de la experiencia de usuario con un diseño moderno e
            intuitivo.
          </li>
          <li>
            Implementación de metodologías ágiles como Scrum para la gestión de
            proyectos.
          </li>
          <li>
            Liderazgo y capacitación de un equipo de TI en el desarrollo de
            sistemas web.
          </li>
          <li>
            Integración de herramientas como Jira y Postman para optimizar el
            flujo de trabajo.
          </li>
        </ul>
      </>
    ),
    img: '/experiences/fusioncode/logo.webp',
    technologies: [
      'React',
      'Node.js',
      'Express',
      'Tailwind CSS',
      'WSL',
      'Git',
      'Scrum',
      'Jira',
      'Postman',
    ],
    images: [],
    web: 'https://fusioncode-seven.vercel.app/',
  },
  {
    dates:
      'Facultad de Odontología, Universidad de Chile | nov. 2023 — may. 2024',
    title: 'Desarrollador Web Full Stack',
    descriptionMain:
      'Diseñé y desarrollé un Sistema de Gestión de Documentos para la Facultad de Odontología de la Universidad de Chile, optimizando la administración de archivos y alineándolo con la política de cero papel. Además, se realizó una actualización integral del sistema, mejorando la interfaz y migrando a tecnologías más modernas.',
    descriptionNeeds: (
      <>
        <p className='-mt-2'>
          <br />
          Mejoras y funcionalidades implementadas:
        </p>
        <ul className='list-disc ml-4'>
          <li>
            Organización y almacenamiento digital de documentos con gestión de
            permisos.
          </li>
          <li>
            Implementación de roles de usuario con accesos personalizados.
          </li>
          <li>Creación de un sistema de validación para archivos oficiales.</li>
          <li>
            Integración de un sistema de notificaciones para eventos relevantes.
          </li>
          <li>
            Rediseño de la interfaz para mejorar la usabilidad y experiencia del
            usuario.
          </li>
          <li>
            Migración a Next.js y optimización del rendimiento del sistema.
          </li>
          <li>Implementación de AWS para almacenamiento seguro en la nube.</li>
        </ul>
      </>
    ),
    img: '/uchileIcon.webp',
    technologies: [
      'Next.js',
      'React',
      'Node.js',
      'Express',
      'AWS',
      'Redux',
      'PostgreSQL',
      'MySQL',
      'Tailwind CSS',
      'Git',
    ],
    images: [
      {
        original: '/experiences/documentos/documentos1.webp',
        thumbnail: '/experiences/documentos/documentos1.webp',
      },
      {
        original: '/experiences/documentos/documentos2.webp',
        thumbnail: '/experiences/documentos/documentos2.webp',
      },
      {
        original: '/experiences/documentos/documentos3.webp',
        thumbnail: '/experiences/documentos/documentos3.webp',
      },
      {
        original: '/experiences/documentos/documentos4.webp',
        thumbnail: '/experiences/documentos/documentos4.webp',
      },
      {
        original: '/experiences/documentos/documentos5.webp',
        thumbnail: '/experiences/documentos/documentos5.webp',
      },
      {
        original: '/experiences/documentos/documentos6.webp',
        thumbnail: '/experiences/documentos/documentos6.webp',
      },
      {
        original: '/experiences/documentos/documentos7.webp',
        thumbnail: '/experiences/documentos/documentos7.webp',
      },
      {
        original: '/experiences/documentos/documentos8.webp',
        thumbnail: '/experiences/documentos/documentos8.webp',
      },
      {
        original: '/experiences/documentos/documentos9.webp',
        thumbnail: '/experiences/documentos/documentos9.webp',
      },
      {
        original: '/experiences/documentos/documentos10.webp',
        thumbnail: '/experiences/documentos/documentos10.webp',
      },
    ],
    web: 'https://docs-manager-seven.vercel.app/',
  },
  {
    dates: 'Universidad de Tarapacá | dic. 2022 — feb. 2023',
    title: 'Practica Profesional Desarrollador Web Full Stack',
    descriptionMain:
      'Desarrollé un Sistema de Seguimiento de Proyectos para la Dirección de Infraestructura, con seguimiento de pagos, notificaciones y almacenamiento de documentos.',
    descriptionNeeds: (
      <>
        <p className='-mt-2'>
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
        original: '/experiences/practica1/obras1.webp',
        thumbnail: '/experiences/practica1/obras1.webp',
      },
      {
        original: '/experiences/practica1/obras2.webp',
        thumbnail: '/experiences/practica1/obras2.webp',
      },
      {
        original: '/experiences/practica1/obras3.webp',
        thumbnail: '/experiences/practica1/obras3.webp',
      },
      {
        original: '/experiences/practica1/obras4.webp',
        thumbnail: '/experiences/practica1/obras4.webp',
      },
      {
        original: '/experiences/practica1/obras5.webp',
        thumbnail: '/experiences/practica1/obras5.webp',
      },
      {
        original: '/experiences/practica1/obras6.webp',
        thumbnail: '/experiences/practica1/obras6.webp',
      },
      {
        original: '/experiences/practica1/obras7.webp',
        thumbnail: '/experiences/practica1/obras7.webp',
      },
      {
        original: '/experiences/practica1/obras8.webp',
        thumbnail: '/experiences/practica1/obras8.webp',
      },
      {
        original: '/experiences/practica1/obras9.webp',
        thumbnail: '/experiences/practica1/obras9.webp',
      },
      {
        original: '/experiences/practica1/obras10.webp',
        thumbnail: '/experiences/practica1/obras10.webp',
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
