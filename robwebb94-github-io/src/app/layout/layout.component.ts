import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  splashScreenShowing = true;
    
  @ViewChild('navbar') nav!: ElementRef;
  sticky: boolean = false;
  elementPosition: any;

  @HostListener('window:scroll', ['$event'])
  handleScroll(){
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.elementPosition){        
          this.sticky = true;
      } else {
          this.sticky = false;
      }
  }

  ngAfterViewInit(){
    // this.elementPosition = this.nav.nativeElement.offsetTop;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
