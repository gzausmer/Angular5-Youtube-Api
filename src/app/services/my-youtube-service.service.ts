import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map'
import {ApiKey, SearchApi, VidPart, VidType} from "./consts";


@Injectable()
export class MyYoutubeServiceService {

  constructor(private http: HttpClient) { }

  getVideos(userInput) {
    const query = `q=${userInput}&`;
    const url = `${SearchApi}${VidPart}${query}${VidType}${ApiKey}`;
    return this.http.get(url).toPromise();
  }

}

export interface videoObj {
  items: any[];
}
