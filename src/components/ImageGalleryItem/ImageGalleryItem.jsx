import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = () => {
  return (
    <li className={css.imageGalleryItem}>
      <img className={css.imageGalleryItemImage} src="" alt="" />
    </li>
  );
};
