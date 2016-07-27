export class Festival {
  version: number = 1.0;
  photo: string;
  description: string;
  map: MapInfo[] = [];
  infos: InfoPage[] = [];
  lineup: Scene[] = [];
  artists: Artist[] = [];
}

export class Artist {
  id: string;
  name: string;
  photo: string;
  banner: string;
  label: string;
  country: string;
  facebook: string;
  soundcloud: string;
  mixcloud: string;
  website: string;
  bio: {
    fr: string;
    en: string;
  };
  isFavorite: boolean = false;
}

export class Scene {
  name: string;
  sets: Set[] = [];
}

export enum SetType {
  DJ,
  LIVE,
  GIG,
  VJ,
  BREAK
}

export class Set {
  type: SetType;
  start: Date;
  end: Date;
  artistId: string;
}

export class InfoPage {
  title: string;
  content: string;
}

export enum MapInfoType {
  WATER,
  TOILET,
  SCENE,
  FOOD,
  SHOP,
  INFO,
  SHOWER,
  HADRA_STAND
}

export class MapInfo {
  lat: number;
  lon: number;
  title: string;
  type: MapInfoType;
  description: string;
}
