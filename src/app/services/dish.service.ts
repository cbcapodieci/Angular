import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish'; // imports Dish class from the shared folder
import { DISHES } from '../shared/dishes'; // imports the DISHES constant from dishes.ts

@Injectable()
export class DishService {

  constructor() { }

  getDishes(): Promise<Dish[]> { // This is a 'method' that returns the DISHES constant that is imported from the dish service.
    return Promise.resolve(DISHES); // now we need to inject this service into our application, so open app_module.ts
  }   

  getDish(id: number): Promise<Dish> {
    return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]);
  }

  getFeaturedDish(): Promise<Dish> {
    return Promise.resolve(DISHES.filter((dish) => (dish.featured))[0]);
  }

}
