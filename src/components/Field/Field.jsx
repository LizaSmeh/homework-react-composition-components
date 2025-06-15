import PropTypes from "prop-types";
import { FieldLayout } from "./FieldLayout";
import { store } from "../../redux/store";

export const Field = ({ onClickField }) => {
  const state = store.getState();

  return <FieldLayout field={state.field} onClickField={onClickField} />;
};

Field.propTypes = {
  field: PropTypes.array,
  setField: PropTypes.func,
  currentPlayer: PropTypes.string,
  setCurrentPlayer: PropTypes.func,
  calculateWinner: PropTypes.func,
  isGameEnded: PropTypes.bool,
  isDraw: PropTypes.bool,
};
