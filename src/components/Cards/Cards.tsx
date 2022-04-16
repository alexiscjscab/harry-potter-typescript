import React from 'react';
import { Character } from '../../types/types';
import Card from '../Card/Card';
import './styles.scss'

interface Props {
  character: Character[];
}

const Cards = ({ character }: Props) => {
  return (
    <div className='cards'>
      {character.map((item, index: number) => {
        return <Card char={item} index={index}/>;
      })}
    </div>
  );
};

export default Cards;
