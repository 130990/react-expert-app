import React from 'react'
import '../index.css';

export const GiftGridItem = ({title, url }) => {
    return (
        <div className="card animate__animated animate__fadein">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
