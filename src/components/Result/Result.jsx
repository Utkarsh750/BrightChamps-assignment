import React, { useEffect, useState } from "react";
import "./Result.scss";
const Result = ({ totalQuestions, result, onTryAgain }) => {
  const [name, setName] = useState("");
  const [highScores, setHighScores] = useState([]);
  const [showScores, setShowScores] = useState(false);

  useEffect(() => {
    setHighScores(JSON.parse(localStorage.getItem("highScores")) || []);
  }, []);
  const handleSave = () => {
    const score = {
      name,
      score: result.score,
    };

    const newHighScores = [...highScores, score].sort(
      (a, b) => b.score - a.score
    );

    setHighScores(newHighScores);
    setShowScores(true);
    localStorage.setItem("highScores", JSON.stringify(newHighScores));
  };

  const handleTryAgain = () => {
    setShowScores(false);
    setHighScores([]);
    onTryAgain();
  };
  return (
    <div className="result">
      <h3>Result</h3>
      <p>
        Total Questions: <span>{totalQuestions}</span>
      </p>
      <p>
        Total Score: <span>{result.score}</span>
      </p>
      <p>
        Correct Answers: <span>{result.correctAnswers}</span>
      </p>
      <p>
        Wrong Answers: <span>{result.wrongAnswers}</span>
      </p>
      <button onClick={handleTryAgain}>Try again</button>
      {!showScores ? (
        <>
          <h3>
            Enter Your name below down <br /> to save your Score
          </h3>

          <input value={name} onChange={(evt) => setName(evt.target.value)} />
          <br />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Ranking</th>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>

            <tbody>
              {highScores.map((highScore, i) => {
                return (
                  <tr key={`${highScore.score}${highScore.name}${i}`}>
                    <td>{i + 1}</td>
                    <td>{highScore.name}</td>
                    <td>{highScore.score}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Result;
