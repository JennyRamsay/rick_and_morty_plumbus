import React from 'react';
import './CharacterDetail.css';

const CharacterDetail = ({character}) => {


  return (
    <div className='char-detail'>
        <div className='char-info'>CharacterDetail</div>
        <p>{character.name}</p>
        <img src={character.image} alt=""></img>
        <p>Status: {character.status}</p>
        <p>Gender: {character.gender}</p>
        <p>Species: {character.species}</p>
        <p>Origin: {character.origin.name}</p>
        <p>Location: {character.location.name}</p>

    </div>
  )
}

export default CharacterDetail