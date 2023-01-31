import style from './Tabla.module.css';

// TODO: Estilizar un poco esta chingadera

const Tabla = ({ items }) => {
  return (
    <table>
      <tr>
        {items.headers.map((item) => {
          return <th key={item}>{item}</th>;
        })}
      </tr>
      {items.body.map((fila) => {
        return (
          <tr key={fila[0]}>
            {fila.map((item) => {
              return <td key={item}>{item}</td>;
            })}
          </tr>
        );
      })}
    </table>
  );
};

export default Tabla;
