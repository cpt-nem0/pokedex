import React from "react";

import {
  getTypeColor,
  getBestTextColor,
} from "../../utils/pokemon-type-color.ts";

interface PokemonTypeProps {
  typeName: string;
}

const PokemonType: React.FC<PokemonTypeProps> = ({ typeName }) => {
  const typeColor = getTypeColor(typeName.toLowerCase());
  const typeTextColor = getBestTextColor(typeColor);

  return (
    <div
      className={`px-2 py-[1px] rounded-full items-center content-center w-fit`}
      style={{ backgroundColor: typeColor }}
      title={typeName.toUpperCase()}
    >
      <span className="text-sm uppercase" style={{ color: typeTextColor }}>
        {typeName}
      </span>
    </div>
  );
};

export default PokemonType;
