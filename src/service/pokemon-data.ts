import {
  PokemonHomeDetails,
  PokemonType,
  PokemonStats,
  PokemonStat,
  FlavorTextEntry,
  PokemonTypesInfo,
  PokeNavInfo,
} from "./types";

const BASE_POKEMON_API = "https://pokeapi.co/api/v2";
const POKEMON_SPECIES_ENDPOINT = `${BASE_POKEMON_API}/pokemon-species`;
const POKEMON_DETAILS_ENDPOINT = `${BASE_POKEMON_API}/pokemon`;
const POKEMON_TYPE_ENDPOINT = `${BASE_POKEMON_API}/type`;

const getRandomPokemonCodes = async (n: number = 10): Promise<number[]> => {
  if (n < 1) {
    throw new Error(`'n' must be a positive integer`);
  }
  const totalPokemonCount = await getTotalPokemonCount();

  if (n > totalPokemonCount) {
    throw new Error(
      `'n' must not exceed total pokemon count: ${totalPokemonCount}`
    );
  }

  const randomPokemonIds = new Set<number>();

  while (randomPokemonIds.size < n) {
    const randomPokemonId = Math.floor(Math.random() * totalPokemonCount) + 1;
    randomPokemonIds.add(randomPokemonId);
  }

  return Array.from(randomPokemonIds);
};

const getTotalPokemonCount = async (): Promise<number> => {
  const pokemonCountEndpoint = `${POKEMON_SPECIES_ENDPOINT}/?limit=0`;

  try {
    const response = await fetch(pokemonCountEndpoint);
    const data = await response.json();

    return data?.count ?? 0;
  } catch (error) {
    console.error("Error fetching Pokemon count:", error);
    throw error;
  }
};

const getPokemonHomeDetails = async (
  code: string
): Promise<PokemonHomeDetails> => {
  // query pokemon api to get information
  const pokemonDetailsResponse = await fetch(
    `${POKEMON_DETAILS_ENDPOINT}/${code}`
  );
  const pokemonDetails = await pokemonDetailsResponse.json();

  // query species api to get pokemon description
  const pokemonDesc = await getPokemonDescription(code);

  // query types api to get effectiveness info
  const pokemonTypes = pokemonDetails?.types?.map(
    (type: { slot: number; type: PokemonType }) => type.type.name
  );
  const pokemonTypeInfo = await getTypeEffectiveness(pokemonTypes);

  // extract stats from pokemon data
  const pokemonStats: PokemonStats = pokemonDetails?.stats?.reduce(
    (acc: PokemonStats, curr: PokemonStat) => ({
      ...acc,
      [curr.stat.name.replace("-", " ")]: curr.base_stat,
    }),
    {
      hp: 0,
      attack: 0,
      defense: 0,
      "special attack": 0,
      "special defense": 0,
      speed: 0,
    }
  );

  const pokemonHomeDetail: PokemonHomeDetails = {
    code: code,
    name: pokemonDetails?.name,
    height: pokemonDetails?.height,
    weight: pokemonDetails?.weight,
    cryUrl: pokemonDetails?.cries?.latest,
    imageUrl:
      pokemonDetails?.sprites?.other?.["official-artwork"]?.front_default,
    description: pokemonDesc,
    types: pokemonTypeInfo,
    stats: pokemonStats,
  };

  return pokemonHomeDetail;
};

const getPokemonDescription = async (code: string): Promise<string> => {
  const pokemonDescriptionResponse = await fetch(
    `${POKEMON_SPECIES_ENDPOINT}/${code}`
  );
  const data = await pokemonDescriptionResponse.json();

  const descriptions = data?.flavor_text_entries
    ?.filter((entry: FlavorTextEntry) => entry.language.name == "en")
    ?.map((entry: FlavorTextEntry) => entry.flavor_text)
    ?.map((text: string) => text.replace(/\f/g, " "));

  return descriptions?.[0] ?? "No description available";
};

const getTypeEffectiveness = async (
  types: string[]
): Promise<PokemonTypesInfo> => {
  const typeInfo: PokemonTypesInfo = {
    types: types,
    weak_against: [],
    strong_against: [],
  };

  await Promise.all(
    types.map(async (type: string) => {
      const typeResponse = await fetch(`${POKEMON_TYPE_ENDPOINT}/${type}`);
      const data = await typeResponse.json();

      // Accumulate results
      typeInfo.weak_against.push(
        ...(data?.damage_relations?.double_damage_from?.map(
          (entry: PokemonType) => entry.name
        ) || [])
      );

      typeInfo.strong_against.push(
        ...(data?.damage_relations?.double_damage_to?.map(
          (entry: PokemonType) => entry.name
        ) || [])
      );
    })
  );

  return typeInfo;
};

const getPokemonNavInfo = async (code: string): Promise<PokeNavInfo> => {
  const pokemonDetails = await fetch(`${POKEMON_DETAILS_ENDPOINT}/${code}`);
  const data = await pokemonDetails.json();

  return { code: code, imageUrl: data?.sprites?.front_default ?? "" };
};

export {
  getRandomPokemonCodes,
  getPokemonHomeDetails,
  getPokemonNavInfo,
  getTotalPokemonCount,
};
