import { Component} from '@angular/core';
import {PlaylistService} from './services/playlist.service';
import {SoundCloudSearch} from './services/soundcloud-search.service';
import {PlayerCmp} from './player/player.component';
import {TabListCmp} from './tablist/tablist.component';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
