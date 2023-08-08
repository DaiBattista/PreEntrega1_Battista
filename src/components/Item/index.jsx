import style from './style.module.css'

const Item = ({nombre, deleteItem}) => {
    return (
        <div className={style ['container'] }>
            <p>{nombre}</p>
            <button onClick={() => deleteItem(nombre)}>Borrar</button>
        </div>
    );
}

export default Item;