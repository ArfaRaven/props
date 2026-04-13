import CardList from "./components/CardList/CardList";
import { cardsData } from "./data";

function App() {
  return (
    <div style={{ backgroundColor: "#ede7f6", minHeight: "100vh", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#4a148c" }}>React Cards</h1>
      <CardList cards={cardsData} />
    </div>
  );
}

export default App;
