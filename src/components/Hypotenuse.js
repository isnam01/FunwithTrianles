import { useState } from "react";
import { Link } from "react-router-dom";

const Hypotenuse = () => {
  const [side1, setSide1] = useState(undefined);
  const [side2, setSide2] = useState(undefined);
  const [msg, setmsg] = useState("");

  const clickHandler = (e) => {
    e.preventDefault();
    let hypotenuse = Math.sqrt(
      Math.pow(Number(side1), 2) + Math.pow(Number(side2), 2)
    );
    setmsg(`Hypotenuse is ${hypotenuse}`);
  };

  return (
    <div>
      <div>
        <Link to="/triangle">IS Triangle ?</Link>
      </div>
      <div>
        <Link to="/hypotenuse">Hypotenuse</Link>
      </div>

      <div>
        <Link to="/quiz">Tri-Quiz</Link>
      </div>

      <div>
        <Link to="/area">Area</Link>
      </div>
      <form onSubmit={(e) => clickHandler(e)} className="horizontal">
        <label for="angle-1"></label>
        <input
          type="number"
          placeholder="Enter first side"
          id="angle-1"
          onChange={(e) => setSide1(e.target.value)}
          required
        />
        <label for="angle-2"></label>
        <input
          type="number"
          placeholder="Enter second side"
          id="angle-2"
          onChange={(e) => setSide2(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div>{msg}</div>
    </div>
  );
};

export default Hypotenuse;
