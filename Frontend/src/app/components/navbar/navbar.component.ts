import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  img = 'https://anthoncode.com/wp-content/uploads/2019/01/angular-logo-png.png';

  constructor() { }

  ngOnInit(): void {
  }

}
