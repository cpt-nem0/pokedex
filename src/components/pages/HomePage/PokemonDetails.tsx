import React from "react";
import ProgressBar from "../../common/ProgressBar";
import PokemonType from "../../common/PokemonType";
import { PokemonStats } from "../../../service/types";

interface PokemonDetailsProps {
  pokemonStats: PokemonStats;
  weakAgainst: string[];
  strongAgainst: string[];
  types: string[];
}

interface AttributesProps {
  label: string;
  types: string[];
}

const Attributes: React.FC<AttributesProps> = ({ label, types }) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl uppercase">{label}</h2>
      <div className="flex gap-4">
        {types.map((type, idx) => (
          <PokemonType key={idx} typeName={type} />
        ))}
      </div>
    </div>
  );
};

const PokemonDetails: React.FC<PokemonDetailsProps> = ({
  pokemonStats,
  weakAgainst,
  strongAgainst,
  types,
}) => {
  return (
    <div className="flex-1 flex flex-col gap-8 pl-8">
      <div className="flex flex-col gap-6">
        <Attributes label="Type" types={types} />
        <Attributes label="Weak Against" types={weakAgainst} />
        <Attributes label="Strong Against" types={strongAgainst} />
      </div>
      <div className="flex flex-col gap-2.5 text-sm">
        {Object.entries(pokemonStats).map(([stat, value]) => (
          <div key={stat}>
            <p className="uppercase">{`${stat}: ${value}`}</p>
            <ProgressBar progress={value} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonDetails;
