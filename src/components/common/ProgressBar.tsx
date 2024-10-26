import React, { useState, useEffect } from "react";

interface PorgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<PorgressBarProps> = ({ progress }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(progress);
  }, [progress]);

  return (
    <>
      <div className="progress-container">
        <div className="progress-filler" style={{ width: `${width}%` }}></div>
      </div>
    </>
  );
};

export default ProgressBar;
