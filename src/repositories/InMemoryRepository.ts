
import { BaseEntity } from "../types/BaseEntity";
import { IRepository } from "./IRepository";

export class InMemoryRepository<T extends BaseEntity>
  implements IRepository<T> {
  protected items: T[] = [];

  create(item: T): T {
    this.items.push(item);
    return item;
  }

  findById(id: string): T | null {
    return this.items.find((item) => item.id === id) ?? null;
  }

  findAll(): T[] {
    return [...this.items];
  }

  deleteById(id: string): boolean {
    const index = this.items.findIndex((item) => item.id === id);

    if (index === -1) {
      return false;
    }

    this.items.splice(index, 1);
    return true;
  }
}
