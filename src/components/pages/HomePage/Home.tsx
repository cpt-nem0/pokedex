import React from "react";
import Summary from "./Summary";
import Image from "./Image";
import PokemonDetails from "./PokemonDetails";
import NavFooter from "./NavFooter";

import "./styles.css";

const Home: React.FC = () => {
  const imageUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/609.png";

  const pokemonCode = "609";
  const pokemonName = "Chandelure";
  const pokemonAbout =
    "Do est voluptate ut veniam velit. Commodo eu enim occaecat aliqua irure sunt eiusmod ut deserunt et. Eu qui et reprehenderit deserunt occaecat. Dolor quis consequat enim aliqua quis in ut consectetur. Fugiat occaecat et adipisicing adipisicing duis ullamco enim sunt veniam nisi. Minim minim duis tempor qui pariatur eiusmod nisi laboris consequat nulla dolore exercitation.";

  const pokemonStatsData = {
    hp: 78,
    attack: 84,
    defense: 78,
    speed: 109,
    "sp. attack": 85,
    "sp. defense": 100,
  };

  const weakAgainst = ["water", "electric", "fairy"];
  const strongAgainst = ["poison", "rock", "grass"];
  const type = ["fire", "poison"];

  return (
    <div className="flex flex-col">
      <div className="flex flex-1 space-x-4 items-center px-12 gap-12 -mb-2">
        <Summary name={pokemonName} code={pokemonCode} about={pokemonAbout} />
        <Image url={imageUrl} />
        <PokemonDetails
          pokemonStats={pokemonStatsData}
          weakAgainst={weakAgainst}
          strongAgainst={strongAgainst}
          type={type}
        />
      </div>
      <NavFooter />
    </div>
  );
};

export default Home;
