import style from './Subtitle.module.css';

const Subtitle = ({ content }) => {
  return <p className={style.subtitle}>{content} </p>;
};

export default Subtitle;
