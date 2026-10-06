
import { ApiResponse } from "./types/BaseEntity";
import { PetSupplyEntity } from "./types/PetSupplyEntity";
import { InMemoryRepository } from "./repositories/InMemoryRepository";

const repository = new InMemoryRepository<PetSupplyEntity>();

const food: PetSupplyEntity = {
  id: "1",
  title: "Корм для собак",
  price: 25.99,
  petCategory: "Собаки",
  packageWeightKg: 5,
  createdAt: new Date(),
  updatedAt: new Date(),
};

const toy: PetSupplyEntity = {
  id: "2",
  title: "Іграшка для котів",
  price: 8.5,
  petCategory: "Коти",
  packageWeightKg: 0.2,
  createdAt: new Date(),
  updatedAt: new Date(),
};

repository.create(food);
repository.create(toy);

const response: ApiResponse<PetSupplyEntity[]> = {
  success: true,
  data: repository.findAll(),
  timestamp: new Date(),
};

console.log("=== Зоотовари ===");
console.log(JSON.stringify(response, null, 2));

console.log("=== Пошук за ID ===");
console.log(repository.findById("1"));

console.log("=== Видалення товару ===");
console.log("Видалено:", repository.deleteById("2"));

console.log("=== Товари після видалення ===");
console.log(repository.findAll());
