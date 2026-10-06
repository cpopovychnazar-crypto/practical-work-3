
import { BaseEntity } from "./BaseEntity";

export interface PetSupplyEntity extends BaseEntity {
  title: string;
  price: number;
  petCategory: string;
  packageWeightKg: number;
}
