import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public isCollapsed: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onSideBarToggle(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
