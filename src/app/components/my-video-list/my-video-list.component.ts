import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-video-list',
  templateUrl: './my-video-list.component.html',
  styleUrls: ['./my-video-list.component.css']
})
export class MyVideoListComponent implements OnInit {

  @Input() videoList: any;

  isCurrentViewFavorites: boolean;

  constructor() { }

  ngOnInit() {
  }

  onVidClicked(item) {}

  onSaveClicked(item) {}

}
