import { Component, HostListener } from '@angular/core';
import { ScrollMasterService } from './scroll-master.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RustyLynx';
  scrollHeight = 0;

  constructor(
    public scroll: ScrollMasterService
  ) {
    
  }

  @HostListener('window:wheel', ['$event'])
  onscroll (e: any) {
    this.scroll.scroll(e);
  }
}
