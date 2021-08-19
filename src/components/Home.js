import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="abc">
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
    </div>
  );
};

export default Home;
