function Nav() {
  const handleMenuClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    const headerOffset = 60; // Ajusta según la altura del encabezado
    const offsetTop =
      section.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className='w-full border-b border-b-slate-950 fixed bg-slate-950/50 backdrop-filter backdrop-blur-sm z-30 shadow-md'>
      <div className='flex w-full lg:w-3/4 mx-auto justify-center lg:justify-end py-4 max-w-[1100px]'>
        <ul className='flex text-slate-100'>
          <li className='mr-4 font-medium hover:text-white'>
            <button onClick={() => handleMenuClick('inicio')}>Inicio</button>
          </li>
          <li className='mr-4 font-medium hover:text-white'>
            <button onClick={() => handleMenuClick('experience')}>
              Experiencia
            </button>
          </li>
          <li className='font-medium hover:text-white'>
            <button onClick={() => handleMenuClick('projects')}>
              Proyectos
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
