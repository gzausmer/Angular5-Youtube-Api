import {Component, Input, OnInit} from '@angular/core';
import {MyYoutubeServiceService} from "../../services/my-youtube-service.service";

@Component({
  selector: 'app-my-app-container',
  templateUrl: './my-app-container.component.html',
  styleUrls: ['./my-app-container.component.scss']
})

export class MyAppContainerComponent implements OnInit {
  private videoList;
  private videoListObj: any = {items: ""};

  constructor(private youtubeService: MyYoutubeServiceService) { }

  ngOnInit() {
  }

  getVids(userInput: string) {
    this.youtubeService.getVideos(userInput)
      .then( videoListObj => {
        this.videoList = videoListObj['items'];
      });
  }

}
