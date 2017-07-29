import {Component, OnInit} from '@angular/core';
import {SoundManager} from '../services/soundmanager.service';

import {Song} from '../interfaces/song.model';
import {Events} from '../interfaces/events.model';

import {ControlsCmp} from "./controls.component";
import {VolumeCmp} from './volume.component';
import {SongImageCmp} from './song-image.component';

import {TimeSeekerCmp} from './time-seeker.component';
import {TimeInfoCmp} from './time-info.component';

@Component({
	selector: 'player',
	template: `
	<section class="player">
		<div class="row">
			<div class="col-xs-4 player-image">
				<song-image [song]="song"></song-image>
			</div>
			<div class="col-xs-8 player-info">
				<h2 class='song-title' *ngIf='song'>{{ song.name }}</h2>
				<h3 class="song-artist" *ngIf='song'>{{ song.artist }}</h3>
				<div class='controllerGroup'>
					<div class='pull-left'>
						<controls [song]="song" [is-playing]="isPlaying"></controls>
					</div>
					<div class='pull-right'>
						<volume></volume>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12">
				<div class="row">
					<div class="col-xs-12">
						<time-info [song]="song" [time]="currentTime" [total-time]="totalTime"></time-info>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12">
						<time-seeker [time]="currentTime" [total-time]="totalTime"></time-seeker>
					</div>
				</div>
			</div>
		</div>
	</section>
	`,
	styles: [`
	.player{
		padding-top:7px;
		padding-left:7px;
		padding-bottom: 18px;
		padding-right: 7px;
		background-color: #fff;
	}

	.song-title {
		font-size: 14px;
		margin-top:4px;
		padding-bottom: 0;
		color:#000;
		margin-bottom: 7px;
	}

	.song-artist{
		font-size: 13px;
		margin-top: 6px;
		color:#939393;
	}
	.player-info {
		padding-left:0;
	}

	.controllerGroup{
		display: block;
		margin-top: 15px;
	}

	.controllerGroup a {
		text-decoration: none;
		outline: none;
	}

	.controllerGroup a:focus {
		text-decoration: none;
		outline: none;
	}
	`],
	//directives:[NgIf, ControlsCmp, VolumeCmp, SongImageCmp, TimeSeekerCmp, TimeInfoCmp]
})
export class PlayerCmp implements OnInit {
	public song: Song;
	isPlaying: boolean;
	currentTime: number;
	totalTime: number;
	private soundManager: SoundManager;

	constructor(soundManager: SoundManager) {
		this.song = null;
		this.soundManager = soundManager;
		this.soundManager.on(Events.ChangeSong, (song) => {
			this.song = song;
			this.totalTime = this.soundManager.getTotalTime();
		});
	}

	ngOnInit() {
		this.soundManager.on(Events.Pause, () => {
			this.isPlaying = false;
		});

		this.soundManager.on(Events.Play, () => {
			this.isPlaying = true;
		});

		this.soundManager.on(Events.PlayResume, () => {
			this.isPlaying = true;
		});

		this.soundManager.on(Events.Time, (time) => {
			this.currentTime = time;
			this.totalTime = this.soundManager.getTotalTime();
		});
	}

}