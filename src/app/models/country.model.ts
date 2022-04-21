export interface Country {
    name: Name;
    flags: Flags;
    languages: Object;
    maps: Maps;
    region: string;
    subregion: string;
    status: string;
    population: string;
    independent: string;
    capital: string[];
    continents: string[];
    currencies: Object;
    timezones: string[];
    demonyms: Denonyms;
}
interface Name {
    official: string;
    common: string;
}

interface Denonyms {
    eng: {f:string};
}

interface Flags {
    svg: string;
    png: string;
}

interface Maps {
    googleMaps: string;
}