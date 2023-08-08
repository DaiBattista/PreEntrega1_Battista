import React, { useState } from 'react';
import Item from '../Item';
import style from './style.module.css'

const ItemListContainer = () => {
    const [carritoCompras, setCarritoCompras] = useState([])
    const [input, setInput] = useState('')

    const addItem = () => {
        if (input !== '') {
            setCarritoCompras([...carritoCompras, input])
            setInput('')
        }
    }

    const deleteItem = (nombre) => {
        const modificarCompras = carritoCompras.filter(pr => pr !== nombre)
        setCarritoCompras(modificarCompras)
    }

    return (
        <><h1>Bienvenidos a la tienda</h1>
            <div className={style['container']}>
                <input value={input} onChange={(event) => setInput(event.target.value)} />
                <button onClick={addItem}>Guardar</button>
                {
                    carritoCompras.length > 0 ? (
                        <>
                            {carritoCompras.map(producto => <Item nombre={producto} deleteItem={deleteItem} />)}
                        </>
                    ) : (
                        <p>No hay nada en la lista</p>
                    )
                }
            </div>
        </>
    );
}

export default ItemListContainer;