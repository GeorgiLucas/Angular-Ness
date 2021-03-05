import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  //Used in exercise 8
  name='Parent';

  constructor() { }

  ngOnInit(): void {
  }

  //Used in exercise 9
  consoleFunc(){
    console.log('pressed');
  }
}
