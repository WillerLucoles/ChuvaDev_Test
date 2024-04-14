import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebarOpened = false;

  constructor() { }

  ngOnInit(): void {
  }

  openSidebar(){
    this.sidebarOpened = true;
  }

  closeSidebar(){
    this.sidebarOpened = false;
  }

}

