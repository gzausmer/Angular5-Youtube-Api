import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-side-nav',
  templateUrl: './my-side-nav.component.html',
  styleUrls: ['./my-side-nav.component.css']
})
export class MySideNavComponent implements OnInit {
  selectedVideoUrl: any;

  constructor() { }

  ngOnInit() {
  }

  trustSrc(selectedVideoUrl) {}
}
