import React, { useEffect, useState } from "react";
import PokeCard from "./PokeCard";
import SearchBar from "../../common/SearchBar";
import Pagination from "../../common/Pagination";
import { PokemonCardData } from "../../../service/types";
import {
  getPokemonGridData,
  getTotalPokemonCount,
} from "../../../service/pokemon-data";
import AnimatedLoader from "../../common/Loading";

const Pokedex: React.FC = () => {
  // const [gridElementCount, setGridElementCount] = useState<number>(24);
  const gridElementCount = 24;
  const [totalPokemonCount, setTotalPokemonCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pokemonsInfo, setPokemonsInfo] = useState<PokemonCardData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPokemons = async () => {
      setIsLoading(true);
      try {
        const data = await getPokemonGridData(currentPage, gridElementCount);
        console.log(data);
        setPokemonsInfo(data);

        const totalPokemonCount = await getTotalPokemonCount();
        setTotalPokemonCount(totalPokemonCount);
        console.log(totalPokemonCount);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemons();
  }, [gridElementCount, currentPage]);

  if (isLoading) {
    return <AnimatedLoader />;
  }

  return (
    <div className="w-full h-auto">
      <div className="flex w-full h-12  items-center justify-end px-14 ">
        <SearchBar />
      </div>
      <div className="p-12">
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-y-20 justify-items-center">
          {pokemonsInfo.map((pokemon, idx) => (
            <PokeCard
              key={idx}
              image={
                pokemon.gifUrl ||
                pokemon.imageUrl ||
                "https://upload.wikimedia.org/wikipedia/commons/3/39/Pokeball.PNG"
              }
              code={pokemon.code}
              name={pokemon.name}
              types={pokemon.types ?? []}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center p-8">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(totalPokemonCount / gridElementCount)}
          onPageClick={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Pokedex;
