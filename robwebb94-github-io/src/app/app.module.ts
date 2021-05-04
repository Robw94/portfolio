import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ToolsComponent } from './tools/tools.component';
import { ProjectTemplateComponent } from './portfolio/project-template/project-template.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    IntroductionComponent,
    ToolsComponent,
    ProjectTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
