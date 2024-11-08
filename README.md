# Pokédex Project Documentation

## Overview
A modern web application built with TypeScript and Tailwind CSS that leverages the PokéAPI to create an interactive Pokédex experience. The application features two main sections: a Home page showcasing individual Pokémon with detailed information and a Pokédex page displaying a comprehensive card list of all Pokémon.

## Project Structure
```
src/
├── App.tsx                    # Main application component
├── assets/
│   └── pokemon.svg           # Project assets
├── components/
│   ├── common/               # Shared components
│   │   ├── Header.tsx       # Application header
│   │   ├── NavBar.tsx       # Navigation bar
│   │   ├── PokemonType.tsx  # Pokemon type display
│   │   ├── ProgressBar.tsx  # Stats progress bar
│   │   ├── SearchBar.tsx    # Search functionality
│   │   └── styles.css
│   └── pages/
│       ├── HomePage/
│       │   ├── Home.tsx     # Home page component
│       │   ├── Image.tsx    # Pokemon image display
│       │   ├── NavFooter.tsx # Navigation footer
│       │   ├── PokemonDetails.tsx # Detailed stats
│       │   ├── Summary.tsx  # Pokemon summary
│       │   └── styles.css
│       └── PokedexPage/
│           ├── PokeCard.tsx # Individual pokemon card
│           └── Pokedex.tsx  # Pokedex list view
├── service/
│   ├── pokemon-data.ts      # API integration
│   └── types.d.ts          # TypeScript definitions
└── utils/
    └── pokemon-type-color.ts # Type color mappings
```

## Components Description

### Common Components

#### Header (`Header.tsx`)
- Main application header
- Contains branding elements

#### NavBar (`NavBar.tsx`)
- Navigation between Home and Pokédex pages
- Responsive design for mobile and desktop

#### PokemonType (`PokemonType.tsx`)
- Displays Pokémon type badges
- Color-coded based on type (fire, water, etc.)

#### ProgressBar (`ProgressBar.tsx`)
- Visual representation of Pokémon stats
- Animated stat bars

#### SearchBar (`SearchBar.tsx`)
- Search functionality for Pokémon
- Real-time filtering capabilities

### Home Page Components

#### Home (`Home.tsx`)
- Main container for individual Pokémon view
- Orchestrates other home page components

#### Image (`Image.tsx`)
- Displays Pokémon sprite/artwork
- Handles image loading states

#### NavFooter (`NavFooter.tsx`)
- Navigation controls for browsing Pokémon
- Previous/Next functionality

#### PokemonDetails (`PokemonDetails.tsx`)
- Detailed Pokémon statistics display
- Shows HP, Attack, Defense, etc.

#### Summary (`Summary.tsx`)
- Basic Pokémon information
- Displays name, number, height, weight

### Pokédex Page Components

#### PokeCard (`PokeCard.tsx`)
- Individual card for each Pokémon
- Displays sprite, name, and type

#### Pokedex (`Pokedex.tsx`)
- Grid layout of all Pokémon
- Handles pagination and filtering

## API Integration

### PokéAPI Endpoints Used
```typescript
// Get individual Pokémon details
GET https://pokeapi.co/api/v2/pokemon/{id or name}

// Get Pokémon type info
GET https://pokeapi.co/api/v2/types?{name}

// Get Pokémon species information
GET https://pokeapi.co/api/v2/pokemon-species/{id}
```

## Type Definitions

```typescript
// Pokemon data interface
interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  types: PokemonType[];
  stats: PokemonStat[];
  height: number;
  weight: number;
}

// Pokemon type interface
interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

// Pokemon stat interface
interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}
```

## Styling

### Tailwind Classes Usage
- Responsive design using Tailwind breakpoints
- Custom color scheme based on Pokémon types
- Consistent spacing and layout classes

### Type Colors (`pokemon-type-color.ts`)
```typescript
export const typeColors = {
  normal: '#A8A878',
  fire: '#F08030',
  water: '#6890F0',
  // ... other type colors
};
```

## Key Features

### Home Page
- Random Pokémon showcase
- Detailed statistics display
- Navigation between Pokémon
- Type-based color theming

### Pokédex Page
- Grid layout of all Pokémon
- Search functionality
- Type filtering
- Responsive card design

## Setup and Installation

1. Clone the repository
2. Install dependencies:
```bash
pnpm install
```

3. Start development server:
```bash
pnpm run dev
```

## Future Enhancements
1. Advanced filtering options
2. Favorites system
3. Evolution chain display
4. Move list integration

## Future Performance Considerations
- Image lazy loading
- API response caching
- Pagination implementation
- Virtual scrolling for large lists

## Contributing
1. Fork the repository
2. Create feature branch
3. Submit pull request
4. Follow coding standards
