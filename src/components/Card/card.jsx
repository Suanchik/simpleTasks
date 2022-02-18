import React from 'react';
import './card.scss';

function Card({ children, close, deleteOnecard }) {

    const deleteOnelist = () => {
        deleteOnecard()
    }

    return (
        <div className="card">
            <div>{children} </div>
            {close ? <img onClick={deleteOnelist} src={close} alt="close" /> : ''}
        </div>
    )
}

export default Card;
