import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-template',
  templateUrl: './project-template.component.html',
  styleUrls: ['./project-template.component.css']
})
export class ProjectTemplateComponent implements OnInit {

  @Input() projectName: any;
  @Input() type: any;
  @Input() imgPath: any;
  @Input() description: any;

  @Input() gitHubLink: any;
  @Input() youtubeLink: any;
  @Input() technologies!: string;

  techArray: string[] = [];
  constructor() { }

  ngOnInit(): void {
    if (this.technologies) {
      this.techArray = this.technologies.split(",");
    }
  }

}
