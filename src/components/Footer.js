import React from 'react'

const Footer = ({creador,fecha}) => {

    return (
        <div>
            <p>Realizada por {creador}</p>
            <p>{fecha}</p>
        </div>
    )
}

export default Footer
