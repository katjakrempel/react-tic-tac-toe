function Square({ value, onSquareClick, highlight }) {
  return (
    <button
      className={highlight ? "winning-square" : "square"}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default Square;
