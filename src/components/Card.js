import React from 'react';
import 'tachyons';

const Card = (props) => {
    const {name, email, username} = props; //De-structuring
    return(
        <div className='tc bg-light-blue dib br3 ma2 grow bw2 shadow-5'>
            <img alt='Robos' src={`https://robohash.org/${name}?100x100`} />
            <div>
                <h2>{name}</h2>
                <p>{username}</p>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;