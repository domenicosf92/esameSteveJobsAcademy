import { Component, OnInit } from '@angular/core';
import { Track } from 'src/app/models/artistModel';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss'],
  host: {
    class: 'flex w-full justify-center'
  }
})
export class RecentComponent implements OnInit {
  public track!: Track;

  public recent: Array<Track> = [
    {
      id: 0,
      author: { id: 0, name: "Tiziano", surname: "Ferro", age: "40" },
      title: "Sere Nere"
    },
    {
      id: 1,
      author: { id: 0, name: "Tiziano", surname: "Ferro", age: "40" },
      title: "Lo Stadio"
    }
  ];

  constructor() {

  }

  ngOnInit(): void {

  }

  onTrackClick(track: Track) {
    this.track = track;
  }

}
