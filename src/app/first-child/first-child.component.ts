import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent implements OnInit {
  
  //Used in exercise 8
  @Input() data; 
  constructor() { }

  ngOnInit(): void {
  }

}
