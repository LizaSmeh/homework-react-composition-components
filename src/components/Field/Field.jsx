import PropTypes from "prop-types";
import { FieldLayout } from "./FieldLayout";
import {useSelector} from 'react-redux'
import { selectField  } from "../../selectors"

export const Field = ({ onClickField }) => {
  const field  = useSelector(selectField)

  return <FieldLayout field={field} onClickField={onClickField} />;
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
