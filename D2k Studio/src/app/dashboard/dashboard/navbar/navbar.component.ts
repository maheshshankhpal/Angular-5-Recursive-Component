import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isOpend: boolean;

  constructor() { }

  ngOnInit() {
  this.isOpend=true;

  }

  openNav() {
    if(this.isOpend)
    {
      document.getElementById('mySidenav').style.width = '0';
      document.getElementById('main').style.marginLeft = '0';
      this.isOpend = false;
    }
    else
    {
      document.getElementById('mySidenav').style.width = '200px';
      document.getElementById('main').style.marginLeft = '200px';
      this.isOpend = true;
    }
    
  }
}
