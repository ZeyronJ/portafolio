import {
  ReactIcon,
  AngularIcon,
  NodeIcon,
  MySQLIcon,
  PostgreSQLIcon,
  ExpressIcon,
  GitIcon,
  JavascriptIcon,
  TailwindCSSIcon,
  HTMLIcon,
  CSSIcon,
  ReduxIcon,
  AWSIcon,
  NextJSIcon,
  DockerIcon,
  N8NIcon,
} from './icons';

export const technologies = [
  { name: 'React', icon: <ReactIcon className='w-10 h-10 text-cyan-400' /> },
  { name: 'AWS', icon: <AWSIcon className='w-10 h-10' /> },
  { name: 'Node.js', icon: <NodeIcon className='w-10 h-10' /> },
  { name: 'Express', icon: <ExpressIcon className='w-10 h-10' /> },
  { name: 'JavaScript', icon: <JavascriptIcon className='w-10 h-10' /> },
  { name: 'MySQL', icon: <MySQLIcon className='w-10 h-10 text-cyan-600' /> },
  {
    name: 'PostgreSQL',
    icon: <PostgreSQLIcon className='w-10 h-10' />,
  },
  { name: 'n8n', icon: <N8NIcon className='w-10 h-10 text-transparent' /> },
  { name: 'Git', icon: <GitIcon className='w-10 h-10 text-orange-600' /> },
  { name: 'Next.js', icon: <NextJSIcon className='w-10 h-10' /> },
  { name: 'TailwindCSS', icon: <TailwindCSSIcon className='w-10 h-10' /> },
  { name: 'CSS', icon: <CSSIcon className='w-10 h-10' /> },
  { name: 'HTML', icon: <HTMLIcon className='w-10 h-10' /> },
  {
    name: 'Docker',
    icon: (
      <DockerIcon className='fill-white size-10 bg-[#0091e2] rounded-full' />
    ),
  },
];

export const experiences = [
  {
    dates: 'Freelance | feb. 2025 - actualidad',
    title: 'Desarrollador Full Stack IA',
    descriptionMain:
      'Desarrolle soluciones de Inteligencia Artificial sumado a interfaces y backend para automatizar procesos empresariales, especializándome en OCR, procesamiento de documentos y sistemas de matching inteligente. Implemento tecnologías cutting-edge como LLMs y flujos de trabajo automatizados para optimizar la eficiencia operativa y reducir errores manuales.',
    descriptionNeeds: (
      <>
        <p className='-mt-2'>
          <br />
          Soluciones desarrolladas:
        </p>
        <ul className='list-disc ml-4'>
          <li>
            <strong>Plataforma de Automatización de Facturas: </strong>
            Desarrollé una plataforma web completa para la gestión y validación
            automática de albaranes y facturas utilizando IA y OCR. Implementé
            funcionalidades de validación cruzada de documentos, seguimiento en
            tiempo real, y un chat inteligente integrado. La solución redujo
            significativamente los errores manuales y optimizó los tiempos de
            procesamiento documental, mejorando la eficiencia operativa y la
            seguridad en el manejo de información.
          </li>
          <li>
            <strong>
              Sistema de Matching Inteligente para Reclutamiento:{' '}
            </strong>
            Creé una plataforma web para automatizar el ciclo de reclutamiento
            completo mediante IA y flujos automatizados con n8n. Desarrollé
            sistema de OCR para subida masiva de CVs, algoritmo de matching
            basado en LLMs para clasificación automática de candidatos, y chat
            inteligente para comunicación optimizada. La solución escalable
            reduce tiempos de filtrado y permite decisiones de contratación
            basadas en criterios personalizables.
          </li>
        </ul>
      </>
    ),
    img: '/favicon.ico',
    technologies: [
      'Next.js',
      'React',
      'Node.js',
      'Express',
      'n8n',
      'OpenAI API',
      'Gemini API',
      'OCR',
      'Docker',
      'PostgreSQL',
      'TailwindCSS',
      'TypeScript',
    ],
    images: [
      {
        original: '/experiences/freelance/f1.webp',
        thumbnail: '/experiences/freelance/f1.webp',
      },
      {
        original: '/experiences/freelance/f2.webp',
        thumbnail: '/experiences/freelance/f2.webp',
      },
      {
        original: '/experiences/freelance/f3.webp',
        thumbnail: '/experiences/freelance/f3.webp',
      },
      {
        original: '/experiences/freelance/f4.webp',
        thumbnail: '/experiences/freelance/f4.webp',
      },
      {
        original: '/experiences/freelance/f5.webp',
        thumbnail: '/experiences/freelance/f5.webp',
      },
      {
        original: '/experiences/freelance/f6.webp',
        thumbnail: '/experiences/freelance/f6.webp',
      },
      {
        original: '/experiences/freelance/f7.webp',
        thumbnail: '/experiences/freelance/f7.webp',
      },
      {
        original: '/experiences/freelance/f8.webp',
        thumbnail: '/experiences/freelance/f8.webp',
      },
      {
        original: '/experiences/freelance/f9.webp',
        thumbnail: '/experiences/freelance/f9.webp',
      },
      {
        original: '/experiences/freelance/f10.webp',
        thumbnail: '/experiences/freelance/f10.webp',
      },
    ],
    web: '',
  },
  {
    dates: 'Gsamples Global | oct. 2024 - ago. 2025',
    title: 'Desarrollador Full Stack Web/Móvil',
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
      'Jira',
      'AWS',
      'SDK RFID',
      'Eleven Labs',
      'Android Studio',
      'Postman',
      'Docker',
      'TailwindCSS',
      'NestJS',
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
    dates: 'FusionCode Consultores | sept. 2024 - nov. 2024',
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
      'TailwindCSS',
      'WSL',
      'Scrum',
      'Jira',
      'Postman',
    ],
    images: [],
    web: 'https://fusioncode-seven.vercel.app/',
  },
  {
    dates:
      'Facultad de Odontología, Universidad de Chile | nov. 2023 - may. 2024',
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
      'TailwindCSS',
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
    dates: 'Universidad de Tarapacá | dic. 2022 - feb. 2023',
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
    technologies: ['Laravel', 'PHP', 'TailwindCSS', 'JavaScript', 'MySQL'],
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
    technologies: ['React', 'TailwindCSS', 'JavaScript'],
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
];
