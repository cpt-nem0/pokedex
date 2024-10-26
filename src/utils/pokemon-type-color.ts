interface RGB {
  r: number;
  g: number;
  b: number;
}

const colours: { [key: string]: string } = {
  normal: "#C4C8A3",
  fire: "#F4A87B",
  water: "#A4BFF5",
  electric: "#F9E29A",
  grass: "#A9DFA1",
  ice: "#C3EDED",
  fighting: "#DB7875",
  poison: "#C67BC6",
  ground: "#E9D7A7",
  flying: "#C0B3F8",
  psychic: "#FBA9B8",
  bug: "#C5D27D",
  rock: "#D1C392",
  ghost: "#9F8BC5",
  dragon: "#9D7FF7",
  dark: "#9B8575",
  steel: "#D0D0E3",
  fairy: "#EABAD1",
};

const getTypeColor = (type: string): string => colours[type] || "#777";

const getLuminance = (r: number, g: number, b: number): number => {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const color = c / 255;
    return color <= 0.03928
      ? color / 12.92
      : Math.pow((color + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
};

const hexToRgb = (hex: string): RGB | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

const getBestTextColor = (bgColor: string): string => {
  const rgb = hexToRgb(bgColor);
  if (!rgb) return "#000000";

  const luminance = getLuminance(rgb.r, rgb.g, rgb.b);
  return luminance > 0.5 ? "#000000" : "#FFFFFF";
};

export { getTypeColor, getBestTextColor };
