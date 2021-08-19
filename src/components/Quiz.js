import { useState } from "react";
import { Link } from "react-router-dom";

const Quiz = () => {
  const [firstans, setFirstAns] = useState(undefined);
  const [secondans, setSecondAns] = useState(undefined);
  const [thirdans, setThirdAns] = useState(undefined);
  const [fourthans, setFourthAns] = useState(undefined);
  const [msg, setMsg] = useState("");

  const clickHandler = (e) => {
    e.preventDefault();
    let counter = 0;
    if (firstans === "Right") {
      counter = +1;
    }
    if (secondans === "Equilateral") {
      counter += 1;
    }
    if (thirdans === "180") {
      counter += 1;
    }
    if (fourthans === "Acute") {
      counter += 1;
    }
    setMsg(`Your score is ${counter}`);
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
      <form onSubmit={(e) => clickHandler(e)}>
        <p>Which type of triangle has one 90 degree angle ?</p>
        <input
          type="radio"
          value="Acute"
          id="question1"
          name="question1"
          onChange={(e) => setFirstAns(e.target.value)}
          required
        />
        <label for="question1">Acute</label>
        <input
          type="radio"
          value="Right"
          id="question1"
          name="question1"
          onChange={(e) => setFirstAns(e.target.value)}
        />
        <label for="question1">Right</label>
        <input
          type="radio"
          value="Obtuse"
          id="question1"
          name="question1"
          onChange={(e) => setFirstAns(e.target.value)}
        />
        <label for="question1">Obtuse</label>

        <p>A triangle where all sides are congruent is called </p>
        <input
          type="radio"
          value="Scalene"
          id="question2"
          name="question2"
          onChange={(e) => setSecondAns(e.target.value)}
          required
        />
        <label for="question2">Scalene</label>
        <input
          type="radio"
          value="Isosceles"
          id="question2"
          name="question2"
          onChange={(e) => setSecondAns(e.target.value)}
        />
        <label for="question2">Isosceles</label>
        <input
          type="radio"
          value="Equilateral"
          id="question2"
          name="question2"
          onChange={(e) => setSecondAns(e.target.value)}
        />
        <label for="question2">Equilateral</label>

        <p>All 3 interior angles of a triangle add up to</p>
        <input
          type="radio"
          value="90"
          id="question3"
          name="question3"
          onChange={(e) => setThirdAns(e.target.value)}
          required
        />
        <label for="question3">90</label>
        <input
          type="radio"
          value="360"
          id="question3"
          name="question3"
          onChange={(e) => setThirdAns(e.target.value)}
        />
        <label for="question3">360</label>
        <input
          type="radio"
          value="180"
          id="question3"
          name="question3"
          onChange={(e) => setThirdAns(e.target.value)}
        />
        <label for="question3">180</label>

        <p>
          A ________ triangle is one where all 3 angles measure less than 90
          degrees.
        </p>
        <input
          type="radio"
          value="Acute"
          id="question4"
          name="question4"
          onChange={(e) => setFourthAns(e.target.value)}
          required
        />
        <label for="question4">Acute</label>
        <input
          type="radio"
          value="Right"
          id="question4"
          name="question4"
          onChange={(e) => setFourthAns(e.target.value)}
        />
        <label for="question4">Right</label>
        <input
          type="radio"
          value="Obtuse"
          id="question4"
          name="question4"
          onChange={(e) => setFourthAns(e.target.value)}
        />
        <label for="question4">Obtuse</label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div>{msg}</div>
    </div>
  );
};

export default Quiz;
