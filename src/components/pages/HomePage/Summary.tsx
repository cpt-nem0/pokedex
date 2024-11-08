import React from "react";

interface SummaryProp {
  code: string;
  name: string;
  about: string;
  height: number;
  weight: number;
}

const Summary: React.FC<SummaryProp> = ({
  code,
  name,
  about,
  height,
  weight,
}) => {
  return (
    <div className="flex-1 flex flex-col gap-4 container w-full pr-8 pl-4">
      <div>
        <span className="text-gray-600 text-xl">{`#${code}`}</span>
        <h1 className="text-5xl font-normal uppercase">{name}</h1>
      </div>
      <p className="text-lg text-[#575757]">{about}</p>
      <ul className="flex gap-4">
        <li>
          <p>
            <span className="font-semibold uppercase">height: </span>
            {height * 10}cm
          </p>
        </li>
        <li>
          <p>
            <span className="font-semibold uppercase">weight: </span>
            {weight * 0.22}lbs
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Summary;
