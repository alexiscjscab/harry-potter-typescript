import { useState } from 'react';
import { Character } from '../../types/types';
import './styles.scss';
import { FaBookDead, FaHeart } from 'react-icons/fa';
import ReactCardFlip from 'react-card-flip';

interface Props {
  char: Character;
  index: number;
}

const Card = ({ char, index }: Props) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection={index % 2 === 0 ? 'horizontal' : 'vertical'}>
      <div
        key={char.id}
        className={!isFlipped ? 'card' : ''}
        onClick={() => handleClick()}
        style={{backgroundImage: `url(${char.img})`}}
      >
        <div className='card-image'>
          <h2>{char.name}</h2>
          
          <p className={char.alive ? 'alive' : 'dead'}>
            {char.alive ? <FaHeart size={30} /> : <FaBookDead size={30} />}
          </p>
        </div>
      </div>

      <div className={isFlipped ? 'description' : ''} onClick={() => handleClick()}>
        <div className='detail'>
          <h2>{char.name}</h2>
        {
          char.nickName.length > 0 && <ul>{char.nickName.map(item => <li>{item}</li>)}</ul>
        }
        {
          char.house ? <p>House: {char.house}</p> : null
        }
        <p>Gender: {char.gender}</p>
        <p>Specie: {char.species}</p>
        <p>Status: {char.alive ? 'alive' : 'dead'}</p>
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default Card;
