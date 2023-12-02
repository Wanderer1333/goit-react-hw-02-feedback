import css from './Section.module.css';

export const Section = ({ title, children }) => (
  <section>
    <h2 className={css.title}>{title}</h2>
    {children}
  </section>
);
