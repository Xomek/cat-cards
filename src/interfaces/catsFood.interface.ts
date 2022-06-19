export enum EWeightFood {
  zeroFive = "0,5",
  two = "2",
  five = "5",
}

export enum ETaste {
  chiken = "с курой",
  fish = "с рыбой",
  liver = "с фуа-гра",
}

export interface ICatsFood {
  id: string;
  title: string;
  taste: ETaste;
  servings: number;
  present: number;
  weight: EWeightFood;
  description: string;
  count: number;
  imgSrc: string;
}
