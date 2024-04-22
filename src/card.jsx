import React from 'react';
import ProfilePic from './newgojo.jpg'
import ProfilePic2 from './naruto-profile.jpg'
import ProfilePic3 from './madar-profile.jpg' 
function Card({ image, title, description, attack1, attack2, attack3 }) {
    return (
        <div className="card">
            <img className="CardImage" src={image} alt={title} />
            <h2 className='cardTitle'>{title}</h2>
            <p className='cardPara'>{description}</p>
            <div className='Details'>
                <ul className='AttacksList'>
                    <li className='Attack'>Attack 1: {attack1}</li>
                    <li className='Attack'>Attack 2: {attack2}</li>
                    <li className='Attack'>Attack 3: {attack3}</li>
                </ul>
            </div>
        </div>
    );
}

export default Card;