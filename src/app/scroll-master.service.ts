import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollMasterService {
  scrollHeight: number = 0;
  targetHeight: number = 0;

  constructor() {
    setInterval(() => {
      let diff = (this.targetHeight - this.scrollHeight) / 10;

      if (diff > 0) {
        // diff = Math.max(diff, 10);
  
        if (diff < 1) this.targetHeight = this.scrollHeight;
      }
      if (diff < 0) {
        // diff = Math.min(diff, -10);
  
        if (diff > -1) this.targetHeight = this.scrollHeight;
      }
  
      this.scrollHeight += diff;
  
      this.scrollHeight = Math.round(this.scrollHeight);
  
      return this.scrollHeight;
    }, 20);
  }

  getScrollHeight(): number {
    // this.scroll({'deltaY': 4});
    return this.scrollHeight;
  }

  scroll(e: any): void {
    let delta = e.deltaY;
    this.targetHeight += delta * 2;

    let appWrapper = document.getElementById('appWrapper');

    if (!appWrapper) {
      alert("Something has gone, really, really, wrong.");
      return;
    }

    let maxScroll = appWrapper.offsetHeight - window.innerHeight;

    if (this.targetHeight < 0) this.targetHeight = 0;
    if (this.targetHeight > maxScroll) this.targetHeight = maxScroll;
  }

  getBlur(): number {
    if (this.targetHeight == this.scrollHeight) return 0;
    return 4;
  }
}
