import PropTypes from "prop-types";
import styles from "./information.module.css";

export const InformationLayout = ({ currentPlayer, isDraw, isGameEnded }) => {
  return (
    <div className={styles.information}>
      {isDraw ? "Ничья" : ""}
      {isGameEnded ? `Победа: ${currentPlayer}` : ""}
      {!isDraw && !isGameEnded ? `Ходит: ${currentPlayer}` : ""}
    </div>
  );
};

InformationLayout.propTypes = {
  currentPlayer: PropTypes.string,
  isGameEnded: PropTypes.bool,
  isDraw: PropTypes.bool,
};
