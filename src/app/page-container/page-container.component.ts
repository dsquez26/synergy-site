import { Component } from '@angular/core';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.css']
})
export class PageContainerComponent {
  currentPageIndex = 0;

  pages = [
    'PageOne',
    'PageTwo',
    'PageThree',
    'PageFour',
    'PageFive',
    'PageSix',
    'PageSeven',
    'PageEight'
  ];

  goNext() {
    if (this.currentPageIndex < this.pages.length - 1) {
      this.currentPageIndex++;
    }
  }

  goBack() {
    if (this.currentPageIndex > 0) {
      this.currentPageIndex--;
    }
  }
}
