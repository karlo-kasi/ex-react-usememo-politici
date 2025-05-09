//i due modi per importare React.memo
//import React from 'react';
import { memo } from 'react';

const Card = memo(({ name, position, biography, image }) => {
    console.log(`Card`)
    return (
        <div className="col-4 mt-4">
            <div className="card mb-3">
                <img src={image} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{position}</p>
                    <p className="card-text">{biography}</p>
                </div>
            </div>
        </div>
    )
})

export default Card