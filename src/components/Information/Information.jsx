import PropTypes from "prop-types";
import { InformationLayout } from "./InformationLayout";
import { store } from "../../redux/store";

export const Information = () => {
  const state = store.getState();
  return (
    <InformationLayout
      currentPlayer={state.currentPlayer}
      isDraw={state.isDraw}
      isGameEnded={state.isGameEnded}
    />
  );
};

Information.propTypes = {
  currentPlayer: PropTypes.string,
  isGameEnded: PropTypes.bool,
  isDraw: PropTypes.bool,
};
