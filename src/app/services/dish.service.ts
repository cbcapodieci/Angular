import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish'; // imports Dish class from the shared folder
import { DISHES } from '../shared/dishes'; // imports the DISHES constant from dishes.ts

@Injectable()
export class DishService {

  constructor() { }

  getDishes(): Dish[] { // This is a 'method' that returns the DISHES constant that is imported from the dish service.
    return DISHES;
  } // now we need to inject this service into our application, so open app_module.ts  
}

