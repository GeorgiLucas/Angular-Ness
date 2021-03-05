import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { CLASSES } from '../classes-data';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  classes=CLASSES;
  filteredClass;
  isGreen: boolean = false; 

  constructor() { 
  }

  ngOnInit(): void {

    //this.filterClasses(this.classes);
  }

  filterClasses(data){
    data.forEach(function(element){
      element.students.forEach(function(student){
        if(student.name=="Ron"){
        this.filterClasses.push(element)
        }
      });
    });
  }

  //Used in exercise 5 
  deleteItem(){
    this.classes.shift();
  }

  //Used in exercise 6
  changeBool(){
    this.isGreen=!this.isGreen;
  }
}
