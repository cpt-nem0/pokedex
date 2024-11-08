interface PokemonType {
  name: string;
  url: string;
}

interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface Language {
  name: string;
  url: string;
}

interface FlavorTextEntry {
  flavor_text: string;
  language: Language;
  version: {
    name: string;
    url: string;
  };
}

interface PokemonTypesInfo {
  types: string[];
  weak_against: string[];
  strong_against: string[];
}

interface PokeNavInfo {
  code: string;
  imageUrl: string;
}

interface PokemonStats {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  "special attack": number;
  "special defense": number;
}

interface PokemonHomeDetails {
  code: string;
  name: string;
  height: number;
  weight: number;
  imageUrl: string;
  cryUrl: string;
  description: string;
  types: PokemonTypesInfo;
  stats: PokemonStats;
}

export {
  PokemonHomeDetails,
  PokemonType,
  PokemonStats,
  PokemonStat,
  FlavorTextEntry,
  PokemonTypesInfo,
  PokeNavInfo,
};
