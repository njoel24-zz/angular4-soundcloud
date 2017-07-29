import {Song} from './song.model';
import {Events} from "./events.model";
export interface ISoundPlayer {
	initialize: (song: Song, calback: (e: Error) => void) => void;
	play: () => void;
	pause: () => void;
	seek: (time: number) => void;
	currentTime: () => number;
	totalTime?: () => number;
	setVolume: (value: number) => void;
	getVolume: () => number;
	on: (event: number, handler: (data: any) => void) => void;
}