import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MyToolbarComponent} from './components/my-toolbar/my-toolbar.component';
import {MySideNavComponent} from './components/my-side-nav/my-side-nav.component';
import {MyVideoListComponent} from './components/my-video-list/my-video-list.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MyMaterialModule} from "./modules/material/material.module";
import {MyYoutubeServiceService} from "./services/my-youtube-service.service";
import {FormsModule} from '@angular/forms';
import {MyAppContainerComponent} from './components/my-app-container/my-app-container.component';


@NgModule({
  declarations: [
    AppComponent,
    MyToolbarComponent,
    MySideNavComponent,
    MyVideoListComponent,
    MyAppContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MyMaterialModule,
    FormsModule
  ],
  providers: [MyYoutubeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
