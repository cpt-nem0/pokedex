import React, { useRef } from "react";

interface ImageProp {
  url: string;
}

const Image: React.FC<ImageProp> = ({ url }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleAudioPlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div
      className="flex-2 min-w-[500px] w-[140px] md:w-[160px] h-auto relative aspect-square"
      onClick={handleAudioPlay}
    >
      <img src={url} className="w-full h-full object-contain" />
      <div className="w-full h-[90px] border-2 border-[#F1F0F5] rounded-[100%]"></div>
      <audio
        src="https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/609.ogg"
        ref={audioRef}
      ></audio>
    </div>
  );
};

export default Image;
