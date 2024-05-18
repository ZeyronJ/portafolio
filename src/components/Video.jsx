import React from 'react';
import { CarbonCloseOutline } from '../helpers/icons';

function Video({ videoUrl, handleClose }) {
  return (
    <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-60'>
      <div className='p-6 lg:max-w-4xl max-w-sm'>
        <button
          className='absolute top-4 right-4 text-white hover:text-gray-200'
          onClick={handleClose}
        >
          <CarbonCloseOutline className='h-8 w-8 lg:w-12 lg:h-12' />
        </button>
        <video controls className='h-[36rem]' autoPlay>
          <source src={videoUrl} type='video/mp4' />
        </video>
      </div>
    </div>
  );
}

export default Video;
