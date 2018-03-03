import { Component, OnInit,  EventEmitter, Input, Output } from '@angular/core';
import {MyYoutubeServiceService} from "../../services/my-youtube-service.service";

@Component({
  selector: 'app-my-toolbar',
  templateUrl: './my-toolbar.component.html',
  styleUrls: ['./my-toolbar.component.css']
})
export class MyToolbarComponent implements OnInit {

  constructor() { }

  @Output() onGetVids = new EventEmitter<string>();

  isFavoritesExits: boolean;
  userInput: any;

  ngOnInit() {
  }

  favoritesClicked() {
    // do something;
  }

  getVids(userInput) {
    this.onGetVids.emit(userInput)
  }

}
