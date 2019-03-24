import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = "titulo del componente"
  admin = false;
  constructor() { }

  ngOnInit() {
  }

showInfo(){
  this.admin=!this.admin;
}

}
