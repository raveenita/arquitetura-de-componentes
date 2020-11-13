import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  name: string = 'Geovana';
  newName: string;
  avatar: string = 'assets/images/geovana.jpg';

  constructor() { }

  ngOnInit(): void {
  }
  
  makeMeHero(){
    this.name = this.newName;
    this.avatar = 'assets/images/ravena.jpg';
  }
}
