import { GameLayout } from "./GameLayout";
import { Information } from "../Information/Information";
import { Field } from "../Field/Field.jsx";
import { useState } from "react";

const WIN_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(["", "", "", "", "", "", "", "", ""]);

  const calculateWinner = (squares) => {
    for (let i = 0; i < WIN_PATTERNS.length; i++) {
      const [a, b, c] = WIN_PATTERNS[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        setIsGameEnded(true);
        return setCurrentPlayer(squares[a]);
      }
    }
    if (!squares.includes("")) {
      setIsDraw(true);
    }
  };

  return (
    <>
      <Information
        currentPlayer={currentPlayer}
        isDraw={isDraw}
        isGameEnded={isGameEnded}
      />
      <Field
        field={field}
        currentPlayer={currentPlayer}
        setField={setField}
        setCurrentPlayer={setCurrentPlayer}
        calculateWinner={calculateWinner}
        isDraw={isDraw}
        isGameEnded={isGameEnded}
      />
      <GameLayout
        setField={setField}
        setIsDraw={setIsDraw}
        setIsGameEnded={setIsGameEnded}
        setCurrentPlayer={setCurrentPlayer}
      />
    </>
  );
};