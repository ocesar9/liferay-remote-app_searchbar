const Card = ({ id, name }) => {
  return (
    <div id={id}>
      <h5 className="title mb-0">{name}</h5>
    </div>
  );
};

export default Card;
