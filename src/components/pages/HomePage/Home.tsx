import React, { useEffect, useState } from "react";
import Image from "./Image";
import NavFooter from "./NavFooter";
import PokemonDetails from "./PokemonDetails";
import Summary from "./Summary";

import { getPokemonHomeDetails } from "../../../service/pokemon-data";

import { PokemonHomeDetails } from "../../../service/types";
import "./styles.css";

const Home: React.FC = () => {
  const [pokemonCode, setPokemonCode] = useState<string>("25");

  const [pokemonDetails, setPokemonDetails] = useState<PokemonHomeDetails>({
    code: "",
    name: "",
    height: 0,
    weight: 0,
    description: "",
    imageUrl: "",
    cryUrl: "",
    stats: {
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      "special attack": 0,
      "special defense": 0,
    },
    types: {
      weak_against: [],
      strong_against: [],
      types: [],
    },
  });

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const fetchedData = await getPokemonHomeDetails(pokemonCode);
        setPokemonDetails(fetchedData);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchPokemonData();
  }, [pokemonCode]);

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-1 space-x-4 items-center px-12 gap-12 -mb-2">
        <Summary
          name={pokemonDetails?.name}
          code={pokemonDetails?.code}
          about={pokemonDetails?.description}
          height={pokemonDetails?.height}
          weight={pokemonDetails?.weight}
        />
        <Image url={pokemonDetails?.imageUrl} cryUrl={pokemonDetails?.cryUrl} />
        <PokemonDetails
          pokemonStats={pokemonDetails?.stats}
          types={pokemonDetails?.types.types}
          weakAgainst={pokemonDetails?.types.weak_against}
          strongAgainst={pokemonDetails?.types.strong_against}
        />
      </div>
      <NavFooter
        code={pokemonCode}
        totalPokemon={1000}
        onNavClick={setPokemonCode}
      />
    </div>
  );
};

export default Home;
