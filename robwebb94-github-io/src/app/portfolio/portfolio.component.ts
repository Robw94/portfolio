import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.filterProjects('all');
  }

  addActiveClass(event: any): void {
    var oldButton = document.getElementsByClassName('active');
    if (oldButton) {
      oldButton[0].className = oldButton[0].className.replace(
        ' active',
        ''
      );
    }
    event.target.classList.add('active'); // To Remove
  }

  filterProjects(c: any) {
    var x, i;

    x = document.getElementsByClassName('col-lg-6');
    if (c == 'all') {
      c = '';
    }

    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
      this.removeClass(x[i], 'show');
      this.removeClass(x[i], 'hide');
      if (x[i].className.indexOf(c) > -1) {
        this.addClass(x[i], 'show');
      } else {
        this.addClass(x[i], 'hide');
      }
    }
  }

  removeClass(element: any, name: any) {
    var i, arr1, arr2;
    arr1 = element.className.split(' ');
    arr2 = name.split(' ');
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(' ');
  }

  addClass(element: any, name: any) {
    var i, arr1, arr2;
    arr1 = element.className.split(' ');
    arr2 = name.split(' ');
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += ' ' + arr2[i];
      }
    }
  }
}
