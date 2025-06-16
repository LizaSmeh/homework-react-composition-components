import { GameLayout } from "./GameLayout";
import { Information } from "../Information/Information";
import { Field } from "../Field/Field.jsx";
import { store } from "../../redux/store";
import {useSelector, useDispatch} from 'react-redux';
import { selectField, selectCurrentPlayer, selectIsGameEnded } from "../../selectors"


export const Game = () => {
  const dispatch = useDispatch();

  const field = useSelector(selectField);
  const currentPlayer = useSelector(selectCurrentPlayer);
  const isGameEnded = useSelector(selectIsGameEnded);


  
  const onClickField = (i) => {
    if (field[i] === "" && !isGameEnded) {
      const newField = [...field];
      newField[i] = currentPlayer;
      store.dispatch({ type: "SET_FIELD", payload: newField });

      if (calculateWinner(newField)) {
        dispatch({ type: "SET_GAME_ENDED", payload: true });
      } else if (newField.every((i) => i !== "")) {
        dispatch({ type: "SET_DRAW", payload: true });
      } else {
        dispatch({
          type: "SET_CURRENT_PLAYER",
          payload: currentPlayer === "X" ? "O" : "X",
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
    dispatch({ type: "RESTART_GAME" });
  };

  return (
    <>
      <Information />
      <Field onClickField={onClickField} />
      <GameLayout onClear={onClear} />
    </>
  );
};
