import React from 'react'
import './ListItem.css'

const ListItem = ({character, onCharacterClick}) => {

    const handleClick = function() {
        onCharacterClick(character);
    }

  return (
    <div className='list-item'>
        <p className='char-name'>{character.name}</p>
        <img className='char-image' src={character.image} alt=""></img>

        <button onClick={handleClick} className="detail">Plumbus</button>
    </div>
  )
}

export default ListItem