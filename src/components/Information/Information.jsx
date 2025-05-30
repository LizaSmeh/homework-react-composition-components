import PropTypes from "prop-types";
import { InformationLayout } from "./InformationLayout";

export const Information = ({ currentPlayer, isDraw, isGameEnded }) => {
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
  isDraw: PropTypes.bool
}