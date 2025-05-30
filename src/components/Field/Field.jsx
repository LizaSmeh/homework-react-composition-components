import PropTypes from "prop-types";
import { FieldLayout } from "./FieldLayout";

export const Field = ({
  field,
  setField,
  currentPlayer,
  setCurrentPlayer,
  calculateWinner,
  isGameEnded,
  isDraw,
}) => {
  const onClickField = (i) => {
    let newField = [...field];
    if (isGameEnded || newField[i] || isDraw) {
      return;
    }
    newField[i] = currentPlayer;
    setField(newField);
    setCurrentPlayer(currentPlayer === "X" ? "0" : "X");
    calculateWinner(newField);
  };
  return <FieldLayout field={field} onClickField={onClickField} />;
};

Field.propTypes = {
  field: PropTypes.array,
  setField: PropTypes.func,
  currentPlayer: PropTypes.string,
  setCurrentPlayer: PropTypes.func,
  calculateWinner: PropTypes.func,
  isGameEnded: PropTypes.bool,
  isDraw: PropTypes.bool
};
