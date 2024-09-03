import { useState } from "react";
import "./App.css";

function App() {
  const [pizzaNumber, setPizzaNumber] = useState('01');
  const [animationClass, setAnimationClass] = useState('animate-from-top-right');
  const [previousPizza, setPreviousPizza] = useState(null);

  const handlePizzaClick = (number) => {

    if (+number > +pizzaNumber) {
      // When a different pizza is selected
      setAnimationClass('animate-top');
    } else {
      // When the same pizza is selected again
      setAnimationClass('animate-bottom');
    }

    setPizzaNumber(number);

    setTimeout(() => setAnimationClass(''), 1000);
  };

  return (
    <div className="container">
      <img src="./assets/logo.png" alt="logo" className="logo" />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop: "50px",
            width: "40%",
          }}
        >
          <p style={{ fontWeight: "bold", fontSize: "40px" }}>
            Today’s Special
          </p>
          <p style={{ fontSize: "85px" }}>Garden Lover</p>
          <p style={{ fontSize: "24px" }}>
            Pizza is a popular Italian dish made of a round, flat dough base
            topped with tomato sauce, cheese, and various ingredients like
            meats, vegetables, and herbs, baked to perfection in an oven.{" "}
          </p>
          <div style={{display: 'flex', columnGap: '30px', position: 'relative'}}>
            <img src="./assets/01.png" alt="pizza1" className={`small ${pizzaNumber === '01' ? 'click' : ''}`} onClick={() => handlePizzaClick('01')} />
            <img src="./assets/02.png" alt="pizza2" className={`small ${pizzaNumber === '02' ? 'click' : ''}`} onClick={() => handlePizzaClick('02')} />
            <img src="./assets/03.png" alt="pizza3" className={`small ${pizzaNumber === '03' ? 'click' : ''}`} onClick={() => handlePizzaClick('03')} />
            <img src="./assets/04.png" alt="pizza4" className={`small ${pizzaNumber === '04' ? 'click' : ''}`} onClick={() => handlePizzaClick('04')} />
          </div>
        </div>
        <img src={`./assets/${pizzaNumber}.png`} alt="pizza" className={`pizza ${animationClass}`} />
      </div>
    </div>
  );
}

export default App;
