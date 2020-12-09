import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getDatasource } from 'src/app/helpers/datasource';
import { Author, Track } from 'src/app/models/artistModel';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss'],
  host: {
    class: 'h-full w-full justify-center items-center'
  }
})
export class RecentComponent implements OnInit {

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

}
