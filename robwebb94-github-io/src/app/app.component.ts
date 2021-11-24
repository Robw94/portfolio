import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { SplashAnimationType } from './splash-screen/splash-animation-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Portfolio';
  animationType: typeof SplashAnimationType = SplashAnimationType;


  ngOnInit(): void {
    AOS.init({
      duration: 1200,
    });
  }
}
