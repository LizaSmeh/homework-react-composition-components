import PropTypes from "prop-types";
import { InformationLayout } from "./InformationLayout";
import {useSelector} from 'react-redux';
import { selectCurrentPlayer,selecIsDraw, selectIsGameEnded} from "../../selectors";

export const Information = () => {
  const currentPlayer = useSelector(selectCurrentPlayer);
  const isDraw = useSelector(selecIsDraw);
  const isGameEnded = useSelector(selectIsGameEnded);
  
  return (
    <InformationLayout
      currentPlayer={currentPlayer}
      isDraw={isDraw}
      isGameEnded={isGameEnded}
    />
  );
};

Information.propTypes = {
  currentPlayer: PropTypes.string,
  isGameEnded: PropTypes.bool,
  isDraw: PropTypes.bool,
};
