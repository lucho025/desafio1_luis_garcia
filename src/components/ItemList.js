import React from 'react';
import Item from './Item';

function ItemList( { products }) {

    return (
        <div className="itemList">
            { products.map( product => <Item id={product.id} 
            name={product.nombre} image={product.imagen} />)
            }
        </div>
    )
}

export default ItemList