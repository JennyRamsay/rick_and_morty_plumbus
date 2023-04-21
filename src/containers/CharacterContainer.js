import React, {useState, useEffect} from 'react'
import CharacterList from '../components/CharacterList';
import CharacterDetail from '../components/CharacterDetail';
import PageSelector from '../components/PageSelector';
import "./CharacterContainer.css";

const CharacterContainer = ({pages}) => {

    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    useEffect(() => {
      getCharacters(pages[0].url);
    }, [pages])

    const getCharacters = url => {
        fetch(url)
        .then (res=> res.json())
        .then(characters => setCharacters(characters.results))

    }

    const onCharacterClick = (character) => {
        setSelectedCharacter(character);
      
    }

    const handleSelectChange = event => {
        getCharacters(event.target.value);
    }

  return (
    <>
    <div>
    <div className='view-box'>
        {selectedCharacter ? <CharacterDetail character={selectedCharacter}/> : null }
    </div>
    <div className='outer-container'>
    <PageSelector handleSelectChange={handleSelectChange} pages={pages}/>
    </div>
    <div className='h1-list'>
    <CharacterList characters={characters} onCharacterClick={onCharacterClick}/>
    </div>
    </div>
    </>
  )
}

export default CharacterContainer
