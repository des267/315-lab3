/**
 * card.component.jsx
 */
import react from "react";
import './card.styles.css';

const Card = ({ monster }) => {
    const {id, name, email, phone} = monster;

    return (
        <div className='card-container'>
            <img src={`https://robohash.org/${id}?set=set2&size =15x15`} alt="monster"/>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
}

export default Card;