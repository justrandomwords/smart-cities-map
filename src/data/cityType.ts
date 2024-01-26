export interface City {
  id:          number;
  name:        string;
  country:     string;
  coordinates: number[];
  content:     Content;
}

export interface Content {
  short_description:   string;
  description:         string;
  first_image:         string;
  second_image:        string;
  rank:                number;
  shifted_place:       number;
  HDI:                 number;
  general_rating:      string;
  structures_rating:   string;
  technologies_rating: string;
  main_statistic:      MainStatistic[];
  factor_statistic:    FactorStatistic;
}

export interface FactorStatistic {
  structures:   Structures;
  technologies: Structures;
}

export interface Structures {
  health_safety: Activity[];
  mobility:      Activity[];
  activities:    Activity[];
  opportunities: Activity[];
  governance:    Activity[];
}

export interface Activity {
  min:     number;
  average: number;
  max:     number;
}

export interface MainStatistic {
  "2018": number;
  "2019": number;
  "2020": number;
  "2021": number;
  now:    string;
}