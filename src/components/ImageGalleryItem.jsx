export const ImageGalleryItem = ({ pictures, onClick }) => {
  return (
    <>
      {pictures.map(element => (
        <li className="imageGalleryItem" key={element.id}>
          <img
            className="imageGalleryItem-image"
            src={element.webformatURL}
            alt={element.largeImageURL}
            onClick={() => onClick(element.largeImageURL)}
          />
        </li>
      ))}
    </>
  );
};
