import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { SplashAnimationType } from './splash-animation-type';
import Typed, { TypedOptions } from 'typed.js';
import { NgxTypedJsComponent } from 'ngx-typed-js';


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
  showSplash = false;

  @Input() animationDuration: number = 0.5;
  @Input() duration: number = 3;
  @Input() animationType: SplashAnimationType = SplashAnimationType.FadeOut;
  @Output() splashScreenShowing: EventEmitter<boolean> = new EventEmitter();
  @ViewChild(NgxTypedJsComponent) typedComponent!: NgxTypedJsComponent;


  constructor(private renderer2: Renderer2) {
    
  }
  ngAfterViewInit(): void {
    // this.typedComponent = new NgxTypedJsComponent();
    // const options: TypedOptions = {
    //   // strings: ['Hello My Name is Robert Webb. ^500 \n I am a Web Developer', 'Welcome to my Portfolio.'],
    //   strings: ['Welcome to my Portfolio.'],
    //   typeSpeed: 50,
    //   backSpeed: 10,
    //   showCursor: true,
    //   smartBackspace: true,
    //   cursorChar: '|',
    //   loop: false,
    //   shuffle: false,
    //   onComplete: function () {
    //     setTimeout(() => {
    //       let transitionStyle = "";

    //     }, 500);
    //   }

    // };

    // //  const element = document.getElementById()
    // const typed = new Typed('#typed', options);
    // typed.start();


  }

  ngOnInit(): void {

    // setTimeout(() => {
    //   let transitionStyle = "";
    //   switch (this.animationType) {
    //     case SplashAnimationType.SlideLeft:
    //       this.windowWidth = "-" + window.innerWidth + "px";
    //       transitionStyle = "left " + this.animationDuration + "s";
    //       break;
    //     case SplashAnimationType.SlideRight:
    //       this.windowWidth = window.innerWidth + "px";
    //       transitionStyle = "left " + this.animationDuration + "s";
    //       break;
    //     case SplashAnimationType.FadeOut:
    //       transitionStyle = "opacity " + this.animationDuration + "s";
    //       this.opacityChange = 0;
    //   }

    //   const element = document.getElementById('splashBackgound');
    //   this.splashTransition = transitionStyle;
    //   this.splashScreenShowing.emit(false);
    //   this.renderer2.setAttribute(element,'class','fade-out')

    //   setTimeout(() => {
    //     this.showSplash = !this.showSplash;
    //   }, this.animationDuration * 1000);
    // }, this.duration * 1000);
  }

}
