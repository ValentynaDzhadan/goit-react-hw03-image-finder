import css from './ImageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';

export const ImageGallery = ({ pics }) => {
  return (
    <ul className={css.imageGallery}>
      <ImageGalleryItem pics={pics}></ImageGalleryItem>
      <Button></Button>
    </ul>
  );
};
