import style from './Comentario.module.css';
// TODO: hacer que se puedan ver los saltos de linea
const Comentario = ({ text }) => {
  return (
    <div className={style.container}>
      <p>{text}</p>
    </div>
  );
};

export default Comentario;
