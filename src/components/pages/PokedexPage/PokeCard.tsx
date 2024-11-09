import React from "react";
import PokemonType from "../../common/PokemonType";

interface PokeCardProps {
  image: string;
  code: string;
  name: string;
  types: string[];
}

const PokeCard: React.FC<PokeCardProps> = ({ image, code, name, types }) => {
  return (
    <div className="w-fit bg-white flex flex-col gap-2 px-10 py-8 shadow-md hover:shadow-xl relative hover:-translate-y-1 transition-all duration-200 rounded-md hover:cursor-pointer">
      <div className="flex-1 flex items-center justify-center">
        <img src={image} alt={name} className="w-32 h-32 object-contain" />
      </div>
      <div className="flex flex-col items-center content-center">
        <span className="text-gray-600">{`#${code}`}</span>
        <h2 className="text-3xl capitalize">{name}</h2>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl">Type</h3>
        <div className="flex gap-2">
          {types.map((type, idx) => (
            <PokemonType key={idx} typeName={type} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
