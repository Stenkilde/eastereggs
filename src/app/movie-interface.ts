export interface MovieInterface {
    id: Number;
    title: String;
    year: Number;
    phase: String;
    eastereggs: Array<EasterEggInterface>;
}

export interface EasterEggInterface {
    name: String;
    timestamp: String;
}
