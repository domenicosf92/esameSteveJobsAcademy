import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { getDatasource } from 'src/app/helpers/datasource';
import { Track } from 'src/app/models/artistModel';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
  host: {
    class: 'flex justify-center m-2'
  }
})
export class PlaylistComponent implements OnInit {

  public track!: Track;
  public playlist: Array<Track> = getDatasource();

  constructor() { }

  ngOnInit(): void {
  }

  onTrackClick(track: Track) {
    this.track = track;
  }

}
