import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ pics }) => {
  return pics.map(el => {
    return (
      <li key={el.id} className={css.imageGalleryItem}>
        <img
          className={css.imageGalleryItemImage}
          src={el.pageURL}
          alt={el.tags}
        />
      </li>
    );
  });
};
