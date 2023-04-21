import React from 'react'
import ListItem from './ListItem'
import './CharacterList.css'


const CharacterList = ({characters, onCharacterClick}) => {

    const allCharacters = characters.map((character, index) => {

        return <ListItem character={character} key={index} onCharacterClick={onCharacterClick} />
      
    })

  return (
    <div>
      <ul className='list-container'>{allCharacters}
      </ul>
    </div>
  )
}

export default CharacterList