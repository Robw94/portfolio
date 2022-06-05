import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { SplashAnimationType } from './splash-animation-type';


@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SplashScreenComponent implements OnInit, AfterViewInit {
  windowWidth!: string;
  splashTransition!: string;
  opacityChange: number = 1;
  showSplash = true;

  @Input() animationDuration: number = 0.5;
  @Input() duration: number = 3;
  @Input() animationType: SplashAnimationType = SplashAnimationType.FadeOut;
  @Output() splashScreenShowing: EventEmitter<boolean> = new EventEmitter();


  constructor(private renderer2: Renderer2) {
    
  }
  ngAfterViewInit(): void {


  }

  ngOnInit(): void {

    setTimeout(() => {
      let transitionStyle = "";
      switch (this.animationType) {
        case SplashAnimationType.SlideLeft:
          this.windowWidth = "-" + window.innerWidth + "px";
          transitionStyle = "left " + this.animationDuration + "s";
          break;
        case SplashAnimationType.SlideRight:
          this.windowWidth = window.innerWidth + "px";
          transitionStyle = "left " + this.animationDuration + "s";
          break;
        case SplashAnimationType.FadeOut:
          transitionStyle = "opacity " + this.animationDuration + "s";
          this.opacityChange = 0;
      }

      const element = document.getElementById('splashBackgound');
      this.splashTransition = transitionStyle;
      // this.renderer2.setAttribute(element,'class','fade-out')

      setTimeout(() => {
        this.showSplash = !this.showSplash;
        this.splashScreenShowing.emit(false);
      }, this.animationDuration * 500);
    }, this.duration * 1000);
  }

}
