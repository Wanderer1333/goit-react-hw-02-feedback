import css from './Buttons.module.css';

export const Buttons = ({ onClickButton, keys }) => {
  return (
    <div className={css.buttons}>
      {keys.map(key => {
        return (
          <button
            key={key}
            onClick={() => onClickButton(key)}
            className={css.btn}
            type="button"
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};
