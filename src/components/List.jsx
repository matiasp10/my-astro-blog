import style from './List.module.css';

function List({ items, type = 'ul' }) {
  if (type === 'ul') {
    return (
      <ul className={style.unorded}>
        {items.map((item) => {
          return (
            <li key={item} className={style.listItem}>
              {item}
            </li>
          );
        })}
      </ul>
    );
  } else if (type === 'ol') {
    return (
      <ol className={style.unorded}>
        {items.map((item) => {
          return (
            <li key={item} className={style.listItem}>
              {item}
            </li>
          );
        })}
      </ol>
    );
  }
}

export default List;
