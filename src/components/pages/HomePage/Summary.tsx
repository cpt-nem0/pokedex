import React from "react";

interface SummaryProp {
  code: string;
  name: string;
  about: string;
}

const Summary: React.FC<SummaryProp> = ({ code, name, about }) => {
  return (
    <div className="flex-1 flex flex-col gap-4 container w-full pr-8 pl-4">
      <div>
        <span className="text-gray-600 text-xl">{`#${code}`}</span>
        <h1 className="text-5xl font-normal">{name.toUpperCase()}</h1>
      </div>
      <p className="text-lg text-[#575757]">{about}</p>
    </div>
  );
};

export default Summary;
