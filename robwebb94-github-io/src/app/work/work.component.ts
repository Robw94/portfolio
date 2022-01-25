import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit, AfterViewInit {

  // @ViewChild('berryworld') defaultElement!: ElementRef;

  private currentTab!: HTMLElement;
  private currentContent!: HTMLElement;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.currentTab = <HTMLElement>document.getElementById('berryworldtab');
    this.currentContent = <HTMLElement>document.getElementById('berryworldcontent');
  }


  workClicked(tab: HTMLElement, activeContent: HTMLElement) {

    // element.classList.add()
    this.currentTab.classList.remove('tab-active');
    this.currentContent.classList.remove('section-active');
    this.currentContent.classList.remove('entry-content');
    this.currentContent.classList.remove('active-content');


    tab.classList.add('tab-active');
    activeContent.classList.add('section-active');
    activeContent.classList.add('active-content');
    activeContent.classList.add('entry-content');
    this.currentTab = tab;
    this.currentContent = activeContent;
  }

}
