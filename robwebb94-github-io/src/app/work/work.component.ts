import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit, AfterViewInit {

  private currentContent!: HTMLElement;

  private curButton!: HTMLButtonElement;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {    
    this.currentContent = <any>document.getElementById('berryworldcontent');    
    this.curButton = <HTMLButtonElement>document.getElementById('berryworldbutton');
  }

  next(btn: HTMLButtonElement, activeContent: HTMLElement) {
    this.curButton.classList.remove('selected');
    this.currentContent.classList.add('hidden');
    btn.classList.add('selected');
    activeContent.classList.remove('hidden');
    this.currentContent = activeContent;
    this.curButton = btn;
  }

}
