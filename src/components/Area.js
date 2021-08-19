import { useState } from "react";
import { Link } from "react-router-dom";

const Area = () => {
  const [base, setBase] = useState(undefined);
  const [height, setHeight] = useState(undefined);
  const [msg, setmsg] = useState("");

  const clickHandler = (e) => {
    e.preventDefault();
    let a = 0.5 * Number(base) * Number(height);
    setmsg(`Area is ${a}`);
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
          placeholder="Enter base"
          id="angle-1"
          onChange={(e) => setBase(e.target.value)}
          required
        />
        <label for="angle-2"></label>
        <input
          type="number"
          placeholder="Enter height"
          id="angle-2"
          onChange={(e) => setHeight(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div>{msg}</div>
    </div>
  );
};

export default Area;
