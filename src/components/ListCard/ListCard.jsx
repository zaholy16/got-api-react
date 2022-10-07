import { CharacterCard } from '../Character/Character';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ListCards = () => {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://api.got.show/api/show/characters')
      .then(response => {
        setCharacters(response.data);
      })
      .catch(error => {
        console.log(error)
      })
  },[]);
  
  return (
    <>
      <div className='container-cards'>
        {
          characters.map(character => {
            return <CharacterCard key={character.id} name={character.name} src={character.image} status={character.alive} religion={character.religion} culture={character.culture} gender={character.gender} actor={character.actor} />
          })
        }
      </div>
    </>
  );
}

export { ListCards }
