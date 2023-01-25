import css from './ImageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';

export const ImageGallery = () => {
  return (
    <ul className={css.imageGallery}>
      <ImageGalleryItem></ImageGalleryItem>
      <Button></Button>
    </ul>
  );
};
