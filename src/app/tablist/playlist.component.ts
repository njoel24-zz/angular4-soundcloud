import {Component, OnInit} from '@angular/core';
import {PlaylistService} from '../services/playlist.service';
import {SongItemCmp} from '../tablist/song-item.component';
@Component({
	selector: 'playlist',
	entryComponents: [SongItemCmp],
	template: `
	<div class="tab-pane" id="playlistContainer">
		<song-item *ngFor="let song of data" [song]="song" [show-add]="false" [show-play]="true" [show-delete]="true"></song-item>
	</div>
	`,
	styles: [`
	#playlistContainer{
		padding:7px;
		max-height: 400px;
		overflow-y: scroll;
	}
	`]
})
export class PlaylistCmp implements OnInit{
	data: Array<any>;

	constructor(private playlistService: PlaylistService) {
		this.playlistService
				.getAll()
				.subscribe(playlistData => {
					this.data = playlistData;
				});
		this.playlistService.publishChanges();
	}

	ngOnInit() {

	}

}