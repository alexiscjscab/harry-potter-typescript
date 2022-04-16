export interface Character {
  id: number;
  name: string;
  nickName: Array<string>;
  species: string;
  img: string;
  gender: string;
  house: string;
  alive: boolean;
}

export type CharacterMap = Array<{
  id: number;
  name: string;
  nickName: Array<string>;
  species: string;
  img: string;
  gender: string;
  house: string;
  alive: boolean;
  alternate_names: Array<string>;
  image: string;
}>;