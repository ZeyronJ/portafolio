import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { CarbonCloseOutline } from '../helpers/icons';
import PropTypes from 'prop-types';

function Gallery({ images, handleClose }) {
  return (
    <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-60'>
      <div className='p-6 lg:max-w-4xl max-w-sm'>
        <button
          className='absolute top-4 right-4 text-white hover:text-gray-200'
          onClick={handleClose}
        >
          <CarbonCloseOutline className='h-8 w-8 lg:w-12 lg:h-12' />
        </button>
        <ImageGallery items={images} />
      </div>
    </div>
  );
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Gallery;
