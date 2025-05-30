import PropTypes from "prop-types";
import styles from "./game.module.css";

export const GameLayout = ({
  setField,
  setIsDraw,
  setIsGameEnded,
  setCurrentPlayer,
}) => {
  const onClear = () => {
    setCurrentPlayer("X");
    setIsGameEnded(false);
    setIsDraw(false);
    setField(["", "", "", "", "", "", "", "", ""]);
  };

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
