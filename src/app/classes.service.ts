import { Injectable } from '@angular/core';
import { CLASSES } from './classes-data';
import { CLASS } from './class';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor() { }

  //Used in exercise 10
  getClasses(): CLASS[]{
    return CLASSES;
  }

  //Used in exercise 11
  addClasses(newClass:CLASS){
    CLASSES.push(newClass)
  }
}
