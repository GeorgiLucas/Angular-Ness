import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent implements OnInit {

  
  @Output() consoleFunc =new EventEmitter;


  constructor() { }

  ngOnInit(): void {
  }

  emitEvent(){
    this.consoleFunc.emit();
  }


}
