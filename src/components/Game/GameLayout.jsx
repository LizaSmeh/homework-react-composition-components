import PropTypes from "prop-types";
import styles from "./game.module.css";

export const GameLayout = ({
  onClear
}) => {
  

  return (
    <>
      <button className={styles.starOver} onClick={onClear}>
        «Начать заново»
      </button>
    </>
  );
};

GameLayout.propTypes = {
  setField: PropTypes.func,
  setIsDraw: PropTypes.func,
  setIsGameEnded: PropTypes.func,
  setCurrentPlayer: PropTypes.func,
};
