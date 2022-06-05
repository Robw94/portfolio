import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ToolsComponent } from './tools/tools.component';
import { ProjectTemplateComponent } from './portfolio/project-template/project-template.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { LayoutComponent } from './layout/layout.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    IntroductionComponent,
    ToolsComponent,
    ProjectTemplateComponent,
    ContactMeComponent,
    LayoutComponent,
    SplashScreenComponent,
    WorkComponent,
    AboutComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
