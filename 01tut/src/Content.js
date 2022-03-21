import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Bartłomiej");
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("You clicked it");
  };
  const handleClick2 = (name) => {
    console.log(`${name} was clicke`);
  };
  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p>Hello {name} !</p>
      <button onClick={handleClick}>Click It</button>
      <button onClick={() => handleClick2("Dave")}>Click It Dave</button>
      <button onClick={(e) => handleClick3(e)}>Click Three</button>
    </main>
  );
};

export default Content;
