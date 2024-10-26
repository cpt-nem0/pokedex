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
      className={`px-2 py-[1px] rounded-full items-center content-center`}
      style={{ backgroundColor: typeColor }}
      title={typeName}
    >
      <span className="text-sm" style={{ color: typeTextColor }}>
        {typeName.toUpperCase()}
      </span>
    </div>
  );
};

export default PokemonType;
