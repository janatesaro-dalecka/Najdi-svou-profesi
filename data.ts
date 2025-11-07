import { Skill, Profession } from './types';
import {
} from './components/icons';
import { OstrahaImage, PravnikImage, ManazerImage, KucharImage, MarketingovyExpertImage, EkonomImage, ItExpertImage, StatistikImage } from './components/images';

export const skills: Skill[] = [
  "komunikační dovednosti",
  "schopnost vyjednávání",
  "organizační schopnosti",
  "strategické uvažování",
  "matematické schopnosti",
  "analytické myšlení",
  "pečlivost",
  "logické uvažování",
  "zájem o nové technologie",
  "systematičnost",
  "kreativita",
  "práce pod tlakem",
  "prezentační dovednosti",
  "rozhodnost",
  "sebekontrola",
];

export const professions: Profession[] = [
  {
    name: "Manažer",
    skills: ["komunikační dovednosti", "schopnost vyjednávání", "organizační schopnosti", "strategické uvažování"],
    icon: ManazerImage,
  },
  {
    name: "Statistik",
    skills: ["matematické schopnosti", "analytické myšlení", "pečlivost", "logické uvažování"],
    icon: StatistikImage,
  },
  {
    name: "IT expert",
    skills: ["zájem o nové technologie", "logické uvažování", "analytické myšlení", "pečlivost"],
    icon: ItExpertImage,
  },
  {
    name: "Právník",
    skills: ["pečlivost", "schopnost vyjednávání", "systematičnost", "komunikační dovednosti"],
    icon: PravnikImage,
  },
  {
    name: "Ekonom",
    skills: ["analytické myšlení", "systematičnost", "strategické uvažování", "matematické schopnosti"],
    icon: EkonomImage,
  },
  {
    name: "Kuchař",
    skills: ["kreativita", "práce pod tlakem", "pečlivost", "organizační schopnosti"],
    icon: KucharImage,
  },
  {
    name: "Marketingový expert",
    skills: ["kreativita", "prezentační dovednosti", "komunikační dovednosti", "organizační schopnosti"],
    icon: MarketingovyExpertImage,
  },
  {
    name: "Ostraha",
    skills: ["rozhodnost", "sebekontrola", "schopnost vyjednávání", "práce pod tlakem"],
    icon: OstrahaImage,
  },
];