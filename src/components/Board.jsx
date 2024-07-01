import Square from "./Square";

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || winner) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return { winner: squares[a], winningLine: lines[i] };
      }
    }
    return { winner: null };
  }

  const { winner, winningLine } = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square
          value={squares[0]}
          onSquareClick={() => handleClick(0)}
          highlight={winner ? winningLine.includes(0) : false}
        />
        <Square
          value={squares[1]}
          onSquareClick={() => handleClick(1)}
          highlight={winner ? winningLine.includes(1) : false}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => handleClick(2)}
          highlight={winner ? winningLine.includes(2) : false}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          onSquareClick={() => handleClick(3)}
          highlight={winner ? winningLine.includes(3) : false}
        />
        <Square
          value={squares[4]}
          onSquareClick={() => handleClick(4)}
          highlight={winner ? winningLine.includes(4) : false}
        />
        <Square
          value={squares[5]}
          onSquareClick={() => handleClick(5)}
          highlight={winner ? winningLine.includes(5) : false}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onSquareClick={() => handleClick(6)}
          highlight={winner ? winningLine.includes(6) : false}
        />
        <Square
          value={squares[7]}
          onSquareClick={() => handleClick(7)}
          highlight={winner ? winningLine.includes(7) : false}
        />
        <Square
          value={squares[8]}
          onSquareClick={() => handleClick(8)}
          highlight={winner ? winningLine.includes(8) : false}
        />
      </div>
    </>
  );
}

export default Board;
