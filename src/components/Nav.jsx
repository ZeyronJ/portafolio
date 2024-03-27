import React from 'react';

function Nav() {
  return (
    <div className='w-full border-b border-b-slate-950 fixed bg-slate-950/50 backdrop-filter backdrop-blur-sm z-10 shadow-md'>
      <div className='flex w-3/5 m-auto justify-end py-4'>
        <ul className='flex text-slate-200'>
          <li className='mr-4 font-medium'>
            <button>Inicio</button>
          </li>
          <li className='mr-4 font-medium'>
            <button>Experiencia</button>
          </li>
          <li className='mr-4 font-medium'>
            <button>Proyectos</button>
          </li>
          <li className='mr-4 font-medium'>
            <button>Contacto</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
