
import { BaseEntity } from "../types/BaseEntity";

export interface IRepository<T extends BaseEntity> {
  create(item: T): T;
  findById(id: string): T | null;
  findAll(): T[];
  deleteById(id: string): boolean;
}
