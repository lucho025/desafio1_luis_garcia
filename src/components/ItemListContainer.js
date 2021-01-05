import React from 'react'
import ItemCount from './ItemCount'


const ItemListContainer = ({greeting}) => {

    return (
        <div>
            <ItemCount stock={5} initial={1}/>     
            <p>{greeting}</p>
        </div>
    )
}

export default ItemListContainer

