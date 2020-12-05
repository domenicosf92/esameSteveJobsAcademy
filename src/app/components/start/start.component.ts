import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit, AfterViewInit {
  @ViewChild('dropdown')
  dropdown!: ElementRef<HTMLElement>;

  constructor() { }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
  }

  openPanel() {
    this.dropdown.nativeElement.classList.toggle('hidden');
  }

}
