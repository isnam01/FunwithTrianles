import { useState } from "react";
import { Link } from "react-router-dom";

const Triangle = () => {
  const [angle1, setAngle1] = useState(undefined);
  const [angle2, setAngle2] = useState(undefined);
  const [angle3, setAngle3] = useState(undefined);
  const [msg, setmsg] = useState("");

  const clickHandler = (e) => {
    e.preventDefault();
    let sum = Number(angle1) + Number(angle2) + Number(angle3);
    console.log(sum);
    if (
      sum === 180 &&
      Number(angle1) > 0 &&
      Number(angle2) > 0 &&
      Number(angle3) > 0
    ) {
      setmsg("Yes");
    } else {
      setmsg("No");
    }
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
          placeholder="Enter first triangle"
          id="angle-1"
          onChange={(e) => setAngle1(e.target.value)}
          required
        />
        <label for="angle-2"></label>
        <input
          type="number"
          placeholder="Enter second triangle"
          id="angle-2"
          onChange={(e) => setAngle2(e.target.value)}
          required
        />
        <label for="angle-3"></label>
        <input
          type="number"
          placeholder="Enter third triangle"
          id="angle-3"
          onChange={(e) => setAngle3(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div>{msg}</div>
    </div>
  );
};

export default Triangle;
