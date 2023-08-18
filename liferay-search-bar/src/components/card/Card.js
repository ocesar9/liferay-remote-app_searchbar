import './Card.css'

const Card = ({ item,url,contentId }) => {
  return (
    <a
      className="liferay-search-card-result"
      key={item.key}
      id={item.id}
      href={`${url}${item.contentFields[2].contentFieldValue.link}/-/categories/${contentId}`}
    >
      <img
        src={`${url}${item.contentFields[1].contentFieldValue.image.contentUrl}`}
        alt={item.contentFields[1].contentFieldValue.image.title}
        lazy="loading"
      />
      <h5 className="title mb-0">{item.title}</h5>
    </a>
  );
};

export default Card;