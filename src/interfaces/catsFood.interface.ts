export enum EWeightFood {
  zeroFive = "0,5",
  two = "2",
  five = "5",
}

export interface ICatsFood {
  id: string;
  title: string;
  description: string;
  weight: EWeightFood;
}
