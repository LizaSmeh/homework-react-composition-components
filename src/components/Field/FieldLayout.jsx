import PropTypes from 'prop-types';
import styles from "./field.module.css";

export const FieldLayout = ({ field, onClickField }) => {
  return (
    <>
      <div className={styles.container}>
        {field.map((item, index) => (
          <button
            key={index}
            className={styles.btnField}
            onClick={() => onClickField(index)}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
};

FieldLayout.propTypes = {
    field: PropTypes.array,
    onClickField: PropTypes.func
}