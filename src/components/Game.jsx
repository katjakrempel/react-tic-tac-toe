import { useState } from "react";
import Board from "./Board";

function Game() {
  const [history, setHistory] = useState([]);

  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <ol>moves history</ol>
      </div>
    </div>
  );
}

export default Game;

