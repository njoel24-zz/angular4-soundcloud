import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule} from '@angular/http';
import {PlaylistService} from './services/playlist.service';
import {SoundCloudSearch} from './services/soundcloud-search.service';
import {SoundManagerSoundPlayer} from './services/soundmanager-player.service';
import {SoundManager} from './services/soundmanager.service';
import {PlayerCmp} from './player/player.component';
import {TabListCmp} from './tablist/tablist.component';
import {StoreService} from './services/store.service';
import {PlaylistCmp} from './tablist/playlist.component';
import {ControlsCmp} from "./player/controls.component";
import {VolumeCmp} from './player/volume.component';
import {SongImageCmp} from './player/song-image.component';
import {SongItemCmp} from './tablist/song-item.component';
import {TimeSeekerCmp} from './player/time-seeker.component';
import {TimeInfoCmp} from './player/time-info.component';
import {SearchBoxCmp} from './tablist/searchbox.component';

import 'rxjs/Rx';


@NgModule({
  declarations: [
    AppComponent,
    PlaylistCmp,
    SearchBoxCmp,
    TabListCmp,
    SongItemCmp,
    PlayerCmp,
    ControlsCmp,
    VolumeCmp,
    SongImageCmp,
    TimeSeekerCmp,
    TimeInfoCmp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
		SoundCloudSearch,
		PlaylistService,
		SoundManagerSoundPlayer,
		SoundManager,
		StoreService
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
