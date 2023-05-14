import React from 'react';
import Card from './Card';

const CardList = ({Robots}) => {

    // if(true){
    //     throw new Error('Something is bad!!');
    // }

    return(
        <div>
            {
                Robots.map((user, i) => {
                return (
                <Card 
                key={i} 
                id = {Robots[i].id} 
                name = {Robots[i].name} 
                username = {Robots[i].username} 
                email = {Robots[i].email}  
                />);
                })
            }
      </div> 
    );
}

export default CardList;