import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, percentage }) => (
  <ul className={css.list}>
    <li className={css.item}>Good: {good}</li>
    <li className={css.item}>Neutral: {neutral}</li>
    <li className={css.item}>Bad: {bad}</li>
    {/* більше статистики про зібрані відгуки */}
    <li className={css.item}>Total: {total}</li>
    <li className={css.item}>Positive feedback: {percentage} %</li>
  </ul>
);
