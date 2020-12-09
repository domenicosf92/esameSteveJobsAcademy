import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Author } from 'src/app/models/artistModel';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  public artistFg = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    age: new FormControl(''),
    description: new FormControl('')
  });

  public datasource: Array<Author> = [
    {
      id: 0,
      name: "Tiziano",
      surname: "Ferro",
      age: "40",

      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s'
    },
    {
      id: 1,
      name: "Giorgio",
      surname: "Vanni",
      age: "45",
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      id: 2,
      name: "Laura",
      surname: "Pausini",
      age: "46",
      description: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    }
  ];
  public artist: Partial<Author> = {};

  constructor(route: ActivatedRoute) {
    route.queryParams.subscribe(params => {
      if (params && Object.entries(params).find(([key, value]) => key === 'id')) {
        this.artist = this.datasource.find(author => author.id === Number(Object.entries(params).map(([key, value]) => value)[0])) as Author;
        if (this.artist) {
          this.artistFg.patchValue(this.artist);
        }
      }
    })
  }

  ngOnInit(): void {
  }


  public get name(): FormControl {
    return this.artistFg.controls['name'] as FormControl;
  }
  public get surname(): FormControl {
    return this.artistFg.controls['surname'] as FormControl;
  }
  public get age(): FormControl {
    return this.artistFg.controls['age'] as FormControl;
  }
  public get description(): FormControl {
    return this.artistFg.controls['description'] as FormControl;
  }


}
