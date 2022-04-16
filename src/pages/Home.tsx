import { useState, useEffect } from 'react';
import Cards from '../components/Cards/Cards';
import Search from '../components/Search/Search';
import { Character, CharacterMap } from '../types/types';
import './homeStyles.scss'


const Home = (): JSX.Element => {
  const [characterList, setCharacterList] = useState<Character[]>([]);
  const [originalList, setOriginalList] = useState<Character[]>([]);
  useEffect(() => {
    const fetchCharacterApi = async (): Promise<CharacterMap> => {
      return fetch('https://hp-api.herokuapp.com/api/characters').then(
        (response) => response.json()
      );
    };
    const characterMap = (apiResponse: CharacterMap): Character[] => {
      return apiResponse.map((character, index: number) => {
        return {
          id: ++index,
          name: character.name,
          nickName: character.alternate_names,
          species: character.species,
          img: character.image,
          gender: character.gender,
          house: character.house,
          alive: character.alive,
        };
      });
    };
    fetchCharacterApi().then((apiCharacter) => {
      const character = characterMap(apiCharacter);
      setCharacterList(character);
      setOriginalList(character);
    });
  }, []);

  console.log(characterList);
  console.log(originalList);

  const searchName = (name: string) => {
    const filteredList = originalList.filter((character) => {
      return character.name.toLowerCase().includes(name.toLowerCase());
    });
    setCharacterList(filteredList);
  }


  return (
    <div className='home'>
      <Search search={searchName}/>
      <Cards character={characterList} />
    </div>
  );
};

export default Home;
