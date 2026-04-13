import Card from "../Card/Card";
import "./CardList.css";

function CardList({ cards }) {
  return (
    <div className="cards">
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>
  );
}

export default CardList;