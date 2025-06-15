import { GameLayout } from "./GameLayout";
import { Information } from "../Information/Information";
import { Field } from "../Field/Field.jsx";
import { useState, useEffect } from "react";
import { store } from "../../redux/store";

export const Game = () => {
  const [, forcedUpdate] = useState(0);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => forcedUpdate((i) => i + 1));
    return () => unsubscribe();
  }, []);

  const state = store.getState();

  const onClickField = (i) => {
    if (state.field[i] === "" && !state.isGameEnded) {
      const newField = [...state.field];
      newField[i] = state.currentPlayer;
      store.dispatch({ type: "SET_FIELD", payload: newField });

      if (calculateWinner(newField)) {
        store.dispatch({ type: "SET_GAME_ENDED", payload: true });
      } else if (newField.every((i) => i !== "")) {
        store.dispatch({ type: "SET_DRAW", payload: true });
      } else {
        store.dispatch({
          type: "SET_CURRENT_PLAYER",
          payload: state.currentPlayer === "X" ? "O" : "X",
        });
      }
    }
  };

  const calculateWinner = (squares) => {
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
    return WIN_PATTERNS.some((pattern) => {
      const [a, b, c] = pattern;

      return (
        squares[a] && squares[a] === squares[b] && squares[a] === squares[c]
      );
    });
  };

  const onClear = () => {
    store.dispatch({ type: "RESTART_GAME" });
  };

  return (
    <>
      <Information />
      <Field onClickField={onClickField} />
      <GameLayout onClear={onClear} />
    </>
  );
};
