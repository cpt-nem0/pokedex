import React from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";

const SearchBar: React.FC = () => {
  return (
    <div className="flex bg-white gap-2 items-center w-[400px] p-2 pr-4 rounded-full border-2 border-gray-200 hover:border-gray-400 focus-within:border-gray-400">
      <div>
        <MagnifyingGlass className="text-xl" />
      </div>
      <div className="flex-1">
        <input
          className="outline-none w-full text-xl"
          placeholder="Try name or code (eg: pichu or 609)"
        />
      </div>
    </div>
  );
};

export default SearchBar;
