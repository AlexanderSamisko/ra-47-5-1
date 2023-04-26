import Card from "./Components/Card.js"
import CardItem from "./Components/CardItem.js"
import './App.css';

function App() {
  let items = [
    [
      <img className="img" src={require("./img/Scroll.png")} alt="" />, 
      <h2 className="title">Card Title</h2>, 
      <p className="content">Some quick example...</p>, 
      <button className="btn">Go to somewhere</button>
    ],
    [
      <h2 className="title">Special Card Title</h2>,
      <p className="content">With support the text bellow...</p>,
      <button className="btn">Go to somewhere</button>
    ]
  ]

  return (
    <div className="App">
        {
          items.map((element, index) => 
            <Card key={index} items={element}>
                {(item) => <CardItem key={item}>{item}</CardItem>}
            </Card>
          )
        }
    </div>
  );
}

export default App;
