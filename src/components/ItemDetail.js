import React from 'react'

const ItemDetail = ({item}) => {

    return (
        <div>
            <br></br>
            <h3 align="center">{item.title} - ${item.price}</h3>
            <p align="center"><img src={item.pictures[0]} alt="carousel"/></p>
            <p>{item.description}</p>
            <p>
                <strong>GARANTIA :</strong><br/>
                {item.warranty}
            </p>
            <br></br>
        </div>
    )
}

export default ItemDetail